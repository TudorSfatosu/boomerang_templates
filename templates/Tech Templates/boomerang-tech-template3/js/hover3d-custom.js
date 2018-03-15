 $(document).ready(function(){
    $(".project").hover3d({
        selector: ".project__card"
    });

    $(".movie").hover3d({
        selector: ".movie__card",
        shine: true,
        sensitivity: 20,
    });
});