import sharp from 'sharp';
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

await Promise.all(['public/images','public/fonts','public/licenses','src/generated'].map(p=>mkdir(p,{recursive:true})));
const images = [
  ['land-air-sea','002_2174127214.jpg'],
  ['truck-shipping','003_e653f2c312dd0892ff986ee6d292bd98.jpg'],
  ['air-cargo','004_120229475.jpg'],
  ['ocean-freight','005_2210163035.jpg'],
  ['event-cases','007_2199284954.jpg'],
  ['event-venue','008_2171658211.jpg'],
  ['warehouse','017_Gydg3Ke.jpg'],
  ['express-truck','018_107210.jpg'],
  ['highway','023_TradeShowTruckingCompany.jpg'],
];
for (const [name,source] of images) {
  for (const width of [480,768,1200]) {
    const pipeline=sharp(resolve('assets/originals',source)).rotate().resize({width,height:Math.round(width*2/3),fit:'cover'});
    await Promise.all([
      pipeline.clone().webp({quality:82}).toFile(`public/images/${name}-${width}.webp`),
      pipeline.clone().avif({quality:52,effort:3}).toFile(`public/images/${name}-${width}.avif`),
    ]);
  }
}
await sharp(resolve('assets/originals/001_2547c58a-4f59-419e-add3-5ea39a9bc2dd.png')).resize(64,64,{fit:'cover'}).png().toFile('public/favicon.png');
for (const [family,file] of [['manrope','manrope-latin-wght-normal.woff2'],['source-sans-3','source-sans-3-latin-wght-normal.woff2']]) {
  const base=`node_modules/@fontsource-variable/${family}`;
  await copyFile(`${base}/files/${file}`,`public/fonts/${family}-latin.woff2`);
  await copyFile(`${base}/LICENSE`,`public/licenses/${family}-OFL.txt`);
}
const names=['truck','plane','ship','route','package','world','calendar','shield-check','arrow-up-right','arrow-right','chevron-down','plus','minus','phone','mail','clock','menu-2','x','check','message-circle','clipboard-list','map-pin'];
const icons={};
for (const name of names) {
  const svg=await readFile(`node_modules/@tabler/icons/icons/outline/${name}.svg`,'utf8');
  icons[name]=svg.replace(/^[\s\S]*?<svg[^>]*>/,'').replace(/<\/svg>[\s\S]*$/,'');
}
await writeFile('src/generated/icons.json',JSON.stringify(icons));
await copyFile('node_modules/@tabler/icons/LICENSE','public/licenses/tabler-icons-MIT.txt');
console.log('Event Shipping images, fonts and icons prepared.');
