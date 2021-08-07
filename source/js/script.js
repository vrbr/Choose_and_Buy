//menu

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

//swiper
const swiper = new Swiper(".mySwiper", {
    slidesToShow: 2,
    slidesToScroll: 1,
    spaceBetween: 34,
    freeMode: true,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 35,
            centeredSlides: false,
            loop: true,
        },
        1024: {
            spaceBetween: 50,
        },
        1200: {
            spaceBetween: 70,
        },
    }
});
