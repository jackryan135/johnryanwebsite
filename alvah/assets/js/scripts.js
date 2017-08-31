(function ($) {
    "use strict";

	  	/*----------------------------------------------------------------------------
								For Sticky Menu
	  	-----------------------------------------------------------------------------*/
	  	$(window).on('scroll',function(){
		   if($(this).scrollTop() > 100){
		   $('header').addClass('sticky');
		}
		else{
		   $('header').removeClass('sticky');
		}
		});

	  	
	  	/*----------------------------------------------------------------------------
								For Mobile Menu
	  	-----------------------------------------------------------------------------*/
		 $(document).on('click', '.navbar-collapse.in', function (e) {
	        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
	            $(this).collapse('hide');
	        }
	    });
	    $('body').scrollspy({
	        target: '.navbar-collapse',
	        offset: 195
	    });

	    
	    /*----------------------------------------------------------------------------
								For Wow
	  	-----------------------------------------------------------------------------*/
	    new WOW().init();


    	/*----------------------------------------------------------------------------
								For Sticky Menu
  		-----------------------------------------------------------------------------*/
	  	jQuery(window).load(function (){
			var $grid = $('.portfolio-item').isotope({
			});
			$('.portfolio-menu').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			 $('.portfolio-menu button').on('click', function(event) {
		        $(this).siblings('.active').removeClass('active');
		        $(this).addClass('active');
		        event.preventDefault();
			});
		});


		/*----------------------------------------------------------------------------
								For Preloader
  		-----------------------------------------------------------------------------*/
 		$('.preloader').fadeOut('slow');
		

		/*----------------------------------------------------------------------------
								For Owl-Carousel
  		-----------------------------------------------------------------------------*/
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    dots:false,
		    autoplay:true,
			autoplayTimeout:3000,
			smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		
		/*----------------------------------------------------------------------------
								For Scroll Spy
  		-----------------------------------------------------------------------------*/
	    $("a").on('click', function(event) {
	      if (this.hash !== "") {
	        event.preventDefault();
	        var hash = this.hash;$('html, body').animate({
	          scrollTop: $(hash).offset().top
	        }, 1000, function(){
	          window.location.hash = hash;
	        });
	      }
	    });

	    
	    /*----------------------------------------------------------------------------
								For Parallax Background
  		-----------------------------------------------------------------------------*/
	    var parallaxeffect = $(window);
        	parallaxeffect.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

	    
	    /*----------------------------------------------------------------------------
								For Video Background
  		-----------------------------------------------------------------------------*/
	    var bgVideo = $('.background-video'),
	        videoId = bgVideo.attr('data-video');
	    	bgVideo.each(function () {
	        $(this).YTPlayer({
	            fitToBackground: true,
	            videoId: videoId,
	            pauseOnScroll: false
	        });
	    });

		
		/*----------------------------------------------------------------------------
								For Scroll Top
  		-----------------------------------------------------------------------------*/
		$(window).on('scroll',function(){
	    if($(this).scrollTop() > 600){
	        $('.scroll-top').removeClass('not-visible');
	    }
	    else{
	        $('.scroll-top').addClass('not-visible');
	    }
		});
	    $('.scroll-top').on('click',function (event){
	        $('html,body').animate({
	            scrollTop:0
	        },1000);
	    });

})(jQuery);