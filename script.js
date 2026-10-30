document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Expand/collapse reference cards (labels follow the page language)
const toggleLabels = {
  en: ['Read more ›', 'Read less ‹'],
  nl: ['Lees meer ›', 'Lees minder ‹'],
  es: ['Leer más ›', 'Leer menos ‹']
};
const [readMore, readLess] = toggleLabels[document.documentElement.lang] || toggleLabels.en;

document.querySelectorAll('.ref-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.ref-card');
    const isExpanded = card.classList.toggle('expanded');
    btn.textContent = isExpanded ? readLess : readMore;
  });
});

// Highlight active nav link while scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// Language dropdown
const langSwitch = document.getElementById('langSwitch');
const langBtn = document.getElementById('langBtn');

if (langSwitch && langBtn) {
  const setLangOpen = open => {
    langSwitch.classList.toggle('open', open);
    langBtn.setAttribute('aria-expanded', open);
  };

  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    setLangOpen(!langSwitch.classList.contains('open'));
  });

  document.addEventListener('click', e => {
    if (!langSwitch.contains(e.target)) setLangOpen(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && langSwitch.classList.contains('open')) {
      setLangOpen(false);
      langBtn.focus();
    }
  });
}
