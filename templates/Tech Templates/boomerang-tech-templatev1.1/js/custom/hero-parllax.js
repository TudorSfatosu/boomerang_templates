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