
document.querySelectorAll('#y').forEach(el => el.textContent = new Date().getFullYear());

// Simple reveal on scroll
const reveals = document.querySelectorAll('.card, .price, .quote, .service-block, .gallery figure');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='translateY(0)'; observer.unobserve(e.target);} });
},{threshold:0.2});
reveals.forEach(el=>{ el.style.opacity=.0; el.style.transform='translateY(16px)'; el.style.transition='all .6s ease'; observer.observe(el);});
