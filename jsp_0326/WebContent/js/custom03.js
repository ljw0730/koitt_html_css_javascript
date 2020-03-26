/**
 * 
 */

$(document).ready(function () {
	
	// 시작하자마자 정답을 감춘다.
	$(".ans").hide();
	
	$("#q1").click(function () {
		$("#a1").show();
	});
	
	$("#q1_2").click(function() {
		$("#a1").hide();
	});
	
	$("#q2").click(function() {
		$("#a2").show();
	});
	
	$("#q2_2").click(function() {
		$("#a2").hide();
	});
});