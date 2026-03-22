import { make } from './page-factory.mjs';
import { MORE } from './auto-pages-2.mjs';

export const AUTO_PAGES = [
  make({
    file: 'construction-equipment-financing.html',
    title: 'Construction Equipment Financing | Excavators, Dozers, Cranes & More — All Brands',
    meta: 'Financing for all construction equipment — excavators, bulldozers, wheel loaders, cranes, skid steers, motor graders, asphalt pavers. Caterpillar, Komatsu, John Deere, XCMG, SANY. Prices, terms, licensing.',
    h1: 'Construction Equipment Financing',
    quickAnswer:
      'Construction equipment financing covers excavators ($30K–$1.2M), bulldozers ($75K–$2.8M), wheel loaders ($75K–$7M), cranes ($200K–$10M+), and more. Terms run 36–84 months. Caterpillar (Irving, Texas), Komatsu, and John Deere (Moline, Illinois) are easiest to finance with strong resale. XCMG and SANY offer lower purchase prices but may require specialty lenders—see our american-vs-asian guide.',
    keyFacts: [
      { label: 'Mini excavators', value: '$30K–$90K' },
      { label: 'Large excavators', value: '$380K–$750K+' },
      { label: 'Top brands', value: 'Cat, Komatsu, Deere, Volvo' },
      { label: 'Terms', value: '36–84 mo' },
      { label: 'Down', value: '10–20%' },
      { label: 'Credit', value: '600+ common' },
    ],
    speakable: true,
    def: 'is equipment used for earthmoving, lifting, paving, and site development. Lenders underwrite to auction resale curves for major OEMs.',
    lenderNote: 'Caterpillar Financial and OEM captives know residual values for excavators and dozers; Chinese brands may require larger down payments or captive programs.',
    detail:
      'Contractors should document union or prevailing-wage job mix, insurance, and operator certifications (NCCCO for cranes). Compare total cost with our xcmg-vs-sany-vs-caterpillar and american-vs-asian-equipment-financing pages.',
    links: [
      ['excavator-financing.html', 'excavator financing'],
      ['bulldozer-financing.html', 'bulldozer financing'],
      ['crane-financing.html', 'crane financing'],
      ['skid-steer-financing.html', 'skid steer financing'],
      ['construction-contractor-licensing.html', 'contractor licensing'],
      ['excavating-business-income.html', 'excavating business income'],
      ['american-vs-asian-equipment-financing.html', 'American vs Asian equipment'],
      ['caterpillar-equipment-financing.html', 'Caterpillar equipment financing'],
    ],
    compare: `<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th class="feature-col">Factor</th><th class="winner-col">Cat 320 class</th><th>Komatsu PC210</th><th>XCMG XE215</th></tr></thead><tbody><tr><td class="feature-col">US lender comfort</td><td class="winner-col">High</td><td>High</td><td>Specialty</td></tr><tr><td class="feature-col">3-yr residual (typical)</td><td class="winner-col">Strong</td><td>Strong</td><td>Weaker</td></tr><tr><td class="feature-col">Entry price</td><td>Premium</td><td>Premium</td><td class="winner-col">Lower</td></tr></tbody></table></div>`,
  }),
  make({
    file: 'agricultural-equipment-financing.html',
    title: 'Agricultural Equipment Financing | Tractors, Combines, Planters & Farm Machinery',
    meta: 'Financing for all farm equipment — tractors (compact to 4WD), combine harvesters, planters, sprayers, hay equipment, grain handling, and irrigation. John Deere, Case IH, New Holland, Kubota, and 40+ brands.',
    h1: 'Agricultural Equipment Financing',
    quickAnswer:
      'Agricultural equipment financing covers tractors ($15K–$700K), combine harvesters ($250K–$860K+), planters ($50K–$400K), and sprayers ($15K–$700K). John Deere Financial, CNH Industrial Capital, and AGCO Finance offer OEM programs. Terms run 36–84 months, often with seasonal payment structures aligned to harvest income.',
    keyFacts: [
      { label: 'Compact tractors', value: '$15K–$60K' },
      { label: 'Large row-crop', value: '$200K–$450K' },
      { label: 'Combines', value: '$250K–$860K+' },
      { label: 'OEM lenders', value: 'JD Fin., CNH Cap., AGCO Fin.' },
      { label: 'Terms', value: '36–84 mo' },
      { label: 'Seasonal', value: 'Common' },
    ],
    speakable: true,
    def: 'is machinery used to plant, harvest, move, and store crops and forage. Financing often aligns with crop cash flows and dealer OEM programs.',
    detail: 'Document acreage, crop mix, and crop insurance. For guidance on income benchmarks, see farming-equipment-income and tractor-financing.',
    links: [
      ['tractor-financing.html', 'tractor financing'],
      ['combine-harvester-financing.html', 'combine harvester financing'],
      ['john-deere-equipment-financing.html', 'John Deere equipment financing'],
      ['farming-equipment-income.html', 'farm income potential'],
      ['agricultural-business-requirements.html', 'agricultural licensing'],
      ['equipment-financing-vs-lease.html', 'loan vs lease'],
      ['section-179-equipment-deduction.html', 'Section 179'],
      ['all-commercial-equipment.html', 'equipment directory'],
    ],
  }),
  make({
    file: 'forestry-tree-equipment-financing.html',
    title: 'Forestry & Tree Service Equipment Financing | Chippers, Grinders, Mulchers & More',
    meta: 'Financing for wood chippers (6" to 18"+), stump grinders, forestry mulchers, log skidders, feller bunchers, and arborist lifts. Vermeer, Morbark, Bandit, Fecon, Rayco, Tigercat. Licensing requirements for all 50 states.',
    h1: 'Forestry &amp; Tree Service Equipment Financing',
    quickAnswer:
      'Tree service and forestry equipment financing covers wood chippers ($15K–$200K), stump grinders ($8K–$120K), forestry mulchers ($80K–$400K), and logging equipment ($100K–$1.2M). Vermeer (Pella, Iowa), Morbark (Winn, Michigan), and Bandit (Remus, Michigan) are widely recognized. ISA Certified Arborist credential and proper insurance improve approval odds.',
    keyFacts: [
      { label: 'Chipper (9–12")', value: '$35K–$85K' },
      { label: '18" chipper', value: '$85K–$165K' },
      { label: 'Tracked mulcher', value: '$85K–$420K' },
      { label: 'Terms', value: '36–72 mo' },
      { label: 'Arborist cert.', value: 'Helps risk profile' },
      { label: 'Top brands', value: 'Vermeer, Morbark, Bandit' },
    ],
    speakable: true,
    def: 'is machinery for vegetation management, logging, and tree care. Collateral value ties to chipper disc/drum class, engine hours, and regional demand.',
    detail:
      'Heavy 18" chippers change crew economics—see wood-chipper-financing. Licensing is complex; read tree-service-licensing-requirements for state rules and ANSI Z133.1 obligations.',
    links: [
      ['wood-chipper-financing.html', 'wood chipper financing'],
      ['stump-grinder-financing.html', 'stump grinder financing'],
      ['vermeer-equipment-financing.html', 'Vermeer equipment financing'],
      ['tree-service-licensing-requirements.html', 'tree service licensing'],
      ['tree-service-business-income.html', 'tree service income'],
      ['fecon-equipment-financing.html', 'Fecon equipment financing'],
      ['american-vs-asian-equipment-financing.html', 'equipment origin & resale'],
      ['equipment-business-licensing-requirements.html', 'licensing hub'],
    ],
  }),
  ...MORE,
];
