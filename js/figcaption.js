/**
 * Created by 7oops on 2016/5/17.
 */
$(function(){
    $(".figcaption").each(function(i){
        var divH = $(this).height();
        var $p = $("p", $(this)).eq(0);
        if($p.text()){
            while ($p.outerHeight() > divH) {
                $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            }
        }
        var $a = $("a", $(this)).eq(0);
        if($a.text()){
            while ($a.outerHeight() > divH) {
                $a.text($a.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            }
        }
    });
});

function figcaption(){
    $(".figcaption").each(function(i){
        var divH = $(this).height();
        var $p = $("p", $(this)).eq(0);
        if($p.text()){
            console.log("xx");
            while ($p.outerHeight() > divH) {
                $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            }
        }
        var $a = $("a", $(this)).eq(0);
        if($a.text()){
            while ($a.outerHeight() > divH) {
                $a.text($a.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            }
        }
    });
}