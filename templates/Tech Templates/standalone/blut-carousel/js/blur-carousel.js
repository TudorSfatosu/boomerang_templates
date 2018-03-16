var isDynamicCarousel;
var smSlidesNo;
var xsSlidesNo;

$(document).ready(function () {
    if ($('#carousel1').attr('employees') <= 5) {
        isDynamicCarousel = false;
        smSlidesNo = 5;
        xsSlidesNo = 5;
    } else {
        isDynamicCarousel = true;
        smSlidesNo = 3;
        xsSlidesNo = 2;
    }

    // Carousel 1
    $('#carousel1').slick({
        asNavFor: '#captions1',
        lazyLoad: 'ondemand',
        centerMode: isDynamicCarousel,
        centerPadding: '100px',
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: isDynamicCarousel,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: smSlidesNo
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: xsSlidesNo
            }
        }]
    });

    if ($('#carousel1').attr('employees') > 5) {
        $("#captions1").slick({
            asNavFor: '#carousel1',
            autoplaySpeed: 3000,
            centerMode: isDynamicCarousel,
            speed: 200,
            fade: true,
            arrows: false
        });
    }
});