const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/walla/Desktop/Claude-Commercial-machinery-guide/cmg_final';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const AXIANT_SECTION = `
<section style="padding:40px 0;background:linear-gradient(135deg,#0a1628 0%,#1e3058 100%);">
  <div class="container" style="max-width:900px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;">
      <div>
        <p style="font-size:0.78rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#e8610a;margin-bottom:12px;">Equipment Financing</p>
        <h2 style="font-size:1.8rem;font-weight:800;color:#ffffff;margin-bottom:16px;line-height:1.2;">0% Down Available on All Brands</h2>
        <p style="color:rgba(255,255,255,0.82);font-size:1rem;line-height:1.7;margin-bottom:20px;">Axiant Partners finances all major equipment brands — Caterpillar, Komatsu, John Deere, XCMG, SANY, and 200+ more. 0% down available for qualified borrowers regardless of brand. Terms 36–84 months.</p>
        <ul style="list-style:none;padding:0;margin:0 0 24px 0;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.85);font-size:0.9rem;"><span style="color:#e8610a;font-weight:700;">&#10003;</span> 0% down for qualified borrowers</li>
          <li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.85);font-size:0.9rem;"><span style="color:#e8610a;font-weight:700;">&#10003;</span> All brands including XCMG and SANY</li>
          <li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.85);font-size:0.9rem;"><span style="color:#e8610a;font-weight:700;">&#10003;</span> New and used equipment</li>
          <li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.85);font-size:0.9rem;"><span style="color:#e8610a;font-weight:700;">&#10003;</span> Startups and established businesses</li>
          <li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.85);font-size:0.9rem;"><span style="color:#e8610a;font-weight:700;">&#10003;</span> Decision in 24&#8211;48 hours</li>
        </ul>
        <div style="display:flex;gap:14px;flex-wrap:wrap;">
          <a href="https://axiantpartners.com/match" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Get Financing Options &#8594;</a>
          <a href="tel:+19199072611" style="display:inline-flex;align-items:center;gap:8px;color:rgba(255,255,255,0.8);font-weight:600;font-size:0.95rem;text-decoration:none;">&#128222; (919) 907-2611</a>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:32px;">
        <p style="color:#ffffff;font-weight:700;font-size:1rem;margin-bottom:20px;">Get a Free Quote in 60 Seconds</p>
        <form id="axiantMidForm" style="display:flex;flex-direction:column;gap:12px;">
          <input type="hidden" name="_source" value="commercialmachineryguide-midpage">
          <input type="text" name="firstName" placeholder="Your Name *" required style="padding:12px 16px;border:1.5px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.95rem;font-family:inherit;">
          <input type="tel" name="phone" placeholder="Phone Number *" required style="padding:12px 16px;border:1.5px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.95rem;font-family:inherit;">
          <input type="email" name="email" placeholder="Email Address *" required style="padding:12px 16px;border:1.5px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.95rem;font-family:inherit;">
          <input type="text" name="equipmentNeeded" placeholder="Equipment needed (e.g. Cat 320 excavator)" style="padding:12px 16px;border:1.5px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.95rem;font-family:inherit;">
          <button type="submit" id="axiantMidBtn" style="background:#e8610a;color:#ffffff;border:none;border-radius:8px;padding:14px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;">Get My Financing Options &#8594;</button>
          <div id="axiantMidSuccess" style="display:none;background:rgba(46,125,50,0.2);border:1px solid #4caf50;border-radius:8px;padding:14px;text-align:center;color:#a5d6a7;font-weight:600;">&#10003; Received! We'll call you within 1 business day.</div>
          <div id="axiantMidError" style="display:none;background:rgba(198,40,40,0.2);border:1px solid #f44336;border-radius:8px;padding:14px;text-align:center;color:#ef9a9a;">Something went wrong. Call (919) 907-2611 directly.</div>
        </form>
        <script>
        document.getElementById('axiantMidForm').addEventListener('submit',async function(e){
          e.preventDefault();
          const btn=document.getElementById('axiantMidBtn');
          btn.textContent='Sending...';btn.disabled=true;
          const data=Object.fromEntries(new FormData(this).entries());
          try{
            const r=await fetch('https://formspree.io/f/xbdzbqjw',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
            if(r.ok){document.getElementById('axiantMidSuccess').style.display='block';this.reset();btn.textContent='Submitted';}
            else throw new Error();
          }catch(e){document.getElementById('axiantMidError').style.display='block';btn.textContent='Get My Financing Options';btn.disabled=false;}
        });
        <\/script>
      </div>
    </div>
  </div>
</section>`;

const NEW_STICKY = `<div id="stickyCta" style="position:fixed;bottom:0;left:0;right:0;background:#0a1628;border-top:3px solid #e8610a;padding:12px 24px;display:none;align-items:center;justify-content:space-between;z-index:999;gap:16px;box-shadow:0 -4px 24px rgba(0,0,0,0.4);">
  <div style="display:flex;align-items:center;gap:16px;">
    <div>
      <p style="color:#ffffff;font-weight:700;font-size:0.95rem;margin:0;">0% Down Equipment Financing &#8212; All Brands</p>
      <p style="color:rgba(255,255,255,0.65);font-size:0.78rem;margin:0;">Axiant Partners &#183; (919) 907-2611 &#183; Decision in 24&#8211;48 hrs</p>
    </div>
  </div>
  <div style="display:flex;gap:12px;align-items:center;flex-shrink:0;">
    <a href="tel:+19199072611" style="color:rgba(255,255,255,0.8);font-weight:600;font-size:0.88rem;text-decoration:none;white-space:nowrap;">&#128222; Call Now</a>
    <a href="https://axiantpartners.com/match" target="_blank" rel="noopener noreferrer" style="background:#e8610a;color:#ffffff;padding:10px 22px;border-radius:8px;font-weight:700;font-size:0.9rem;text-decoration:none;white-space:nowrap;">Get Financing &#8594;</a>
    <button onclick="document.getElementById('stickyCta').style.display='none'" style="background:none;border:none;color:rgba(255,255,255,0.4);font-size:1.2rem;cursor:pointer;padding:4px;">&#10005;</button>
  </div>
</div>
<script>
let stickyShown=false;
window.addEventListener('scroll',function(){
  const el=document.getElementById('stickyCta');
  if(window.scrollY>300&&!stickyShown){el.style.display='flex';stickyShown=true;}
});
<\/script>`;

const EXIT_POPUP = `<div id="exitPopup" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.75);z-index:9999;align-items:center;justify-content:center;">
  <div style="background:#ffffff;border-radius:16px;padding:40px;max-width:480px;width:90%;position:relative;">
    <button onclick="document.getElementById('exitPopup').style.display='none'" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:1.4rem;cursor:pointer;color:#9aa3b0;">&#10005;</button>
    <p style="font-size:0.78rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#e8610a;margin-bottom:8px;">Before You Go</p>
    <h3 style="font-size:1.5rem;font-weight:800;color:#0a1628;margin-bottom:12px;line-height:1.3;">Get Your Equipment Financing Options &#8212; Free, No Obligation</h3>
    <p style="color:#4a5568;font-size:0.9rem;line-height:1.6;margin-bottom:20px;">0% down available for qualified borrowers. All brands. Decision in 24&#8211;48 hours. Takes 60 seconds.</p>
    <form id="exitForm" style="display:flex;flex-direction:column;gap:10px;">
      <input type="hidden" name="_source" value="commercialmachineryguide-exit">
      <input type="text" name="firstName" placeholder="Your Name *" required style="padding:12px 16px;border:1.5px solid #dde1e8;border-radius:8px;font-size:0.95rem;font-family:inherit;">
      <input type="tel" name="phone" placeholder="Phone Number *" required style="padding:12px 16px;border:1.5px solid #dde1e8;border-radius:8px;font-size:0.95rem;font-family:inherit;">
      <input type="text" name="equipment" placeholder="What equipment do you need?" style="padding:12px 16px;border:1.5px solid #dde1e8;border-radius:8px;font-size:0.95rem;font-family:inherit;">
      <button type="submit" id="exitBtn" style="background:#e8610a;color:#ffffff;border:none;border-radius:8px;padding:14px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;">Get My Free Quote &#8594;</button>
      <div id="exitSuccess" style="display:none;background:#e8f5e9;border:1px solid #4caf50;border-radius:8px;padding:14px;text-align:center;color:#2e7d32;font-weight:600;">&#10003; Got it! We'll be in touch within 1 business day.</div>
    </form>
    <p style="font-size:0.75rem;color:#9aa3b0;text-align:center;margin-top:12px;">No spam. No obligation. Axiant Partners &#183; (919) 907-2611</p>
  </div>
