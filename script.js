const root = document.documentElement;
const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const themeToggle = document.querySelector('[data-theme-toggle]');

const preferredTheme = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0a0c10' : '#f1eee6');
}

setTheme(preferredTheme);

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function closeMenu() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.style.overflow = '';
}

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('[data-year]').textContent = new Date().getFullYear();
