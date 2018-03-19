$('.icon-bars').on('click', function(){
    if ($(this).find('i').hasClass('fa-close')){
        $(this).find('i').attr('class', 'fa fa-bars');
    } else {
        $(this).find('i').attr('class', 'fa fa-close');
    }

    $('#mobile-menu-opener').toggleClass('open');
});

$('.mobile-menu-childs').on('click', function(){
   $(this).toggleClass('open');
});