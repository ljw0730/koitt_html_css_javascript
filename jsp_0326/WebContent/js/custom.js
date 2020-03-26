/**
 * 
 */

//html 파일을 다 읽고 제이쿼리를 실행시켜라.
$(document).ready(function() {
	
	$("#btn01").click(function () {
		$("p").hide();
	});
	
	$("#btn02").click(function() {
		$("p").show();
	});
	
	
	$("#img01").click(function () {
		$("img").hide();
	});
	
	$("#img02").click(function () {
		$("img").show();
	});
});