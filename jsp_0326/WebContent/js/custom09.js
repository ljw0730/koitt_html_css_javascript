/**
 * 
 */

$(document).ready(function() {
	$("li").hide();
	$("#reading").click(function() {
		if($(this).is(":checked")) {
			$("li").eq(0).show();
		}
		else {
			$("li").eq(0).hide();
		}
	});
	
	$("#bicycle").click(function() {
		if($(this).is(":checked")) {
			$("li").eq(1).show();
		}
		else {
			$("li").eq(1).hide();
		}
	});
	
	$("#game").click(function() {
		if($(this).is(":checked")) {
			$("li").eq(2).show();
		}
		else {
			$("li").eq(2).hide();
		}
	})
	
});