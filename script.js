const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('waitlist-form');
const message = document.getElementById('form-message');

function setMessage(text, type) {
  message.textContent = text;
  message.className = 'form-message ' + type;
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';

    if (!name || !email) {
      setMessage('Please enter your name and email.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.', 'error');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('minutmate_waitlist') || '[]');
    existing.push({
      name,
      email,
      submittedAt: new Date().toISOString()
    });

    form.reset();
    setMessage('Thanks — you are on the waitlist.', 'success');
  });
}

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const visual = document.querySelector(".hero-visual");

  if (visual) {
    visual.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const banner = document.querySelector(".banner-card");
  const product = document.querySelector(".product-card");
  const accent = document.querySelector(".accent-card");

  if (banner) banner.style.transform = `translateY(${scrollY * 0.05}px)`;
  if (product) product.style.transform = `translateY(${scrollY * 0.1}px)`;
  if (accent) accent.style.transform = `translateY(${scrollY * 0.15}px)`;
});