// Password Verification
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "senhaunicajojoh") {
    alert("Senha correta! Redirecionando para a área privada...");
    // window.location.href = "privado.html";
  } else {
    alert("Senha incorreta. Tente novamente.");
  }
}

// Menu Hamburger
const menuHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuHamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.trancas, .valores, .atendimento, .agendamento, .privado');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('animated');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Carousel Functionality
const trancasGrid = document.querySelector('.trancas-grid');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;
const cardWidth = 320; // Width + gap

function updateCarousel() {
  trancasGrid.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
}

if (prevButton && nextButton) {
  nextButton.addEventListener('click', () => {
    const maxIndex = Math.floor(trancasGrid.scrollWidth / cardWidth) - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuHamburger.textContent = '☰';
      }
    }
  });
});

// Initialize
revealOnScroll();