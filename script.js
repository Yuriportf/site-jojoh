function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "senhaunicajojoh") {
    window.location.href = "privado.html";
  } else {
    alert("Senha incorreta.");
  }
}

// Menu Hamburguer
const menuHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.trancas, .valores, .atendimento, .agendamento, .privado');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Inicializar opacidade e transformação para animações
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(50px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});