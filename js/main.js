var hotelSlider = new Swiper('.hotel-slider', {
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
    prevEl: '.hotel-slider__button--prev',
    nextEl: '.hotel-slider__button--next',
    
  },


});

var reviewSlider = new Swiper('.reviews-slider', {
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
    prevEl: '.reviews-slider__button--prev',
    nextEl: '.reviews-slider__button--next',
    
  }, 


});

var menuButton = document.querySelector(".menu-button");
menuButton .addEventListener('click', function () {
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible')
  document.querySelector("body").classList.toggle('body__block')
} )


