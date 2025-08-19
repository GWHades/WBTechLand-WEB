// Atualiza o ano automaticamente
document.querySelectorAll('#y').forEach(el => el.textContent = new Date().getFullYear());

// Reveal on scroll com fallback
const reveals = document.querySelectorAll('.card, .price, .quote, .service-block, .gallery figure');
function revealElement(el) {
  el.style.opacity = 1;
  el.style.transform = 'translateY(0)';
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        revealElement(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  reveals.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'all .6s ease';
    observer.observe(el);
  });
} else {
  // Fallback: revela todos imediatamente
  reveals.forEach(revealElement);
}
