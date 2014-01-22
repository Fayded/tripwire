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
	"libs/jquery.easing-1.3": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.royalslider.min": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.mCustomScrollbar": { deps: ["jquery"], exports: 'jquery' }
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
	"libs/jquery.easing-1.3",
	"libs/jquery.flexslider-min",
	"libs/jquery.royalslider.min",
	"libs/jquery.mCustomScrollbar",
], function (modernizr, $) {
  	$(document).foundation();
 
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

	$('#video-gallery').royalSlider({
	    arrowsNav: true,
		arrowsNavHideOnTouch: true,
	    fadeinLoadedSlide: true,
	    controlNavigationSpacing: 0,
	    controlNavigation: 'thumbnails',

	    thumbs: {
	      autoCenter: true,
		  touch: true,
	      fitInViewport: false,
	      orientation: 'vertical',
	      spacing: 8,
	      paddingBottom: 8,
		  paddingTop: 8
	    },
	    keyboardNavEnabled: true,
		autoScaleSlider: true,
		autoScaleSliderWidth: 796,
		autoScaleSliderHeight: 448,
	    imageScaleMode: 'fill',
	    imageAlignCenter:true,
	    slidesSpacing: 0,
	    loop: false,
	    loopRewind: true,
	    numImagesToPreload: 3,
		sliderTouch: true,
	    video: {
	      autoHideArrows:true,
	      autoHideControlNav:false,
	      autoHideBlocks: true
	    }, 
	});

	$("#scrollable-archive").mCustomScrollbar({
	    advanced:{
	        updateOnContentResize: true,
	    },
	    scrollInertia: 0,
	    scrollButtons:{
		    enable: true
		}
	});

	$('#KF-gallery').royalSlider({
        arrowsNav: true,
        fadeinLoadedSlide: true,
        controlNavigationSpacing: 0,
        controlNavigation: 'thumbnails',

        thumbs: {
          autoCenter: false,
          fitInViewport: true,
          orientation: sliderOrient,
          spacing: 10,
          paddingBottom: 0
        },
        keyboardNavEnabled: true,
        imageScaleMode: 'fill',
        imageAlignCenter:true,
        slidesSpacing: 0,
        loop: false,
        loopRewind: true,
        numImagesToPreload: 3,
        video: {
          autoHideArrows:false,
          autoHideControlNav:false,
          autoHideBlocks: true
        }, 
        autoScaleSlider: true
    });

	$('#masthead').royalSlider({
        arrowsNav: true,
        fadeinLoadedSlide: true,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        keyboardNavEnabled: true,
        imageScaleMode: 'none',
        imageAlignCenter:true,
        slidesSpacing: 0,
        loop: false,
        loopRewind: true,
        numImagesToPreload: 5,
        autoScaleSlider: false
    });

	$('.masthead').click(function(event) {		    
		event.preventDefault();
		$( '.flex-box' ).slideToggle( 'slow' );	
		$(' .masthead' ).toggleClass('arrowRot')	
	});



	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
	    controlNav: true,
	    slideshow: false,
		directionNav: true, 
	    itemWidth: 300,
	    itemMargin: 10,
	    minItems: 1,
	    maxItems: 3,
	    prevText: "",
		nextText: "",
	    start: function( slider ){
        	$( '.flex-box' ).addClass( 'hide' );
        	$( '.flex-box' ).removeClass( 'hideAbs' );
        }
	});
	

	$('.sub-b-three-col div').hover (handlerIn, handlerOut);

	function handlerIn() {
		$(this).find('p').slideDown( 'fast' );
	}

	function handlerOut() {
		$(this).find('p').slideUp( 'fast' );
	}

	/*$( '.three-col-content' ).hover( handlerIn, handlerOut );
	
	function handlerIn() {
		var oldImage = $(this).children('img').attr('src');
		var newImage = oldImage.substr(0, oldImage.length-4) + '-gray.jpg';
		$(this).children('img').attr('src', newImage);
	}

	function handlerOut() {
		console.log('out');
	}*/

    $('form input, form textarea').keyup(function() {
        var empty = false;
        $('form > div > input, form > div > textarea').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
        	console.log('false');
            $('.submit').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
        	console.log('here');
            $('.submit').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
});