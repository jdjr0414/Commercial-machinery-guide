/**
 * Shared site header — imported by generate-site.mjs; keep index.html in sync.
 */
export const SITE_HEADER = `<header class="site-header">
  <div class="header-inner">
    <a href="/" class="site-logo">
      <span class="logo-icon">⚙️</span>
      <span>
        Commercial Machinery Guide
        <span class="logo-sub">Equipment Financing Resource</span>
      </span>
    </a>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="/" class="nav-home">Home</a>
      <div class="nav-mega">
        <button type="button" class="nav-mega-btn" id="nav-mega-trigger" aria-expanded="false" aria-controls="nav-mega-panel" aria-haspopup="true">
          Browse topics <span class="nav-caret" aria-hidden="true">▾</span>
        </button>
        <div class="nav-mega-panel" id="nav-mega-panel" role="region" aria-label="All financing topics">
          <div class="nav-mega-inner">
            <div class="nav-mega-grid">
              <div class="nav-mega-col">
                <p class="nav-mega-title">Industries</p>
                <ul class="nav-mega-list">
                  <li><a href="/manufacturing-equipment-financing.html">Manufacturing</a></li>
                  <li><a href="/construction-equipment-financing.html">Construction</a></li>
                  <li><a href="/agricultural-equipment-financing.html">Agriculture</a></li>
                  <li><a href="/forestry-tree-equipment-financing.html">Forestry &amp; tree</a></li>
                  <li><a href="/medical-dental-equipment-financing.html">Medical &amp; dental</a></li>
                  <li><a href="/food-processing-equipment-financing.html">Food processing</a></li>
                  <li><a href="/warehouse-material-handling-financing.html">Warehouse &amp; logistics</a></li>
                  <li><a href="/printing-signage-equipment-financing.html">Printing &amp; signage</a></li>
                  <li><a href="/restaurant-equipment-financing.html">Restaurant</a></li>
                  <li><a href="/hvac-equipment-financing.html">HVAC</a></li>
                  <li><a href="/oil-gas-equipment-financing.html">Oil &amp; gas</a></li>
                  <li><a href="/mining-equipment-financing.html">Mining</a></li>
                  <li><a href="/gym-fitness-equipment-financing.html">Gym &amp; fitness</a></li>
                  <li><a href="/laundry-equipment-financing.html">Laundry</a></li>
                </ul>
              </div>
              <div class="nav-mega-col">
                <p class="nav-mega-title">Equipment guides</p>
                <ul class="nav-mega-list">
                  <li><a href="/cnc-machine-financing.html">CNC machines</a></li>
                  <li><a href="/excavator-financing.html">Excavators</a></li>
                  <li><a href="/forklift-financing.html">Forklifts</a></li>
                  <li><a href="/tractor-financing.html">Tractors</a></li>
                  <li><a href="/wood-chipper-financing.html">Wood chippers</a></li>
                  <li><a href="/stump-grinder-financing.html">Stump grinders</a></li>
                  <li><a href="/crane-financing.html">Cranes</a></li>
                  <li><a href="/laser-cutter-financing.html">Laser cutters</a></li>
                  <li><a href="/skid-steer-financing.html">Skid steers</a></li>
                  <li><a href="/combine-harvester-financing.html">Combines</a></li>
                  <li><a href="/mri-machine-financing.html">MRI machines</a></li>
                  <li><a href="/bulldozer-financing.html">Bulldozers</a></li>
                  <li><a href="/wheel-loader-financing.html">Wheel loaders</a></li>
                  <li><a href="/aerial-lift-financing.html">Aerial lifts</a></li>
                  <li><a href="/injection-molding-machine-financing.html">Injection molding</a></li>
                  <li><a href="/wide-format-printer-financing.html">Wide-format printers</a></li>
                  <li><a href="/compactor-financing.html">Compactors</a></li>
                </ul>
              </div>
              <div class="nav-mega-col">
                <p class="nav-mega-title">Brands</p>
                <ul class="nav-mega-list">
                  <li><a href="/caterpillar-equipment-financing.html">Caterpillar</a></li>
                  <li><a href="/komatsu-equipment-financing.html">Komatsu</a></li>
                  <li><a href="/john-deere-equipment-financing.html">John Deere</a></li>
                  <li><a href="/bobcat-equipment-financing.html">Bobcat</a></li>
                  <li><a href="/haas-cnc-financing.html">Haas CNC</a></li>
                  <li><a href="/vermeer-equipment-financing.html">Vermeer</a></li>
                  <li><a href="/morbark-equipment-financing.html">Morbark</a></li>
                  <li><a href="/xcmg-equipment-financing.html">XCMG</a></li>
                  <li><a href="/sany-equipment-financing.html">SANY</a></li>
                  <li><a href="/toyota-forklift-financing.html">Toyota forklifts</a></li>
                  <li><a href="/gradall-equipment-financing.html">Gradall</a></li>
                  <li><a href="/fecon-equipment-financing.html">Fecon</a></li>
                  <li><a href="/altec-industries-financing.html">Altec</a></li>
                  <li><a href="/hurco-cnc-financing.html">Hurco</a></li>
                </ul>
                <p class="nav-mega-title nav-mega-title-spaced">Comparisons</p>
                <ul class="nav-mega-list">
                  <li><a href="/caterpillar-vs-komatsu-excavators.html">Cat vs Komatsu</a></li>
                  <li><a href="/xcmg-vs-sany-vs-caterpillar.html">XCMG vs SANY vs Cat</a></li>
                  <li><a href="/american-vs-asian-equipment-financing.html">American vs Asian</a></li>
                  <li><a href="/haas-vs-mazak-vs-dmg-mori.html">Haas vs Mazak vs DMG</a></li>
                  <li><a href="/vermeer-vs-morbark-chippers.html">Vermeer vs Morbark</a></li>
                  <li><a href="/lease-vs-loan-equipment.html">Lease vs loan</a></li>
                </ul>
              </div>
              <div class="nav-mega-col">
                <p class="nav-mega-title">Financing &amp; licensing</p>
                <ul class="nav-mega-list">
                  <li><a href="/how-commercial-equipment-financing-works.html">How financing works</a></li>
                  <li><a href="/new-vs-used-equipment-financing.html">New vs used</a></li>
                  <li><a href="/equipment-financing-vs-lease.html">Loan vs lease</a></li>
                  <li><a href="/section-179-equipment-deduction.html">Section 179</a></li>
                  <li><a href="/equipment-financing-credit-requirements.html">Credit requirements</a></li>
                  <li><a href="/equipment-financing-for-startups.html">Startup financing</a></li>
                  <li><a href="/equipment-financing-after-bankruptcy.html">After bankruptcy</a></li>
                  <li><a href="/equipment-financing-down-payment.html">Down payments</a></li>
                  <li><a href="/equipment-business-licensing-requirements.html">Licensing hub</a></li>
                  <li><a href="/tree-service-licensing-requirements.html">Tree service licensing</a></li>
                  <li><a href="/construction-contractor-licensing.html">Contractor licensing</a></li>
                  <li><a href="/financing-unknown-equipment-brands.html">Lesser-known brands</a></li>
                </ul>
                <p class="nav-mega-title nav-mega-title-spaced">Income guides</p>
                <ul class="nav-mega-list">
                  <li><a href="/tree-service-business-income.html">Tree service income</a></li>
                  <li><a href="/cnc-machining-business-income.html">CNC shop income</a></li>
                  <li><a href="/excavating-business-income.html">Excavating income</a></li>
                  <li><a href="/equipment-rental-business-income.html">Rental business income</a></li>
                  <li><a href="/farming-equipment-income.html">Farm income</a></li>
                </ul>
              </div>
            </div>
            <p class="nav-mega-all"><a href="/all-commercial-equipment.html">Full equipment directory →</a></p>
          </div>
        </div>
      </div>
      <a href="tel:+19199072611" class="nav-phone">📞 (919) 907-2611</a>
      <a href="https://axiantpartners.com/match" rel="sponsored noopener noreferrer" target="_blank" class="nav-cta">Get Financing →</a>
    </nav>
    <button type="button" class="menu-btn" id="nav-drawer-btn" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">☰</button>
  </div>
</header>`;

