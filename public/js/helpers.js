function setActive(page) {
    $(".nav-item").removeClass("active");
    $("#"+page+"-nav").addClass("active");
    $(".page-content").addClass("hide");
    $("#"+page+"-content").removeClass("hide");
}

