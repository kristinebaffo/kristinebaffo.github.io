jQuery(document).ready(function($){
  	console.log("js is twerking : )");
  	
  	$('.no-js').hide(); 

  	// Typed Js
  	$(function() {
    	$('#typedJS').typed({
      
	      	strings: [
	      		"build compelling digital experiences.",
	      		"create responsive, mobile first websites.",
	    		"write reusable, modular, object-oriented code.",
	    		"develop digital strategies for growing brands.",
	    		"read two books a month."
	      	],
	      
	    	typeSpeed: 60,
	      	backSpeed: 60,
	      	backDelay: 1600,
	      	loop: true,
	    });
  	}); 

  	// Smooth Scrolling -- excuse my spaghetti code
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	}); 




});