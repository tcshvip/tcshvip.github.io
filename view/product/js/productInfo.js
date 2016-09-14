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

    $('.view_all #details').css('display', 'block');
    $('.view_all #sku').css('display', 'none');
    $('.view_all .tab-lst').on('click', 'li', function () {
        $('.view_all .tab-lst li').removeClass('active');
        $(this).addClass('active');
        var dataId = $(this).attr('data_id');

        $('.view_all>div').css('display', 'none');
        $('.view_all .' + dataId).css('display', 'block');
    });


});