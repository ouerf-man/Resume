/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';


$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});


(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});



	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';
		
		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});


	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item .port-pic').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});




if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#40424a",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#40424a",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress3").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress4").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress5").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress6").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
}

})(jQuery);

var object = [

{

'headline':'HTML,CSS,JavaScript',
'value':9,
'length':10,
'description':''

},

{

'headline':'Php',
'value':8,
'length':10,
'description':''

},

{

'headline':'MySQL',
'value':9,
'length':10,
'description':''

},

{

'headline':'Bootstrap',
'value':8,
'length':10,
'description':''

},

{

'headline':'jQuery',
'value':9,
'length':10,
'description':''

},
{

'headline':'ReactJs',
'value':8,
'length':10,
'description':''

},
{

'headline':'Angular',
'value':5,
'length':10,
'description':''

},
{

'headline':'Symfony',
'value':6,
'length':10,
'description':''

},

{

'headline':'Java',
'value':8,
'length':10,
'description':''

},

{

'headline':'Photoshop',
'value':8,
'length':10,
'description':''

},

{
'headline':'Communication',
'value':9,
'length':10,
'description':''

},

{

'headline':'Public speaking',
'value':7,
'length':10,
'description':''

},

{

'headline':'Leadership',
'value':6,
'length':10,
'description':''

},
];



$(document).ready(function(){

$("#skillset").skillset({

object:object,
duration:200

});

});