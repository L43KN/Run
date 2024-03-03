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
  });