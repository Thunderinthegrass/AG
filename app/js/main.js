function mobileMenu() {
  let menu = document.querySelector('.mobile-menu');
  let menuBtn = document.querySelector('.mobile-menu__btn');
  let btnClose = document.querySelector('.mobile-menu__close-btn');

  menuBtn.addEventListener('click', () => {
    menu.classList.remove('d-none');
  })

  btnClose.addEventListener('click', () => {
    menu.classList.add('d-none');
  })
}
mobileMenu();

function viewAll() {
  const btn = document.querySelector('.view-all');
  const sliders = document.querySelectorAll('.cases__slider-item');

  btn.addEventListener('click', () => {
    btn.classList.add('d-none')
    sliders.forEach((item) => {
      item.classList.add('d-block');
    })
  })
}
viewAll();

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
