$.fn.setPaddingTop = function() {
    let paddingTop = $('.image-cover').height();
    let paperHeight = $('.paper-cover').height();
    paddingTop = paddingTop - paperHeight/2 ;
    return this.css("padding-top", paddingTop);
};

$(document).ready(function() {
    $('.paper-cover').setPaddingTop();
});

$(window).resize(function(){
    $('.paper-cover').setPaddingTop();
});