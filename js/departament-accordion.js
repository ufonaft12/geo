$('.acc-item').on('click', function(){
    $(this).toggleClass('opened');
   $(this).find('.acc-body').slideToggle();
   if ($(this).find('svg').hasClass('rotate')){
   		$(this).find('svg').css({'transform': 'rotate(0deg)'}).removeClass('rotate');
   } else {
   	$(this).find('svg').css({'transform': 'rotate(180deg)'}).addClass('rotate');
   }
  
});