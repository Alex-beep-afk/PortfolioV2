const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 1000px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
}
);