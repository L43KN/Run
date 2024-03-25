$(document).ready(function(){
  
    $('.carousel__wrapper').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/carousel_icon-prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/carousel_icon-next.png" alt="prev"></button>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
              }
            },
          ],
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs-item--active)', function() {
      $(this)
        .addClass('catalog__tabs-item--active').siblings().removeClass('catalog__tabs-item--active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

    function toggleClassesInItem(item) {
      $(item).each(function(i) {
        $(this).on('click', function(j) {
          j.preventDefault();
          $('.catalog__content-item-face').eq(i).toggleClass('catalog__content-item-face--active');
          $('.catalog__content-item-back').eq(i).toggleClass('catalog__content-item-back--active');
        })
      });
    }

    toggleClassesInItem('.catalog__content-item-face-link');
    toggleClassesInItem('.catalog__content-item-back-link');

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.button--small').each(function(n) {
      $(this).on('click', function() {
        $('#order .modal__subtitle').text($('.catalog__content-item-face-subtitle').eq(n).text());
        $('.overlay ,#order').fadeIn('slow');
      })
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #gratitude').fadeOut('slow');
    });

    function validationForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true,
            minlength: 10
          }
        },
        messages: {
          name: "Введите ваше имя",
          phone: "Введите ваш номер телефона",
          email: {
            required: "Введите вашу эл.почту",
            email: "Введите вашу эл.почту корректно",
            minlength: jQuery.validator.format("Минимальное кол-во символо: {0}")
          }
        }
      });
    }

    validationForms('.consultation__wrapper .form');
    validationForms('#consultation .form');
    validationForms('#order .form');

    $(window).scroll(function() {
      if ($(this).scrollTop() > 650) {
        $('.pageup').fadeIn('slow');
      } else {
        $('.pageup').fadeOut('slow');
      }
    });

    $('a[href^="#"]').click(function() {
      const _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });

    new WOW().init();

  });