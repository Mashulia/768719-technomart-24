var arrowPrev = document.querySelectorAll(`.arrows-prev`);
var arrowNext = document.querySelectorAll(`.arrows-next`);
var sliderBlock = document.querySelector('.promo-sliders-item');

arrowPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderBlock.classList.toggle('visible');
 });