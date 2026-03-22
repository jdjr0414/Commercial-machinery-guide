export const B = { name: 'All Equipment', href: 'all-commercial-equipment.html' };
const rel = (href, t) => `<a href="/${href}">${t}</a>`;

export function faq8(topic, short) {
  const s = short.length > 52 ? 'equipment' : short;
  return [
    { q: `What credit score do I need to finance ${s}?`, a: `Most banks prefer 650+ for ${topic} purchases; specialty lenders may go lower when collateral value is strong and financials support the payment.` },
    { q: 'How long are typical equipment loan terms?', a: `Typical structures run 36–84 months depending on equipment life and lender. Longer terms reduce payment but increase total interest.` },
    { q: 'Can I finance used equipment?', a: `Yes, when age and hours fall within lender guidelines—often 10–15 years or newer. Expect slightly higher rates and a lower advance rate than new.` },
    { q: `Should I lease or buy ${s}?`, a: `Loans build equity for long-lived assets; leases can help with cash flow or technology refresh cycles. Compare after-tax cost with your CPA.` },
    { q: `How fast is approval for ${topic} financing?`, a: `Many applications under $250K close in 24–72 hours with complete paperwork. Larger or complex credits can take a week or more.` },
    { q: `What down payment is typical?`, a: `0–20% is common for strong credits; startups or lower scores may see 20–30%. Collateral quality directly affects advance rates.` },
    { q: `Does Section 179 apply?`, a: `Qualifying equipment placed in service the same tax year may be eligible for Section 179 or bonus depreciation—confirm with your tax advisor.` },
    { q: `How do lenders value the collateral?`, a: `Underwriters use auction data, OEM remarketing, and third-party appraisals. Recognizable brands with liquid resale receive better terms.` },
  ];
}

export function make(p) {
  const rawH1 = p.h1.replace(/<[^>]+>/g, '').split('—')[0].trim();
  const useShortLabels = rawH1.length > 36;
  const topic = p.topic || (useShortLabels ? 'commercial equipment' : rawH1);
  const short = p.short || (useShortLabels ? 'equipment' : rawH1);
  const links = (p.links || [
    ['how-commercial-equipment-financing-works.html', 'how commercial equipment financing works'],
    ['equipment-financing-credit-requirements.html', 'credit requirements'],
    ['section-179-equipment-deduction.html', 'Section 179'],
    ['new-vs-used-equipment-financing.html', 'new vs used equipment'],
    ['equipment-financing-down-payment.html', 'down payment rules'],
    ['equipment-financing-for-startups.html', 'startup financing'],
    ['american-vs-asian-equipment-financing.html', 'American vs Asian equipment'],
    ['all-commercial-equipment.html', 'full equipment directory'],
  ])
    .map(([h, t]) => rel(h, t))
    .join(', ');
  const body = `
<h2>Definition &amp; how financing applies</h2>
<p><strong>${rawH1}</strong> ${p.def || `is commercial equipment acquired to produce revenue. Financing uses the asset as collateral while you spread payments over 36–84 months in most cases.`}</p>
<p>1. Obtain a vendor quote or invoice. 2. Submit a credit application with business financials. 3. The lender underwrites collateral value and cash flow. 4. On approval, the lender pays the vendor and you begin amortizing payments.</p>

<h2>What lenders emphasize</h2>
<p>Topic sentence: lenders prioritize brand liquidity, age and hours, and your business performance. ${p.lenderNote || 'Equipment from manufacturers with active secondary markets finances more easily than one-off or highly customized lines.'}</p>

<h2>Comparison snapshot</h2>
${p.compare || `<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th class="feature-col">Factor</th><th class="winner-col">Strong collateral</th><th>Weaker collateral</th></tr></thead><tbody><tr><td class="feature-col">Approval speed</td><td class="winner-col">Faster</td><td>More documentation</td></tr><tr><td class="feature-col">Advance rate</td><td class="winner-col">Higher %</td><td>Lower % / larger down</td></tr><tr><td class="feature-col">Rate</td><td class="winner-col">More competitive</td><td>Risk-adjusted higher</td></tr></tbody></table></div>`}

<h2>Equipment &amp; workflow notes</h2>
<p>${p.detail || `For ${rawH1}, document maintenance, hour meters, and any certifications (OSHA, operator training, industry-specific). That documentation supports collateral value at underwriting.`}</p>

<h2>Related guides</h2>
<p>${links}</p>
`;
  return {
    file: p.file,
    title: p.title,
    meta: p.meta,
    h1: p.h1,
    eyebrow: p.eyebrow || 'Equipment financing',
    heroLead: p.heroLead || p.quickAnswer,
    quickAnswer: p.quickAnswer,
    keyFacts: p.keyFacts,
    breadcrumb: p.breadcrumb || [B],
    toc: p.toc || ['Overview', 'Lender criteria', 'Comparison', 'FAQ'],
    body,
    faq: p.faq || faq8(topic, short),
    speakable: p.speakable,
    howTo: p.howTo,
    extraAboveFold: p.extraAboveFold,
  };
}
