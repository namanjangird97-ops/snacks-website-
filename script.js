const productCards = document.querySelector('.product-cards');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');

btnPrev.addEventListener('click', () => {
  productCards.scrollBy({ left: -200, behavior: 'smooth' });
});

btnNext.addEventListener('click', () => {
  productCards.scrollBy({ left: 200, behavior: 'smooth' });
});