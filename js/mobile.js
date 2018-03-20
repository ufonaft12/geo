$('document').ready(function(){
   $('.icon-bars').html('<img src = "img/image-open-geo.png">');
});

$('.icon-bars').on('click', function(){
    $(this).toggleClass('opened');
    if (!$(this).hasClass('opened')){
        $('.icon-bars').html('<img src = "img/image-open-geo.png">');
    } else {
        $('.icon-bars').html('<img src = "img/image-close-geo.png">');
    }

    $('#mobile-menu-opener').toggleClass('open');

    if ($('#overlay').length){
        $('#overlay').remove();
         $('body > div:not(#mobile-menu-front):not(#mobile-menu-opener), body > section').css({'transform': 'translate(0, 0)'});
    } else {
        $('html').append('<div id = "overlay"></div>');
        $('body > div:not(#mobile-menu-front):not(#mobile-menu-opener), body > section').css({'transform': 'translate(-60%, 0)' , 'transition-duration' : '0.4s'});
    }

});

$('.mobile-menu-childs').on('click', function(){
   $(this).toggleClass('open');
});