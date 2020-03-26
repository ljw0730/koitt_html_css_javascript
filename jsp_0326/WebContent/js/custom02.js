/**
 * 
 */

//html 파일을 다 읽고 제이쿼리를 실행시켜라.
$(document).ready(function() {
	
	$("#l01").click(function() {
		$("#l01").css({"color": "red"});
	});
	
	$("#l02").click(function () {
		$("#l02").css("color", "yellow");
	});
	
	$("#l03").click(function () {
		$("#l03").css({"color": "blue"})
	});
	
	$("#l04").click(function() {
		$("#l04").css("color", "green");
	});
	
	$("#l05").click(function() {
		$("#l05").css({"color": "gray"});
	});
	
	//위의 것을 한번에 만들 수도 있다.
	/*
	$("li").click(function() {
		$(this).css({"color": "red"});
	});
	*/
});