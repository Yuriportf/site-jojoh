const trancasGrid = document.querySelector('.trancas-grid');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const hamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

// Calcular a largura correta do card (incluindo margens)
function getCardWidth() {
  if (trancasGrid.children.length === 0) return 320;
  const card = trancasGrid.children[0];
  const style = window.getComputedStyle(card);
  return card.offsetWidth + 
         parseInt(style.marginLeft) + 
         parseInt(style.marginRight);
}

// Scroll direto por quantidade fixa
function scrollByCard(direction) {
  const cardWidth = getCardWidth();
  trancasGrid.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

// Eventos de clique nos botões
if (prevButton && nextButton) {
  nextButton.addEventListener('click', () => scrollByCard(1));
  prevButton.addEventListener('click', () => scrollByCard(-1));
}

// Navegação por touch (opcional para mobile)
let touchStartX = 0;
let touchEndX = 0;

trancasGrid.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

trancasGrid.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const delta = touchEndX - touchStartX;
  const minSwipeDistance = 50; // Evita toques acidentais

  if (delta < -minSwipeDistance) scrollByCard(1);
  if (delta > minSwipeDistance) scrollByCard(-1);
}

// Funcionalidade do menu hamburguer
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Fechar o menu ao clicar em um link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}