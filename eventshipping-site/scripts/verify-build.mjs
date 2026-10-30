import {readFile,access,readdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import assert from 'node:assert/strict';

const root=resolve('dist');
async function walk(dir){const files=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=resolve(dir,e.name);if(e.isDirectory())files.push(...await walk(p));else files.push(p);}return files;}
const pages=(await walk(root)).filter(p=>p.endsWith('.html'));
assert.equal(pages.length,9,'Expected eight content pages and 404.');
let references=0;
for(const page of pages){
  const html=await readFile(page,'utf8');
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`One H1: ${page}`);
  assert.ok(!/TSS Insurance|christian-tolossa|714-534|tss-logo/i.test(html),`No retained TSS content: ${page}`);
  assert.ok(html.includes('fda6e357b5c097d8/script.js'),`Requested chatbot: ${page}`);
  assert.ok(html.includes('noindex, nofollow'),`Private review SEO: ${page}`);
  for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){
    const raw=match[1];if(/^(?:https?:|mailto:|tel:|sms:|data:|\/\/)/.test(raw))continue;
    const path=raw.split(/[?#]/)[0];if(!path)continue;
    const target=resolve(path.startsWith('/')?root:dirname(page),path.replace(/^\//,''));
    await access(path.endsWith('/')?resolve(target,'index.html'):target);
    references++;
  }
}
console.log(`Verified ${pages.length} HTML pages, one H1 each, chatbot integration and ${references} local references.`);
