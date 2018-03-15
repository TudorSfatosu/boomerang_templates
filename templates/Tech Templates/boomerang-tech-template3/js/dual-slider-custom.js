var $gallery1 = $('#slider-1 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    draggable: false
});

var $gallery2 = $('#slider-2 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    initialIndex: 1,
    wrapAround: true,
    draggable: false
});

$('.btn-next').on( 'click', function() {
    $gallery1.flickity('next');
    $gallery2.flickity('next');
});