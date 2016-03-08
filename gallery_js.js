$(document).ready(function () {
    $(".item").click(function (e) {
        e.stopPropagation();
        $(".item").removeClass("clicked");
        $(this).toggleClass("clicked");
        $("body").addClass("showing-item");
 
        var offset = $(this).offset();
        var pos = offset.left + $(this).width()
        var center = $(".gallery").width() / 2;
        if (pos > center) {
            var align = "left";
        } else {
            var align = "right";
        }
        $(this).removeClass(".left, .right").addClass(align);
 
        return false;
    });
 
    $("html").click(function () {
        $(".item").removeClass("clicked");
        $("body").removeClass("showing-item");
    });
});
