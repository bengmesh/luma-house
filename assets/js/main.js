/* =========================================================
   LUMA HOUSE — main.js
   Lightweight interactions: tabs, filters, reveal-on-scroll
   ========================================================= */

(function () {
  'use strict';

  // ---- Reveal on scroll ----
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---- Tabs (data-tab-group / data-tab / data-pane) ----
  document.querySelectorAll('[data-tab-group]').forEach((group) => {
    const buttons = group.querySelectorAll('[data-tab]');
    const panes   = document.querySelectorAll(`[data-pane][data-tab-group-target="${group.dataset.tabGroup}"]`);
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        panes.forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        const pane = document.querySelector(
          `[data-pane="${btn.dataset.tab}"][data-tab-group-target="${group.dataset.tabGroup}"]`
        );
        if (pane) pane.classList.add('active');
      });
    });
  });

  // ---- Category filter chips ----
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const chips = group.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll(`[data-filter-target="${group.dataset.filterGroup}"]`);
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const val = chip.dataset.filter;
        cards.forEach((card) => {
          const cats = (card.dataset.cat || '').split(/\s+/);
          if (val === 'all' || cats.includes(val)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  // ---- Search filter on explore ----
  const exploreSearch = document.getElementById('exploreSearch');
  if (exploreSearch) {
    exploreSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('[data-search]').forEach((card) => {
        const hay = card.dataset.search.toLowerCase();
        card.style.display = !q || hay.includes(q) ? '' : 'none';
      });
    });
  }

  // ---- Account type cards (signup) ----
  document.querySelectorAll('[data-acct-group]').forEach((group) => {
    const cards = group.querySelectorAll('[data-acct]');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        const input = document.getElementById('acctTypeInput');
        if (input) input.value = card.dataset.acct;
      });
    });
  });

  // ---- Form submit guards (prototype only) ----
  document.querySelectorAll('[data-prototype-form]').forEach((f) => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = f.dataset.successMsg || 'Submitted in prototype.';
      const target = f.dataset.successRedirect;
      // simple toast
      showToast(msg);
      if (target) setTimeout(() => (window.location.href = target), 800);
    });
  });

  function showToast(text) {
    let el = document.getElementById('lhToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'lhToast';
      el.style.cssText = `
        position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(20px);
        background: #1F1B18; color: #FFFDFC; padding: .85rem 1.4rem;
        font-family: Manrope, Inter, sans-serif; font-size: .92rem; font-weight: 500;
        border-radius: 999px; box-shadow: 0 20px 40px -16px rgba(31,27,24,.4);
        z-index: 100; opacity: 0; transition: all .35s ease; pointer-events: none;
      `;
      document.body.appendChild(el);
    }
    el.textContent = text;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(el._t);
    el._t = setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2200);
  }

  // expose
  window.LH = { showToast };
})();
