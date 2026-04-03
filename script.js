const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));

const isDesktop = () => window.innerWidth > 760;

function applyHeroParallax() {
  if (!isDesktop()) return;

  const scrollY = window.scrollY;
  const visual = document.querySelector(".hero-visual");
  const banner = document.querySelector(".banner-card");
  const product = document.querySelector(".product-card");
  const accent = document.querySelector(".accent-card");

  if (visual) {
    visual.style.transform = `translateY(${scrollY * 0.15}px)`;
  }

  if (banner) {
    banner.style.transform = `translateY(${scrollY * 0.05}px)`;
  }

  if (product) {
    banner.style.transform = `translateY(${scrollY * 0.05}px)`;
    product.style.transform = `translateY(${scrollY * 0.1}px)`;
  }

  if (accent) {
    accent.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
}

function resetMobileHeroStyles() {
  if (isDesktop()) return;

  const visual = document.querySelector(".hero-visual");
  const banner = document.querySelector(".banner-card");
  const product = document.querySelector(".product-card");
  const accent = document.querySelector(".accent-card");

  if (visual) visual.style.transform = "none";
  if (banner) banner.style.transform = "none";
  if (product) product.style.transform = "none";
  if (accent) accent.style.transform = "none";
}

window.addEventListener("scroll", () => {
  if (isDesktop()) {
    applyHeroParallax();
  }
});

window.addEventListener("resize", () => {
  resetMobileHeroStyles();
});

resetMobileHeroStyles();