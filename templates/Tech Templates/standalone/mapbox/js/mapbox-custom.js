mapboxgl.accessToken = 'pk.eyJ1IjoidHVkb3JzZmF0b3N1IiwiYSI6ImNpbXltenFmZzAwZ2d2OWx5ZXZ1bnZ5dzkifQ.1p8B_lajUiYKQuTZGQJXQQ';
var start = [-0.18, 51.47];
var end = [-0.11, 51.47];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: start,
    zoom: 6
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
});



var isAtStart = true;

document.getElementById('fly').addEventListener('click', function() {
    // depending on whether we're currently at point a or b, aim for
    // point a or b
    var target = isAtStart ? end : start;

    // and now we're at the opposite point
    isAtStart = !isAtStart;

    map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: target,
        zoom: 10,
        pitch: 60, // pitch in degrees
        bearing: -60, // bearing in degrees

        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out

        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }
    });
});