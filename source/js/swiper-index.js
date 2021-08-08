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
