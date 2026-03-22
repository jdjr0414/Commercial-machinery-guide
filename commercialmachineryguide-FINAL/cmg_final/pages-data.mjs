/** Data for generate-site.mjs — manufacturing pillar + auto-generated pages */
import { AUTO_PAGES } from './auto-pages.mjs';

const rel = (href, text) => `<a href="/${href}">${text}</a>`;

const PAGES_MANUFACTURING = [
  {
    file: 'manufacturing-equipment-financing.html',
    title: 'Manufacturing Equipment Financing | CNC, Laser, Press Brake & More',
    meta: 'Financing for CNC machining centers, laser cutters, press brakes, injection molding machines, welding robots, and 20+ types of manufacturing equipment. All brands, prices, and terms.',
    h1: 'Manufacturing Equipment Financing',
    eyebrow: 'Manufacturing &amp; fabrication',
    heroLead:
      'Manufacturing equipment financing helps shops acquire CNC machines, lasers, press brakes, injection molders, and automation without tying up all working capital. Lenders underwrite against known resale values for brands like Haas Automation (Oxnard, California), Mazak Corporation (Florence, Kentucky — Japanese-owned), and Trumpf (Ditzingen, Germany).',
    quickAnswer:
      'Manufacturing equipment financing covers CNC machines ($20K–$1M+), laser cutters ($30K–$1.5M), press brakes, injection molding machines, and industrial robots. Terms run 36–84 months with 10–20% down. Haas, Mazak, DMG Mori, Trumpf, and Amada are the most financeable brands with the strongest resale values.',
    keyFacts: [
      { label: 'Price Range', value: '$5,000–$5,000,000' },
      { label: 'Top Brands', value: 'Haas, Mazak, Trumpf, Amada, Fanuc' },
      { label: 'Down Payment', value: '10–20% typical' },
      { label: 'Loan Term', value: '36–84 months' },
      { label: 'Credit Score', value: '600+ (alt. lenders from 500+)' },
      { label: 'Made In', value: 'USA (Haas), Germany (Trumpf), Japan (Mazak, Fanuc)' },
    ],
    breadcrumb: [{ name: 'All Equipment', href: 'all-commercial-equipment.html' }],
    toc: ['Equipment pricing', 'Major brands', 'Licensing', 'Income potential', 'Financing tips'],
    speakable: true,
    extraAboveFold: `
  <section class="section">
    <div class="container">
      <h2 class="section-heading" style="text-align:left;margin-bottom:20px;">Brand comparison at a glance</h2>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="feature-col">Factor</th>
              <th class="winner-col">Haas</th>
              <th>Mazak</th>
              <th>DMG Mori</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="feature-col">Typical lender recognition</td><td class="winner-col">Excellent (US)</td><td>Excellent</td><td>Excellent</td></tr>
            <tr><td class="feature-col">Entry VMC price band</td><td class="winner-col">$55K–$95K</td><td>$85K–$140K</td><td>$120K–$200K</td></tr>
            <tr><td class="feature-col">Controller ecosystem</td><td class="winner-col">Intuitive / common</td><td>SMOOTH</td><td>CELOS / Siemens</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>`,
    body: `
<h2>What manufacturing equipment financing covers</h2>
<p><strong>Manufacturing equipment financing</strong> is a secured loan or lease used to buy production machinery. The equipment is collateral; payments align with useful life. Job shops, OEM suppliers, and contract manufacturers use it to preserve cash for tooling and labor.</p>
<p>1. Choose your machine class and obtain a dealer quote. 2. Submit financials and the invoice. 3. The lender approves against collateral value and your credit. 4. The lender funds the vendor; you take delivery and begin monthly payments.</p>
<p>Brands with deep used markets—<span class="mfr-origin">Haas 🇺🇸</span>, <span class="mfr-origin">Mazak 🇯🇵</span>, <span class="mfr-origin">Trumpf 🇩🇪</span>—typically receive faster approvals than obscure or imported specialty lines.</p>

<h2>Equipment price ranges and typical terms</h2>
<div class="equip-table-wrap">
<table class="equip-table">
<thead><tr><th>Equipment type</th><th>Price band</th><th>Example brands</th><th>Typical term</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>CNC VMC 3-axis</td><td class="price-col">$50K–$300K</td><td class="brand-col">Haas VF, Mazak Nexus, DMG Mori NVX, Okuma GENOS M</td><td>36–84 mo</td><td>Strongest resale in job-shop segment</td></tr>
<tr><td>CNC 5-axis</td><td class="price-col">$150K–$1M+</td><td class="brand-col">Mazak Variaxis, DMG Mori DMU, Makino</td><td>48–84 mo</td><td>Premium rates with aerospace work history</td></tr>
<tr><td>Fiber laser</td><td class="price-col">$50K–$1.5M</td><td class="brand-col">Trumpf TruLaser, Bystronic ByStar, Amada ENSIS</td><td>36–84 mo</td><td>EPA air permits may apply</td></tr>
<tr><td>Press brake</td><td class="price-col">$25K–$800K</td><td class="brand-col">Trumpf TruBend, Amada HG, LVD</td><td>36–72 mo</td><td>Tooling costs often financed separately</td></tr>
<tr><td>Injection molding</td><td class="price-col">$20K–$2M</td><td class="brand-col">Engel, Arburg, Husky, Milacron</td><td>48–84 mo</td><td>Tonnage and mold package drive underwriting</td></tr>
<tr><td>Industrial robot 6-axis</td><td class="price-col">$50K–$300K</td><td class="brand-col">Fanuc, KUKA, ABB, Yaskawa</td><td>36–72 mo</td><td>Integrator quotes may bundle install</td></tr>
</tbody>
</table>
</div>

<h2>Manufacturer directory (origin)</h2>
<div class="mfr-grid">
  <div class="mfr-card"><h4>Haas Automation</h4><p>Oxnard, CA <span class="mfr-origin">🇺🇸</span></p></div>
  <div class="mfr-card"><h4>Mazak</h4><p>Florence, KY HQ <span class="mfr-origin">🇯🇵</span></p></div>
  <div class="mfr-card"><h4>DMG Mori</h4><p>Germany / Japan <span class="mfr-origin">🇩🇪🇯🇵</span></p></div>
  <div class="mfr-card"><h4>Trumpf</h4><p>Ditzingen <span class="mfr-origin">🇩🇪</span></p></div>
  <div class="mfr-card"><h4>Amada</h4><p>Japan <span class="mfr-origin">🇯🇵</span></p></div>
  <div class="mfr-card"><h4>Fanuc</h4><p>Japan <span class="mfr-origin">🇯🇵</span></p></div>
  <div class="mfr-card"><h4>Okuma</h4><p>Japan <span class="mfr-origin">🇯🇵</span></p></div>
  <div class="mfr-card"><h4>Doosan Machine Tools</h4><p>Korea <span class="mfr-origin">🇰🇷</span></p></div>
</div>

<h2>Licensing &amp; compliance</h2>
<p>Topic sentence: most shops need a business license, OSHA machine guarding under 29 CFR 1910.212, lockout/tagout 1910.147, and electrical permits for 3-phase drops. Aerospace suppliers often pursue ISO 9001 or AS9100; defense work may require ITAR registration. Environmental rules may cover coolant disposal and laser exhaust.</p>

<h2>Income potential</h2>
<p>Topic sentence: revenue scales with spindle hours and billing rates. A small job shop with 1–2 CNC machines may produce roughly $150K–$400K revenue; growing shops with 3–6 machines often reach $500K–$1.5M; highly automated shops can exceed $2M–$8M. Hourly rates of $75–$150 for standard 3-axis work and $150–$250 for 5-axis are common benchmarks.</p>

<h2>Internal guides &amp; next steps</h2>
<p>Read ${rel('cnc-machine-financing.html', 'CNC machine financing')}, ${rel('laser-cutter-financing.html', 'laser cutter financing')}, ${rel('haas-cnc-financing.html', 'Haas CNC financing')}, ${rel('how-commercial-equipment-financing-works.html', 'how equipment financing works')}, ${rel('section-179-equipment-deduction.html', 'Section 179 deduction')}, ${rel('equipment-financing-credit-requirements.html', 'credit requirements')}, ${rel('new-vs-used-equipment-financing.html', 'new vs used equipment')}, and ${rel('american-vs-asian-equipment-financing.html', 'American vs Asian equipment financing')}.</p>
`,
    faq: [
      {
        q: 'What is the monthly payment for CNC financing?',
        a: 'Monthly payments depend on amount financed, rate, and term. A $120,000 CNC at 8% over 60 months is roughly $2,400–$2,500 per month before fees; shorter terms raise the payment but reduce total interest. Your lender will provide an amortization schedule after approval.',
      },
      {
        q: 'Can I finance used CNC equipment?',
        a: 'Yes. Lenders cap age and hours—often 10–15 years or newer—and require inspection or auction reports. Strong brands like Haas and Mazak finance more easily than one-off imports. Expect slightly higher rates than new and shorter maximum terms.',
      },
      {
        q: 'What credit score is needed for manufacturing equipment?',
        a: 'Many banks prefer 650+; equipment finance companies may approve at 600+ with strong collateral. Alternative lenders sometimes work from 500+ with larger down payments when the machine has verified resale value.',
      },
      {
        q: 'Should I lease or buy a CNC machine?',
        a: 'Loans build equity and suit long-lived machine tools. Operating leases help when you want lower payments and plan to refresh technology. Tax treatment differs—consult a CPA about Section 179 vs lease expense rules for your situation.',
      },
      {
        q: 'How long does manufacturing equipment approval take?',
        a: 'Straightforward applications with clean credit often close in 24–72 hours. Larger amounts, used machines, or complex financials may take a week or more for underwriting and title/lien perfection.',
      },
      {
        q: 'Can a startup machine shop get financing?',
        a: 'Startups usually need 680+ personal credit, 20–30% down, and a credible business plan. Financing recognizable brands with strong auction values improves odds compared to exotic or single-source machines.',
      },
      {
        q: 'Does Section 179 apply to financed CNC purchases?',
        a: 'Section 179 can allow immediate expensing of qualifying equipment placed in service the same tax year, subject to annual limits and phase-outs. Financing does not disqualify the deduction in many cases—verify with your tax advisor.',
      },
      {
        q: 'How do lenders value manufacturing equipment as collateral?',
        a: 'Underwriters use auction comps, dealer quotes, and guidebooks. Popular models with liquid resale receive higher advance rates; customized or obsolete configurations receive haircuts. Serial numbers, photos, and maintenance records help.',
      },
    ],
  },
];

export const PAGES = [...PAGES_MANUFACTURING, ...AUTO_PAGES];
