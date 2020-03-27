/**
 * 
 */
$(document).ready(function() {
	
	$("#btn01").click(function() {
		$("img").animate({
			"width": "100px"
		});
	});
	$("#btn02").click(function() {
		$("img").animate({
			"width": "200px"
		});
	});
	$("#btn03").click(function() {
		$("img").animate({
			"width": "300px"
		});
	})
	
	$("img").mouseenter(function() {
		$("img").stop().animate({
			"width": "100px"
		});
	})
	
	$("img").mouseleave(function() {
		$("img").stop().animate({
			"width": "600px"
		});
	})
	
	$("#btn04").click(function() {
		$("#d01").animate({
			"left": "300px",
			"top": "300px",
			"background-color": "#efefef"
		});
		
	});
	
	
	
});