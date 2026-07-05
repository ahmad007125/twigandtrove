/* ============================================================
   Twig & Trove Interiors — Shared Navigation & Utilities
   ============================================================ */

// ── Active nav link ──────────────────────────────────────────
function setActiveNav(page) {
  document.querySelectorAll('.nav-links li:not(.pipe)').forEach(li => {
    li.classList.remove('active');
  });
  const map = {
    'index': '',
    'about': 'About',
    'portfolio': 'Portfolio',
    'styling': 'Styling',
    'press': 'Press',
    'inspiration': 'Inspiration',
    'work': 'Work With Us',
  };
  const label = map[page];
  if (label) {
    document.querySelectorAll('.nav-links li:not(.pipe)').forEach(li => {
      if (li.textContent.trim() === label) li.classList.add('active');
    });
  }
}

// ── Drag-to-scroll for horizontal tracks ─────────────────────
function initDragScroll(el) {
  if (!el) return;
  let isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  el.addEventListener('mouseleave', () => { isDown = false; });
  el.addEventListener('mouseup', () => { isDown = false; });
  el.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.2;
  });
  // Touch support
  let touchStartX, touchScrollLeft;
  el.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].pageX - el.offsetLeft;
    touchScrollLeft = el.scrollLeft;
  }, { passive: true });
  el.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX - el.offsetLeft;
    el.scrollLeft = touchScrollLeft - (x - touchStartX) * 1.2;
  }, { passive: true });
}

// ── Footer HTML ───────────────────────────────────────────────
function footerHTML() {
  return `
    <footer class="footer">
      <span>© 2026 Kimberly Knight for Twig &amp; Trove Interiors</span>
      <div class="footer-social">
        <a href="https://www.instagram.com/twig_and_trove_interiors/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/twigandtrove/" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.linkedin.com/in/kimberly-knight-0218a689/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.pinterest.com/twigandtrove/" target="_blank" rel="noopener">Pinterest</a>
      </div>
    </footer>`;
}

// ── Nav HTML ──────────────────────────────────────────────────
function navHTML(activePage) {
  const pages = ['About', 'Portfolio', 'Styling', 'Press', 'Inspiration', 'Work With Us'];
  const hrefs = {
    'About': 'about.html',
    'Portfolio': 'portfolio.html',
    'Styling': 'styling.html',
    'Press': 'buzz.html',
    'Inspiration': 'inspiration.html',
    'Work With Us': 'work.html',
  };
  const activeLabel = {
    'about': 'About',
    'portfolio': 'Portfolio',
    'styling': 'Styling',
    'press': 'Press',
    'inspiration': 'Inspiration',
    'work': 'Work With Us',
  }[activePage] || '';

  const links = pages.map((p, i) => {
    const active = p === activeLabel ? ' active' : '';
    const pipe = i < pages.length - 1 ? '<li class="pipe">|</li>' : '';
    return `<li class="${active}" onclick="location.href='${hrefs[p]}'">${p}</li>${pipe}`;
  }).join('\n    ');

  const mobileLinks = pages.map(p => {
    const active = p === activeLabel ? ' active' : '';
    return `<a href="${hrefs[p]}" class="${active}">${p}</a>`;
  }).join('\n    ');

  return `
<nav class="nav">
  <a class="nav-logo" href="index.html">
    <img class="nav-logo-bird" src="images/ui/logo-bird.svg" alt="Twig and Trove Interiors" />
    <div class="nav-logo-text">
      <div class="nav-logo-wordmark">Twig &amp; Trove Interiors</div>
      <div class="nav-logo-sub">Kimberly Knight &nbsp;·&nbsp; Dallas</div>
    </div>
  </a>
  <ul class="nav-links">
    ${links}
  </ul>
  <button class="nav-hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-rule"></div>
<div class="nav-mobile-menu" id="nav-mobile-menu">
  ${mobileLinks}
</div>`;
}

// ── Mobile menu toggle ────────────────────────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('nav-mobile-menu');
  if (menu) menu.classList.toggle('open');
}