</div>
<script>
let exitShown=false;
document.addEventListener('mouseleave',function(e){
  if(e.clientY<50&&!exitShown){exitShown=true;document.getElementById('exitPopup').style.display='flex';}
});
document.getElementById('exitForm').addEventListener('submit',async function(e){
  e.preventDefault();
  const btn=document.getElementById('exitBtn');
  btn.textContent='Sending...';btn.disabled=true;
  const data=Object.fromEntries(new FormData(this).entries());
  try{
    const r=await fetch('https://formspree.io/f/xbdzbqjw',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
    if(r.ok){document.getElementById('exitSuccess').style.display='block';this.reset();btn.textContent='Submitted';setTimeout(()=>{document.getElementById('exitPopup').style.display='none';},3000);}
    else throw new Error();
  }catch(err){btn.textContent='Get My Free Quote';btn.disabled=false;}
});
<\/script>`;

const oemMap = [
  ['Caterpillar Financial Products Corporation', 'equipment lenders'],
  ['Caterpillar Financial Services', 'equipment lenders'],
  ['Cat Financial', 'equipment lenders'],
  ['Komatsu Financial', 'equipment lenders'],
  ['John Deere Financial', 'equipment lenders'],
  ['CNH Industrial Capital', 'equipment lenders'],
  ['CNH Capital', 'equipment lenders'],
  ['Kubota Credit Corporation', 'equipment lenders'],
  ['Kubota Credit', 'equipment lenders'],
  ['Bobcat Financial Services', 'equipment lenders'],
  ['Bobcat Financial', 'equipment lenders'],
  ['Vermeer Financial Services', 'equipment lenders'],
  ['Vermeer Financial', 'equipment lenders'],
  ['Altec Financial Services', 'equipment lenders'],
  ['Altec Financial', 'equipment lenders'],
  ['Siemens Financial Services', 'equipment lenders'],
  ['GE Capital Healthcare', 'equipment lenders'],
  ['HPE Financial Services', 'equipment lenders'],
  ['Dell Financial Services', 'equipment lenders'],
  ['Cisco Capital', 'equipment lenders'],
  ['CTOS Financial', 'equipment lenders'],
  ['Custom Truck One Source Financial', 'equipment lenders'],
];

const dpMap = [
  ['15-25% down (vs. 10-15% for Cat/Komatsu)', '0-20% down depending on credit (0% available for qualified borrowers)'],
  ['15-25% down (vs. 10-15%', '0-20% down depending on credit (0% available for qualified borrowers'],
  ['15\u201325% down', '0\u201320% down depending on credit (0% available for qualified borrowers)'],
  ['15-25% down', '0-20% down depending on credit (0% available for qualified borrowers)'],
  ['20-30% for startups', '10-30% for newer businesses'],
  ['20\u201330% for startups', '10\u201330% for newer businesses'],
  ['25-35% down', '10-30% down depending on credit'],
  ['25\u201335% down', '10\u201330% down depending on credit'],
  ['20-25% down', '0-20% down (0% available for qualified borrowers)'],
  ['20\u201325% down', '0\u201320% down (0% available for qualified borrowers)'],
];

let processed = 0, skipped = 0;
const log = [];

files.forEach(filename => {
  const filepath = path.join(dir, filename);
  let html = fs.readFileSync(filepath, 'utf8');
  const original = html;

  // 1. OEM name replacements
  for (const [from, to] of oemMap) {
    html = html.split(from).join(to);
  }

  // 2. Down payment language fixes
  for (const [from, to] of dpMap) {
    html = html.split(from).join(to);
  }

  // 3. Add Axiant mid-page section (before FAQ section)
  if (!html.includes('axiantMidForm')) {
    const faqIdx = html.indexOf('class="faq-list"');
    if (faqIdx > -1) {
      const beforeFaq = html.substring(0, faqIdx);
      const lastSect = beforeFaq.lastIndexOf('<section');
      if (lastSect > -1) {
        html = beforeFaq.substring(0, lastSect) + AXIANT_SECTION + '\n\n' + html.substring(lastSect);
        log.push(filename + ': axiant section inserted');
      } else {
        html = html.substring(0, faqIdx) + AXIANT_SECTION + '\n\n' + html.substring(faqIdx);
        log.push(filename + ': axiant section inserted (no section wrapper)');
      }
    } else {
      log.push(filename + ': WARN no faq-list found');
    }
  }

  // 4. Replace old sticky CTA with new one
  const stickyStart = html.indexOf('<div class="sticky-cta"');
  if (stickyStart > -1) {
    const afterSticky = html.substring(stickyStart);
    const scriptEndRel = afterSticky.indexOf('<\/script>');
    if (scriptEndRel > -1) {
      const stickyEnd = stickyStart + scriptEndRel + '<\/script>'.length;
      const afterStickyBlock = html.substring(stickyEnd);
      html = html.substring(0, stickyStart) + NEW_STICKY + afterStickyBlock;
      log.push(filename + ': sticky CTA replaced');
    }
  } else if (!html.includes('stickyShown')) {
    html = html.replace('<\/body>', NEW_STICKY + '\n<\/body>');
    log.push(filename + ': sticky CTA added (was missing)');
  }

  // 5. Add exit popup before </body>
  if (!html.includes('exitPopup')) {
    html = html.replace('<\/body>', EXIT_POPUP + '\n<\/body>');
    log.push(filename + ': exit popup added');
  }

  if (html !== original) {
    fs.writeFileSync(filepath, html, 'utf8');
    processed++;
  } else {
    skipped++;
    log.push(filename + ': no changes');
  }
});

console.log('Done. Files modified:', processed, '| Skipped:', skipped);
console.log('\nSample log entries:');
log.slice(0, 20).forEach(l => console.log(l));
if (log.length > 20) console.log('...and', log.length - 20, 'more');
