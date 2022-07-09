// function mobileMenu() {
//   let menu = document.querySelector('.mobile-menu');
//   let menuBtn = document.querySelector('.mobile-menu__btn');
//   let btnClose = document.querySelector('.mobile-menu__close-btn');

//   menuBtn.addEventListener('click', () => {
//     menu.classList.remove('d-none');
//   })

//   btnClose.addEventListener('click', () => {
//     menu.classList.add('d-none');
//   })
// }
// mobileMenu();

$(function(){
  $('.cases__slider').slick({
    infinite: true,
    fade: true,
    dots: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/slider-arrows/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/slider-arrows/arrow-right.svg" alt="">',
  });
});