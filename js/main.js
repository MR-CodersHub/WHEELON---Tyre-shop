/* ==========================================================================
   APEXTYRE & WHEEL ALIGNMENT CENTER - MAIN JAVASCRIPT (main.js)
   Global utilities: Theme, RTL, Navigation, Modals, Toasts, Accordions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initHeaderAndMobileNav();
  highlightActiveNavLink();
  initGlobalModals();
  initAccordions();
});

/* --- Theme Toggle System --- */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('apextyre_theme') || 'light';
  
  setTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('apextyre_theme', theme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    const textSpan = btn.querySelector('.theme-text');
    const iconSpan = btn.querySelector('.theme-icon') || btn;
    const isHeader = btn.classList.contains('header-icon-btn');
    const iconSize = isHeader ? '20' : '14';

    if (theme === 'light') {
      btn.setAttribute('title', 'Switch to Dark Mode');
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
      if (textSpan) textSpan.textContent = 'Dark Mode';
      if (iconSpan) {
        // Professional Glowing Sun Icon (Light Mode Active)
        iconSpan.innerHTML = `<svg viewBox="0 0 24 24" width="${iconSize}" height="${iconSize}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color:#f59e0b;"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      }
    } else {
      btn.setAttribute('title', 'Switch to Light Mode');
      btn.setAttribute('aria-label', 'Switch to Light Mode');
      if (textSpan) textSpan.textContent = 'Light Mode';
      if (iconSpan) {
        // Professional Indigo Crescent Moon Icon (Dark Mode Active)
        iconSpan.innerHTML = `<svg viewBox="0 0 24 24" width="${iconSize}" height="${iconSize}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color:#818cf8;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      }
    }
  });
}

/* --- RTL Toggle System --- */
function initRTL() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const savedRTL = localStorage.getItem('apextyre_rtl') || 'ltr';

  setDirection(savedRTL);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      setDirection(newDir);
    });
  });
}

function setDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  localStorage.setItem('apextyre_rtl', dir);

  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggleBtns.forEach(btn => {
    const textSpan = btn.querySelector('.rtl-text');
    const iconSpan = btn.querySelector('.rtl-icon');
    const isHeader = btn.closest('.header-actions');
    const iconSize = isHeader ? '18' : '14';
    const globeSvg = `<svg viewBox="0 0 24 24" width="${iconSize}" height="${iconSize}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;

    if (dir === 'rtl') {
      btn.classList.add('rtl-active');
      btn.setAttribute('title', 'Switch to LTR Mode');
      btn.setAttribute('aria-label', 'Switch to LTR Mode');
      if (textSpan) textSpan.textContent = 'LTR';
      if (iconSpan) {
        iconSpan.innerHTML = globeSvg;
      }
    } else {
      btn.classList.remove('rtl-active');
      btn.setAttribute('title', 'Switch to RTL Mode');
      btn.setAttribute('aria-label', 'Switch to RTL Mode');
      if (textSpan) textSpan.textContent = 'RTL';
      if (iconSpan) {
        iconSpan.innerHTML = globeSvg;
      }
    }
  });
}

/* --- Sticky Header & Mobile Nav Drawer --- */
function initHeaderAndMobileNav() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  if (mobileToggle && mobileDrawer && drawerOverlay) {
    const toggleMenu = () => {
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
      drawerOverlay.classList.toggle('active');
      document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', toggleMenu);
    drawerOverlay.addEventListener('click', toggleMenu);

    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('active')) toggleMenu();
      });
    });
  }
}

/* --- Active Navigation Link Highlighter --- */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --- Global Modal System --- */
function initGlobalModals() {
  const closeBtns = document.querySelectorAll('[data-close-modal]');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) closeModal(modal.id);
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --- Accordion Interactive Handler --- */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.faq-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all neighboring accordions in the same container
      const container = item.parentElement;
      container.querySelectorAll('.faq-accordion-item').forEach(el => {
        el.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* --- Toast Notification Utility --- */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconMap = {
    success: `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--success-green)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    warning: `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--warning-amber)"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
    error: `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--primary-red)"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    info: `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--secondary-accent)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`
  };

  toast.innerHTML = `
    <span style="display:flex; align-items:center;">${iconMap[type] || ''}</span>
    <span style="font-weight:600; font-size:0.875rem;">${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --- OEM Fitment Matrix Tab Switcher --- */
function switchOemTab(btnElement, targetPanelId) {
  const container = btnElement.closest('.oem-matrix-container');
  if (!container) return;

  const tabs = container.querySelectorAll('.oem-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  btnElement.classList.add('active');

  const panels = container.querySelectorAll('.oem-panel-content');
  panels.forEach(p => p.style.display = 'none');

  const targetPanel = document.getElementById(targetPanelId);
  if (targetPanel) {
    targetPanel.style.display = 'grid';
  }
}