export const SITE_NAV_SCRIPT = `
<script>
(function(){
  var inner = document.querySelector('.header-inner');
  var drawerBtn = document.getElementById('nav-drawer-btn');
  var mega = document.querySelector('.nav-mega');
  var megaBtn = document.getElementById('nav-mega-trigger');
  var mqMobile = window.matchMedia('(max-width: 768px)');

  function closeMobileMega() {
    if (!mega || !megaBtn) return;
    mega.classList.remove('is-open');
    megaBtn.setAttribute('aria-expanded', 'false');
  }

  if (drawerBtn && inner) {
    drawerBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      var open = !inner.classList.contains('nav-drawer-open');
      inner.classList.toggle('nav-drawer-open', open);
      drawerBtn.setAttribute('aria-expanded', open);
      if (!open) closeMobileMega();
    });
  }

  if (megaBtn && mega) {
    megaBtn.addEventListener('click', function(e) {
      if (!mqMobile.matches) return;
      e.preventDefault();
      e.stopPropagation();
      var show = !mega.classList.contains('is-open');
      mega.classList.toggle('is-open', show);
      megaBtn.setAttribute('aria-expanded', show);
    });
  }

  document.addEventListener('click', function(e) {
    if (mqMobile.matches && mega && !e.target.closest('.nav-mega')) closeMobileMega();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMobileMega();
      if (inner) {
        inner.classList.remove('nav-drawer-open');
        if (drawerBtn) drawerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  var nav = document.getElementById('site-nav');
  if (nav && inner) {
    nav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        inner.classList.remove('nav-drawer-open');
        if (drawerBtn) drawerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
</script>`;
