var $carousel = $('.carousel').flickity();
var $background = $('.parallax__layer--bg');
var $foreground = $('.parallax__layer--fg');

var cellRatio = 0.6; // outerWidth of cell / width of carousel
var bgRatio = 0.8; // width of background layer / width of carousel
var fgRatio = 1.25; // width of foreground layer / width of carousel

var flkty = $carousel.data('flickity');
var count = flkty.slides.length - 1;

$carousel.on( 'scroll.flickity', function( event, progress ) {
  moveParallaxLayer( $background, bgRatio, progress );
  moveParallaxLayer( $foreground, fgRatio, progress );
});
// trigger initial scroll
$carousel.flickity('reposition');

function moveParallaxLayer( $layer, layerRatio, progress ) {
  var ratio = cellRatio * layerRatio;
  $layer.css({
    left: ( 0.5 - ( 0.5 + progress * count ) * ratio ) * 100 + '%'
  });
}
