// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.3)';
  } else {
    navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0)';
  }
});

// Intersection observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.work-item, .philosophy-item, .tech-category').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Loading screen auto-hide
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.pointerEvents = 'none';
    }, 2000);
  }
});
