(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// v48: accessible dropdown behavior
(() => {
  const dropdowns = [...document.querySelectorAll('.nav-dropdown')];
  document.addEventListener('click', (event) => {
    for (const dropdown of dropdowns) {
      if (!dropdown.contains(event.target)) dropdown.open = false;
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') for (const dropdown of dropdowns) dropdown.open = false;
  });
  for (const dropdown of dropdowns) {
    dropdown.addEventListener('toggle', () => {
      if (dropdown.open) for (const d of dropdowns) if (d !== dropdown) d.open = false;
    });
    dropdown.querySelectorAll('a').forEach(a => a.addEventListener('click', () => dropdown.open = false));
  }
})();
