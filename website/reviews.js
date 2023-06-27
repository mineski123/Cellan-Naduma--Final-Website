var swiper = swiper(".mySwiper", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      loop:true,
      breakpoints:  {
        0: {
            slidesperView: 1,
        },
        640: {
            slidesperView: 2,
        },
        768: {
            slidesperView: 2,
        },
        1024: {
            slidesperView: 3,
        },
      },
    });
  