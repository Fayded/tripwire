require.config({
	paths: {
		modernizr: 'libs/custom.modernizr',
		jquery: 'libs/jquery'
	},
  shim: {
  	"libs/respond.min" : { },
	"foundation/foundation" : { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.forms": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' },
	"foundation/jquery.offcanvas": { deps: ["jquery"], exports: 'jquery' },
	"libs/parsley": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' }
  }
});

require(["modernizr",
	"jquery",
	"libs/respond.min",
	"foundation/foundation",
	"foundation/foundation.forms",
	"foundation/foundation.reveal",
	"foundation/foundation.topbar",
	"foundation/jquery.offcanvas",
	"libs/parsley",
	"libs/jquery.flexslider-min",
], function (modernizr, $) {
  	$(document).foundation();
  	$(window).load(function() {
		$('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 200,                			
		    itemMargin: 10,
		    controlNav: false,
		    slideshow: false,
		    minItems: 2,
		    touch: true,
		    maxItems: 4,
		    move: 1,
		    prevText: "",
			nextText: ""
		});
	});

	var curSlide;
	
	$('.flexslider .slides li').on('click', function() {
		$('.loaded-carousel').flexslider({ 
		   	slideshow: false,
		    controlNav: false,
		    directionNav: true,
	        slideToStart: 0,  
	        minItems: 1,
		    touch: true,
		    maxItems: 1,
		    move: 1,
			prevText: "",
		 	nextText: "",
		 	after: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).html(slider.currentSlide + 1);
			},
			start: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).before('<li>' + 1 + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(2).before('<li>' + 'of' + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(3).before('<li>' + slider.count + '</li>');
			}
		});
	});
	$('video,audio').mediaelementplayer({features: ['playpause','progress','current','duration','volume','fullscreen']});
});