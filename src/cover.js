$.fn.setPaddingTop = function() {
    let paddingTop = $('.image-cover').height();
    let paperHeight = $('.paper-cover').height();
    paddingTop = paddingTop - paperHeight/2 ;
    return this.css("margin-top", paddingTop);
};
$.fn.setPaddingTopText = function() {
    let paddingTopText = $('.image-cover').height();
    let paperHeight = $('.paper-cover').height();
    paddingTopText = (paddingTopText - paperHeight) - paddingTopText*0.10;
    return this.css("margin-top", paddingTopText);
};

$(document).ready(function() {
    $('.paper-cover').setPaddingTop();
    $('.panel h1').setPaddingTopText();
});

$(window).resize(function(){
    $('.paper-cover').setPaddingTop();
    $('.panel h1').setPaddingTopText();
});