import { next } from '@vercel/functions';

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Event Shipping — Scheduled maintenance</title>
<meta name="robots" content="noindex, nofollow" />
<meta name="theme-color" content="#800000" />
<link rel="icon" href="/favicon.png" />
<link rel="preload" as="font" type="font/woff2" href="/fonts/manrope-latin.woff2" crossorigin />
<link rel="preload" as="font" type="font/woff2" href="/fonts/source-sans-3-latin.woff2" crossorigin />
<style>
@font-face{font-family:Manrope;src:url('/fonts/manrope-latin.woff2') format('woff2');font-weight:500 700;font-style:normal;font-display:swap}
@font-face{font-family:'Source Sans 3';src:url('/fonts/source-sans-3-latin.woff2') format('woff2');font-weight:400 600;font-style:normal;font-display:swap}
:root{--brand:#800000;--brand-hover:#590000;--bg:#FAFAF7;--surface:#FFFFFF;--muted:#F1EFEB;--heading:#22211F;--body:#4F4C47;--muted-text:#6B655D;--border:#DDD9D2;--font-heading:Manrope,Arial,sans-serif;--font-body:'Source Sans 3',Arial,sans-serif}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;min-height:100dvh;display:grid;place-items:center;padding:24px;background:var(--bg);color:var(--body);font-family:var(--font-body);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
.card{width:100%;max-width:560px;background:var(--surface);border:1px solid var(--border);border-radius:10px;overflow:hidden;text-align:center}
.rule{height:6px;background:var(--brand)}
.inner{padding:48px 32px 40px}
.wordmark{font-family:var(--font-heading);font-weight:700;font-size:20px;letter-spacing:-.03em;color:var(--heading);text-decoration:none;text-transform:uppercase}
.wordmark .rest{color:var(--brand)}
.wordmark .domain{color:var(--muted-text);font-weight:500;text-transform:none}
.eyebrow{margin:32px 0 12px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand)}
h1{margin:0;color:var(--heading);font-family:var(--font-heading);font-weight:600;font-size:32px;line-height:1.12;letter-spacing:-.03em}
p{margin:16px auto 0;max-width:44ch;color:var(--body)}
.actions{margin-top:32px;display:flex;flex-direction:column;gap:12px;align-items:stretch}
a.button{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:48px;padding:14px 24px;border-radius:6px;border:1px solid var(--brand);background:var(--brand);color:#fff;font-weight:600;text-decoration:none}
a.button:hover{background:var(--brand-hover);border-color:var(--brand-hover)}
a.button.secondary{background:transparent;color:var(--brand)}
a.button.secondary:hover{background:var(--muted);border-color:var(--brand-hover);color:var(--brand-hover)}
.note{margin-top:28px;font-size:14px;color:var(--muted-text)}
@media(min-width:560px){h1{font-size:38px}.actions{flex-direction:row}.actions a.button{flex:1}}
</style>
</head>
<body>
<main class="card">
<div class="rule"></div>
<div class="inner">
<a class="wordmark" href="https://eventshipping.com">EVENT<span class="rest">shipping</span><span class="domain">.com</span></a>
<p class="eyebrow">Scheduled maintenance</p>
<h1>We&rsquo;ll be right back.</h1>
<p>Our website is being updated to serve you better. If you have an event shipment or need a rate quote right now, our team is available 7 days a week.</p>
<div class="actions">
<a class="button" href="tel:+18006490130">Call 800-649-0130</a>
<a class="button secondary" href="mailto:info@eventshipping.com">Email info@eventshipping.com</a>
</div>
<p class="note">Thank you for your patience. Please check back shortly.</p>
</div>
</main>
</body>
</html>`;

// ponytail: maintenance is ON by default; set MAINTENANCE_MODE=false in Vercel to bring the site back.
export default function middleware(): Response {
  const flag = (process.env.MAINTENANCE_MODE ?? '').trim().toLowerCase();

  if (flag === 'false' || flag === '0' || flag === 'off') {
    return next();
  }

  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store, no-cache, must-revalidate, max-age=0',
      'retry-after': '3600',
      'x-maintenance': 'on',
    },
  });
}
