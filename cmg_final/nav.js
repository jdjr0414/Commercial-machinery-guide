(function () {
  function init() {
    var header = document.querySelector('.site-header');
    var btn = document.querySelector('.menu-btn');
    var nav = document.querySelector('#site-nav');
    if (!header || !btn || !nav) return;

    var backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.hidden = true;
    document.body.appendChild(backdrop);

    function setOpen(open) {
      header.classList.toggle('nav-open', open);
      document.body.classList.toggle('mobile-nav-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      backdrop.hidden = !open;
    }

    function close() {
      setOpen(false);
    }

    btn.addEventListener('click', function () {
      setOpen(!header.classList.contains('nav-open'));
    });

    backdrop.addEventListener('click', close);

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 769px)').matches) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
