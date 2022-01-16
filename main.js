// khởi tạo slick slider
$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true, //dấu chấm dưới slider css: slick-dots
        // arrows: false, //ẩn previous/next
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 741,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false //ẩn mũi tên
              }
            }
          ],
    });
});