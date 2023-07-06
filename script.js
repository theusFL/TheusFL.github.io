const navLinks = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do clique no link
    
    // Obtém o ID da seção alvo com base no atributo href do link
    const targetSection = document.querySelector(link.getAttribute('href'));
    
    // Rolagem suave até a seção alvo
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Exemplo adicional: altera a cor do cabeçalho ao rolar a página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
