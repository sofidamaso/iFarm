$.fn.countLinesText = function(){
    if($('.panel h1').length<=0){
        return;
    }
    let divHeight = $('.panel h1').outerHeight();
    let lineHeight = parseInt($('.panel h1').css("line-height").replace("px",""));
    return Math.floor(divHeight / lineHeight);
}

$.fn.setPaddingTop = function() {
    let paddingTop = 0;
    if($('.image-cover:eq(0)').is(':hidden'))
        paddingTop = $('.image-cover:eq(1)').height();
    else
        paddingTop = $('.image-cover:eq(0)').height();
    let paperHeight = $('.paper-cover').height();
    paddingTop = paddingTop - paperHeight/2 ;
    return this.css("margin-top", paddingTop);
};
$.fn.setPaddingTopText = function() {
    let paddingTopText = 0;
    if($('.image-cover:eq(0)').is(':hidden'))
        paddingTopText = $('.image-cover:eq(1)').height();
    else
        paddingTopText = $('.image-cover:eq(0)').height();
    let paperHeight = $('.paper-cover').height();
    let lines = $('.panel h1').countLinesText();
    if(lines>1)
        paddingTopText = (paddingTopText - paperHeight) - $('.panel h1').outerHeight();
    else
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