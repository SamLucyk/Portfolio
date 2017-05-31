function setActive(page, scroll = true) {
    $(".nav-item").removeClass("active");
    $("#"+page+"-nav").addClass("active");
    $(".page-content").addClass("hide");
    $("#"+page+"-content").removeClass("hide");
    console.log(scroll);
    if (scroll){
        console.log("Should scroll");
        $('html, body').animate({
            scrollTop: $("#navbar").offset().top - 5
        }, 1000);
    }
}

