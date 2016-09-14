/**
 * Created by sunny on 16-9-14.
 */
$(function(){
    $(".type").click(function(){
        $("#promotion").toggleClass("goods-list-type-flex");
        $(this).toggleClass("type-flex");
    });
});