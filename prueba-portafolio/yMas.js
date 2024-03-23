let swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    /* freeMode: true, */
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    
  });

  let swiper2 = new Swiper(".mySwiper4", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 1500,
    /* freeMode: true, */
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      },
    
  });


  /* SLIDER LUDICS */
let swiper1 = new Swiper(".swiper1", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  initialSlides: 2,
  speed: 600,
  preventClick: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true
  },
  on: {
      click(event) {
          swiper.slideTo(this.clickedIndex)
      }
  },
  pagination: {
      el: ".swiper-pagination",
  }
  
});
