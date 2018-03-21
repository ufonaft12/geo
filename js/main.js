jQuery(document).ready(function($){
  
    $(window).scroll(function(){
        if ($(window).scrollTop() < 50) {
            $('header').removeClass('fixed'); 

        }
        else {
            $('header').addClass('fixed'); 
        }
    });
  
    if(window.matchMedia('(max-width: 768px)').matches) {
        $('body').append('<div class="menu-bg"></div>');
        
        $('.mobile-menu-btn').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('#menu').toggleClass('active');
            $('.menu-bg').toggleClass('active');
            $('body').toggleClass('menu-active');
            $('#menu .menu-item-has-children.active').removeClass('active') 
        });
        
        $('#menu .menu-item-has-children').on('click', function(e){
            if (e.offsetX < 34) {
                if($(this).hasClass('active')) {
                    $('#menu .menu-item-has-children.active').removeClass('active')
                } else {
                    $('#menu .menu-item-has-children.active').removeClass('active')
                    $(this).addClass('active');
                }
                e.preventDefault();
            }
        });
        
        $('.menu-bg').click(function(){
            $('#menu .menu-item-has-children.active').removeClass('active')
            $(this).toggleClass('active');
            $('#menu').toggleClass('active');
            $('.mobile-menu-btn').toggleClass('active');
            $('body').toggleClass('menu-active');
        });
    }

    $('.gallery-slider').owlCarousel({
            loop:true,
            nav:true,
            navText:['<span class="lnr lnr-chevron-left"></span>','<span class="lnr lnr-chevron-right"></span>'],
            dots:true,
            responsive:{
                0:{
                    items:1,           
                },
                600:{
                    items:1,
                },
                900:{
                    items:1,
                }
            }
    });

    $(".team-slider").owlCarousel({
        loop:true,
        responsive:true,
        navText : ["",""],
        rtl:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    $(".carousel-blog").owlCarousel({
        loop:true,
        responsiveClass: true,
        smartSpeed: 700,
        nav: true,
        dots: false,
        navText : ["<span class='lnr lnr-chevron-left'></span>","<span class='lnr lnr-chevron-right'></span>"],
        rtl:true,
        responsive:{
            320:{
                items:1
            },
            768 :{
                items:2
            },
            1200:{
                items:4
            }
        }
    });
  
    $(".analytical-slider").owlCarousel({
        loop:true,
        margin:10,
        responsive:true,
        navText : ["שיטות נוספות","שיטות נוספות"],
        rtl:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });


    $(".page-slider-box").owlCarousel({
        //loop:true,
        responsive:true,
        navText : ["",""],
        nav:false,        
        rtl:true,
        margin:10,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

        $(".four-slider").owlCarousel({
        loop:true,
        margin:10,
        responsive:true,
        navText : [" "," "],
        rtl:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

    var pageslider = $('.page-slider-box');
    $(".page-slider-next").click(function(){
            pageslider.trigger("next.owl.carousel");
        });
        $(".page-slider-prev").click(function(){
            pageslider.trigger("prev.owl.carousel");
    });
    if ( $('.owl-item.active').index() === $('.owl-item').length - 1 ) {
        it.carousel.trigger('to.owl.carousel', [0, 200]);
    }


});


