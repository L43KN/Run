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

    toggleClassesInItem('.catalog__content-item-face-footer-link');
    toggleClassesInItem('.catalog__content-item-back-footer-link');

  });