/**
 * Generates all guide-listed HTML pages, sitemap.xml, robots.txt
 * Run: node generate-site.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PAGES } from './pages-data.mjs';
import { SITE_HEADER, SITE_NAV_SCRIPT } from './site-nav.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** CURSOR_BUILD_ALL: SpeakableSpecification on category pillar pages only */
const SPEAKABLE_PILLARS = new Set([
  'manufacturing-equipment-financing.html',
  'construction-equipment-financing.html',
  'agricultural-equipment-financing.html',
  'forestry-tree-equipment-financing.html',
  'medical-dental-equipment-financing.html',
  'food-processing-equipment-financing.html',
  'warehouse-material-handling-financing.html',
  'printing-signage-equipment-financing.html',
  'restaurant-equipment-financing.html',
  'hvac-equipment-financing.html',
  'oil-gas-equipment-financing.html',
  'mining-equipment-financing.html',
  'gym-fitness-equipment-financing.html',
  'laundry-equipment-financing.html',
  'all-commercial-equipment.html',
]);
const BASE = 'https://commercialmachineryguide.com';

const FOOTER = `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:14px;">
        <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;background:var(--orange);border-radius:8px;font-size:1.2rem;">⚙️</span>
        <span style="color:white;font-size:1rem;font-weight:700;">Commercial Machinery Guide</span>
      </a>
      <p>The most comprehensive commercial machinery and equipment financing resource. Covering every category from CNC machines to combine harvesters, wood chippers to MRI machines.</p>
      <a href="tel:+19199072611" class="footer-phone">📞 (919) 907-2611</a>
      <br>
      <a href="https://axiantpartners.com/match" rel="sponsored noopener noreferrer" target="_blank" class="footer-cta-small">Explore Equipment Financing →</a>
    </div>
    <div class="footer-col">
      <h4>Equipment Categories</h4>
      <ul>
        <li><a href="/manufacturing-equipment-financing.html">Manufacturing Equipment</a></li>
        <li><a href="/construction-equipment-financing.html">Construction Equipment</a></li>
        <li><a href="/agricultural-equipment-financing.html">Agricultural Equipment</a></li>
        <li><a href="/forestry-tree-equipment-financing.html">Forestry &amp; Tree</a></li>
        <li><a href="/medical-dental-equipment-financing.html">Medical &amp; Dental</a></li>
        <li><a href="/food-processing-equipment-financing.html">Food Processing</a></li>
        <li><a href="/warehouse-material-handling-financing.html">Warehouse &amp; Logistics</a></li>
        <li><a href="/printing-signage-equipment-financing.html">Printing &amp; Signage</a></li>
        <li><a href="/hvac-equipment-financing.html">HVAC Equipment</a></li>
        <li><a href="/oil-gas-equipment-financing.html">Oil &amp; Gas Equipment</a></li>
        <li><a href="/mining-equipment-financing.html">Mining Equipment</a></li>
        <li><a href="/all-commercial-equipment.html">All Equipment →</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Equipment Guides</h4>
      <ul>
        <li><a href="/cnc-machine-financing.html">CNC Machine Financing</a></li>
        <li><a href="/excavator-financing.html">Excavator Financing</a></li>
        <li><a href="/forklift-financing.html">Forklift Financing</a></li>
        <li><a href="/tractor-financing.html">Tractor Financing</a></li>
        <li><a href="/wood-chipper-financing.html">Wood Chipper Financing</a></li>
        <li><a href="/crane-financing.html">Crane Financing</a></li>
        <li><a href="/laser-cutter-financing.html">Laser Cutter Financing</a></li>
        <li><a href="/skid-steer-financing.html">Skid Steer Financing</a></li>
        <li><a href="/stump-grinder-financing.html">Stump Grinder Financing</a></li>
        <li><a href="/bulldozer-financing.html">Bulldozer Financing</a></li>
        <li><a href="/combine-harvester-financing.html">Combine Financing</a></li>
        <li><a href="/mri-machine-financing.html">MRI Machine Financing</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Resources</h4>
      <ul>
        <li><a href="/how-commercial-equipment-financing-works.html">How It Works</a></li>
        <li><a href="/new-vs-used-equipment-financing.html">New vs Used Equipment</a></li>
        <li><a href="/equipment-financing-vs-lease.html">Loan vs Lease</a></li>
        <li><a href="/section-179-equipment-deduction.html">Section 179 Tax</a></li>
        <li><a href="/equipment-financing-credit-requirements.html">Credit Requirements</a></li>
        <li><a href="/equipment-financing-for-startups.html">Startup Financing</a></li>
        <li><a href="/tree-service-licensing-requirements.html">Tree Service Licensing</a></li>
        <li><a href="/construction-contractor-licensing.html">Contractor Licensing</a></li>
        <li><a href="/tree-service-business-income.html">Tree Service Income</a></li>
        <li><a href="/cnc-machining-business-income.html">CNC Shop Income</a></li>
        <li><a href="https://www.commercialvehicleguide.com" target="_blank" rel="noopener">🚛 Commercial Vehicle Guide</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Commercial Machinery Guide. Informational resource only. Not an offer of credit or guarantee of approval. Terms vary by lender and equipment type.</p>
    <div class="footer-bottom-links">
      <a href="/how-commercial-equipment-financing-works.html">How It Works</a>
      <a href="/all-commercial-equipment.html">All Equipment</a>
      <a href="https://axiantpartners.com/match" rel="sponsored noopener noreferrer" target="_blank">Get Financing</a>
    </div>
  </div>
</footer>
<div class="sticky-cta" id="stickyCta">
  <p><strong>Need equipment financing?</strong> Call us or explore options online — no obligation.</p>
  <div style="display:flex;gap:12px;flex-shrink:0;">
    <a href="tel:+19199072611" class="btn btn-secondary btn-sm">📞 (919) 907-2611</a>
    <a href="https://axiantpartners.com/match" rel="sponsored noopener noreferrer" target="_blank" class="btn btn-primary btn-sm">Get Financing →</a>
  </div>
</div>
<script>
window.addEventListener('scroll', function() {
  var cta = document.getElementById('stickyCta');
  if (window.scrollY > 400) cta.classList.add('visible');
  else cta.classList.remove('visible');
});
</script>${SITE_NAV_SCRIPT}`;

