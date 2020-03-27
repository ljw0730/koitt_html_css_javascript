/**
 * 
 */
$(document).ready(function() {
	
	$("#panel").hide();
	
	$("#slide").click(function() {
		$("#panel").slideDown(1000);
	});
	
	$("#panel").click(function() {
		$(this).slideUp(1000);
	});
	
	$("#flip").click(function() {
		$("#panel").slideToggle(1000);
	});
	
	$("#stop").click(function() {
		$("#panel").stop();
	});
});