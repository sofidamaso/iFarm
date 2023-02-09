$('.navbar-collapse').on('show.bs.collapse', function (){
    $('.navbar-collapse').addClass('d-flex');
    $('.navbar-collapse').addClass('justify-content-center');
    $('.navbar-collapse').addClass('align-items-start');
    $('body').addClass('overflow-hidden');
    $('nav').addClass('vh-100');
    $('.navbar .container-fluid').addClass('align-items-baseline');
    $('.navbar').removeClass('bg-grad');
    $('.navbar').addClass('bg-green');
    if($('.navbar-nav').hasClass('animate__fadeOut'))
        $('.navbar-nav').removeClass('animate__fadeOut');
    $('.navbar-nav').addClass('animate__fadeIn');
});

$('.navbar-collapse').on('hidden.bs.collapse', function () {
    if($('.navbar-nav').hasClass('animate__fadeIn'))
        $('.navbar-nav').removeClass('animate__fadeIn');
    $('.navbar-nav').addClass('animate__fadeOut');
    $('.navbar-collapse').removeClass('d-flex');
    $('.navbar-collapse').removeClass('justify-content-center');
    $('.navbar-collapse').removeClass('align-items-start');
    $('body').removeClass('overflow-hidden');
    $('nav').removeClass('vh-100');
    $('.navbar .container-fluid').removeClass('align-items-baseline');
    $('.navbar').removeClass('bg-green');
    $('.navbar').addClass('bg-grad');
});

$('.navbar-collapse').on('hide.bs.collapse', function (){
    if($('.navbar-nav').hasClass('animate__fadeIn'))
        $('.navbar-nav').removeClass('animate__fadeIn');
    $('.navbar-nav').addClass('animate__fadeOut');
});