function escJson(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

function renderEquipTable(headers, rows) {
  let h = '<div class="equip-table-wrap"><table class="equip-table"><thead><tr>';
  headers.forEach((x) => (h += `<th>${x}</th>`));
  h += '</tr></thead><tbody>';
  rows.forEach((r) => {
    h += '<tr>';
    r.forEach((c, i) => {
      const cls = i === 0 ? '' : i === 1 ? ' price-col' : i === 2 ? ' brand-col' : '';
      h += `<td class="${cls.trim()}">${c}</td>`;
    });
    h += '</tr>';
  });
  h += '</tbody></table></div>';
  return h;
}

function renderComparisonTable(featureHeader, colHeaders, rows, winnerIndex) {
  let h = '<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th class="feature-col">' + featureHeader + '</th>';
  colHeaders.forEach((c, i) => {
    h += `<th class="${i === winnerIndex ? 'winner-col' : ''}">${c}</th>`;
  });
  h += '</tr></thead><tbody>';
  rows.forEach((row) => {
    h += '<tr><td class="feature-col">' + row[0] + '</td>';
    for (let i = 1; i < row.length; i++) {
      h += `<td class="${i - 1 === winnerIndex ? 'winner-col' : ''}">${row[i]}</td>`;
    }
    h += '</tr>';
  });
  h += '</tbody></table></div>';
  return h;
}

function renderPage(p) {
  const url = `${BASE}/${p.file}`;
  const faqEntities = p.faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }));

  const breadcrumbItems = [{ position: 1, name: 'Home', item: `${BASE}/` }];
  let bpos = 2;
  for (const b of p.breadcrumb) {
    breadcrumbItems.push({ position: bpos++, name: b.name, item: `${BASE}/${b.href}` });
  }
  breadcrumbItems.push({ position: bpos, name: p.h1, item: url });

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': p.schemaType || 'Article',
    headline: p.h1,
    description: p.meta,
    url,
    datePublished: '2026-03-01',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Commercial Machinery Guide' },
    publisher: { '@type': 'Organization', name: 'Commercial Machinery Guide' },
  };

  let extraLd = '';
  if (p.speakable && SPEAKABLE_PILLARS.has(p.file)) {
    extraLd += `
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"SpeakableSpecification","cssSelector":[".quick-answer","h1",".key-facts"]}
  </script>`;
  }
  if (p.howTo) {
    extraLd += `
  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: p.howTo.name,
    description: p.howTo.description,
    step: p.howTo.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  })}
  </script>`;
  }

  const keyFactsHtml = p.keyFacts
    .map(
      (k) => `
        <div class="fact-item">
          <div class="fact-label">${k.label}</div>
          <div class="fact-value">${k.value}</div>
        </div>`
    )
    .join('');

  const faqHtml = p.faq
    .map(
      (f) => `
        <div class="faq-item">
          <div class="faq-question">${f.q}</div>
          <div class="faq-answer">${f.a}</div>
        </div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <meta name="description" content="${escJson(p.meta)}">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${escJson(p.title)}">
  <meta property="og:description" content="${escJson(p.meta)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta name="robots" content="index, follow">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((it) => ({
      '@type': 'ListItem',
      position: it.position,
      name: it.name,
      item: it.item,
    })),
  })}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqEntities })}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(articleLd)}
  </script>${extraLd}
</head>
<body>
${SITE_HEADER}
<div class="quick-answer container">
  <p class="quick-answer-label">Quick Answer</p>
  <p>${p.quickAnswer}</p>
</div>
<nav class="breadcrumb" aria-label="Breadcrumb">
  <div class="breadcrumb-inner">
    <a href="/">Home</a>
    <span>›</span>
    ${p.breadcrumb
      .map(
        (b) => `<a href="/${b.href}">${b.name}</a>
    <span>›</span>`
      )
      .join('\n    ')}
    <span class="current">${p.h1}</span>
  </div>
</nav>
<main>
  <section class="hero">
    <div class="hero-inner container">
      <div class="hero-content">
        <p class="hero-eyebrow">${p.eyebrow || 'Equipment Financing'}</p>
        <h1>${p.h1}</h1>
        <p class="hero-lead">${p.heroLead}</p>
        <div class="hero-actions">
          <a href="https://axiantpartners.com/match" rel="sponsored noopener noreferrer" target="_blank" class="btn btn-primary">Explore Equipment Financing →</a>
          <a href="/all-commercial-equipment.html" class="btn btn-secondary">Browse all equipment</a>
        </div>
      </div>
      <div class="hero-card">
        <h2>On this page</h2>
        <ul class="hero-card-list">
          ${p.toc.map((t) => `<li>${t}</li>`).join('\n          ')}
        </ul>
      </div>
    </div>
  </section>
  <section class="section" style="padding-top:32px;">
    <div class="container">
      <div class="key-facts">
        <h3>Key Facts</h3>
        <div class="key-facts-grid">${keyFactsHtml}</div>
      </div>
    </div>
  </section>
  ${p.extraAboveFold || ''}
  <section class="section section-alt">
    <div class="container prose">${p.body}</div>
  </section>
  <section class="section">
    <div class="container" style="max-width:860px;">
      <div class="section-heading">
        <p class="section-eyebrow">Common Questions</p>
        <h2>${p.h1} — Frequently Asked Questions</h2>
      </div>
      <div class="faq-list">${faqHtml}</div>
    </div>
  </section>
  <div class="cta-band">
    <div class="container">
      <h2>Ready to explore financing?</h2>
      <p>Compare options for your equipment with no obligation. Our partners work with established businesses and startups across the United States.</p>
      <div class="cta-band-actions">
        <a href="https://axiantpartners.com/match" rel="sponsored noopener noreferrer" target="_blank" class="btn btn-primary">Explore Equipment Financing →</a>
        <a href="tel:+19199072611" class="btn btn-secondary">📞 Call (919) 907-2611</a>
      </div>
      <p class="cta-disclaimer">Informational resource only. Not an offer of credit or guarantee of approval. Terms vary by lender and equipment type.</p>
    </div>
  </div>
</main>
${FOOTER}
</body>
</html>`;
}

const outDir = __dirname;
for (const p of PAGES) {
  fs.writeFileSync(path.join(outDir, p.file), renderPage(p), 'utf8');
  console.log('Wrote', p.file);
}

const allFiles = ['index.html', ...PAGES.map((x) => x.file)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allFiles
  .map((f) => {
    const loc = f === 'index.html' ? BASE + '/' : `${BASE}/${f}`;
    return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`;
  })
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(
  path.join(outDir, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`,
  'utf8'
);
console.log('Wrote sitemap.xml, robots.txt');
