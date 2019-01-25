$(".usecaseIndividualContainer").mouseover(function (e) {
    $(this).find(".image-container").attr("src", $(this).find(".image-container").attr("src").replace(".png", "_hover.png"));
    $(this).find(".usecaseHeader").css("color", "#f7941e");
}).mouseout(function (e) {
    $(this).find(".image-container").attr("src", $(this).find(".image-container").attr("src").replace("_hover.png", ".png"));
    $(this).find(".usecaseHeader").css("color", "#64646a");
});
