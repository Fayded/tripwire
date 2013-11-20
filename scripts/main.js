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

	$('.mobile-follow').click(function(event) {
		event.preventDefault();
		$( '#search-drop' ).addClass( 'hide' );
  		$( '#social-drop' ).toggleClass( 'hide' );
	});

	$('.search-small').click(function(event) {
		event.preventDefault();
		$( '#social-drop' ).addClass( 'hide' );
  		$( '#search-drop' ).toggleClass( 'hide' );
	});
});