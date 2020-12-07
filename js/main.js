

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
  
  var menuButton = $(".menu-button");
  menuButton .on('click', function () {
    $(".navbar-bottom").toggleClass('navbar-bottom--visible')
    $("body").toggleClass('body__block')
  } );
  
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('[modal__close]');
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal () {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };

  function closeModal (event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    
  };
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
         required: "Please specify your name"
        },

        phone: {
          required:"Please specify your phone number"
        },
        
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        
      }
    });
  });
  
  $(document).ready(function(){
    $('.call').mask("+7(999)999-9999"); 
  });


