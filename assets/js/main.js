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

// ==========================================
// SISTEMA DE PROTEÇÃO (ANTI-CÓPIA E ANTI-F12)
// ==========================================

// 1. Bloqueia o clique direito do rato
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// 2. Bloqueia atalhos de teclado (F12, Inspecionar, Código Fonte, Salvar)
document.addEventListener('keydown', function(event) {
    // Bloqueia a tecla F12
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
    }
    
    // Bloqueia Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (Ferramentas de Desenvolvedor)
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.key === 'J' || event.key === 'j' || event.key === 'C' || event.key === 'c')) {
        event.preventDefault();
    }
    
    // Bloqueia Ctrl+U (Ver código-fonte) e Ctrl+S (Salvar página inteira)
    if (event.ctrlKey && (event.key === 'U' || event.key === 'u' || event.key === 'S' || event.key === 's')) {
        event.preventDefault();
    }
});

// 3. Previne que selecionem e arrastem as imagens e textos do site
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
document.addEventListener('selectstart', function(event) {
    // Permite seleção apenas se o utilizador estiver a digitar no input do chatbot ou formulário
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
    }
});
