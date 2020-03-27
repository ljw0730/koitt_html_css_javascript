/**
 * 
 */


function move1() {
	$("#img01").stop().animate({
		"left": "-550",
		"border-radius": "50%"
	});
}

function move2() {
	$("#img02").stop().animate({
		"left": "-300",
		"border-radius": "30px",
		"opacity": "0.1"
	});
}

function init() {
	$("#img01").stop().animate({
		"left": "0",
		"border-radius": "0"
	});
	
	$("#img02").stop().animate({
		"left": "0",
		"border-radius": "0",
		"opacity": "1.0"
	});
}

//$(document).ready(function() {
//	
//	$("#btn01").click(function() {
//		$("#img01").animate({
//			"left": "-600px",
//			//"border-radius": "50%"
//		});
//	});
//	
//	
//});