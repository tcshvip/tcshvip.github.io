/**
 * Created by sunny on 16-9-14.
 */

$(function () {
    $.scrollUp();

    // 幻灯片轮播
    $('.carousel').carousel({
        interval: 2000
    });
    var myElement = document.getElementById('carousel-slides');
    var hm = new Hammer(myElement);
    hm.on("swipeleft", function () {
        $('#carousel-slides').carousel('next')
    });
    hm.on("swiperight", function () {
        $('#carousel-slides').carousel('prev')
    });

});