// Mobile menu toggle for all pages
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Smooth fade-in on scroll for cards
  const cards = document.querySelectorAll('.product-card, .review-card, .cat-card, .info-card, .feature');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(function (c) { obs.observe(c); });
  }
});