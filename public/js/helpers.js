//App
function setActive(page, scroll = true) {
    $(".nav-item").removeClass("active");
    $("#"+page+"-nav").addClass("active");
    $(".page-content").addClass("hide");
    $("#"+page+"-content").removeClass("hide");
    if (scroll){
        console.log("Should scroll");
        $('html, body').animate({
            scrollTop: $("#navbar").offset().top - 5
        }, 500);
    }
    $("#footer").appendTo("#footer-container");
}


//Projects//
function getThumbnails(location, count){
    var thumbnailArray = [];
    for (i = 1; i <= count; i++){
        thumbnailArray.push({'title': location, 'num': i});
    }
    return thumbnailArray;
}
