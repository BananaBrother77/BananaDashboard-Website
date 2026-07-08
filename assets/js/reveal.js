const els = {
  sections: document.querySelectorAll('section[id]'),
  navLinks: document.querySelectorAll('.nav-link[href]'),
};

// Scroll reveal

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el, index) => {
  const rect = el.getBoundingClientRect();
  const isOnScreen = rect.top < window.innerHeight;

  if (isOnScreen) {
    el.style.transitionDelay = `${index * 0.1}s`;
  }

  observer.observe(el);
});

// Nav highlight on scroll

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        els.navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { threshold: 0.4 },
);

els.sections.forEach((section) => navObserver.observe(section));
