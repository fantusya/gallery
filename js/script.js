new Swiper('.reviews__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    touchRatio: 2,
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
    },

    speed: 800,

    effect: 'coverflow',
    coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

});