/* Beetle - www.beetle.net.ua */

jQuery(document).ready(function($){
	var h = $(window).height();
	$(window).scroll(function(){
		var offset_before = $('section.info2').offset().top;
		var offset_this = $('section.digitals').offset().top;
		var offset_after = $('section.posts').offset().top;
		if ( ($(this).scrollTop()+h) >= offset_before && ($(this).scrollTop()+h) <= offset_this) {
			$('section.digitals .digitals_list').find('.digitals_item').each(function(){
				$(this).find('span').each(function(){
					$(this).css('color','transparent');
				});
			});
		}
		
		if ( ($(this).scrollTop()+h) >= offset_this && ($(this).scrollTop()+h) <= offset_after) {
			var i = -1;
			$('section.digitals .digitals_list').find('.digitals_item').each(function(){
				i++;
			});
			var htmls = [];
			i = 0;
			$('section.digitals .digitals_list').find('.digitals_item').each(function(){
				$(this).find('span').each(function(){
					if($(this).html()!='') {
						console.log($(this).html());
						htmls.push($(this).html());
						$(this).html('');
					}
				});
				i++;
			});
			console.log(htmls);
			i=0;
			$('section.digitals .digitals_list').find('.digitals_item').each(function(){
				$(this).find('span').each(function(){
					var j=0;
					var echo = setInterval(function(){
						$(this).append(htmls[i][j]);
						if(j<htmls[i].length) {
							j++;
						} else {
							clearInterval(echo);
						}
					},700);
				});
				i++;
			});
		}
		
		if ( ($(this).scrollTop()+h) >= offset_after) {
			$('section.digitals .digitals_list').find('.digitals_item').each(function(){
				$(this).find('span').each(function(){
					$(this).css('color','transparent');
				});
			});
		}
	});
});