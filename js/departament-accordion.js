$('.acc-item').on('click', function(){
    $(this).toggleClass('opened');
   $(this).find('.acc-body').slideToggle();
});