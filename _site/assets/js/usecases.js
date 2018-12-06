$(".image-container").mouseover(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png"));
}).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png"));
});
