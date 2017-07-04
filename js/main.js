// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
var scrollPosition = $(window).scrollTop();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height() && document.body.scrollTop <= 80) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


// Logo fade on Scroll
var fadeOnScrollEl = $('.fade-on-scroll');
var range = 300;

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = fadeOnScrollEl.outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;

    fadeOnScrollEl.css({'opacity': calc});

    if (calc > '1') {
        fadeOnScrollEl.css({'opacity': 1});
    } else if (calc < '0') {
        fadeOnScrollEl.css({'opacity': 0});
    }
});



 // jQuery Mouse Parallax
 $.fn.mouseParallax = function ( resistance, mouse )
 {
 $el = $( this );
 TweenLite.to( $el, 0.2,
 {
 x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
 y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
 });

 };

 $( document ).mousemove( function( e ) {
 $( '.layer-6' ).mouseParallax( 55	, e );
 });


// Smooth scrolling on href
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


//Multi-layered Parallax
(function () {

    window.addEventListener('scroll', function (event) {
        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll("[data-type='parallax']");
        if (!isSafari) {
            for (i = 0, len = layers.length; i < len; i++) {
                layer = layers[i];
                depth = layer.getAttribute('data-depth');
                movement = -(topDistance * depth);
                translate3d = 'translate3d(0, ' + movement + 'px, 0)';
                layer.style['-webkit-transform'] = translate3d;
                layer.style['-moz-transform'] = translate3d;
                layer.style['-ms-transform'] = translate3d;
                layer.style['-o-transform'] = translate3d;
                layer.style.transform = translate3d;
            }
        }
    });
}).call(this);

// Section Parallax
$(function () {
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    if (!isSafari) {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            $('#ios-notice').removeClass('hidden');
            $('.parallax-container').height($(window).height() * 0.5 | 0);
        } else {
            $(window).resize(function () {
                var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
                $('.parallax-container').height(parallaxHeight);
            }).trigger('resize');
        }
    }
});

// Tile Gallery
$(function () {
    //we call Final Tiles Grid Gallery without parameters,
    //see reference for customisations: http://final-tiles-gallery.com/index.html#get-started
    $('.final-tiles-gallery').finalTilesGallery({
        margin: 0
    });
});