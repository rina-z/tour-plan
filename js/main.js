var mySwiper = new Swiper('.swiper-container', {
  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.slider-button--prev',
    nextEl: '.slider-button--next',
    
  },


});