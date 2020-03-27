/**
 * 
 */
$(document).ready(function() {

	$("#d01").click(function() {
		// 가로를 200px로 변경한다.
		$("#d01").width(200);
		
		$("#d01 p").text("div01의 너비가 변경되었습니다.");
	})
	
	$("#d02").click(function() {
		var w1 = $("#d01").width();
		$("#d02").height(w1);
		
		$("#d02 p").text("div02의 높이가 변경되었습니다.");
	})
	
	
});