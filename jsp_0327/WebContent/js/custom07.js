/**
 * 
 */
$(document).ready(function() {
	
	// 스크롤 위치에 따른 값
	$(window).scroll(function() {
		var scNum = $(this).scrollTop();
		$("p").eq(0).text("스크롤 높이 : " + scNum);
	});
	
	// 마우스 포인트 위치
	// e 들어가는것 주의
	$(window).mousemove(function(e) {
		var x = e.pageX;
		var y = e.pageY;
		
		$("p").eq(1).text("x 좌표 : " + x);
		$("p").eq(2).text("y 좌표 : " + y);
		
		
	});
	
	var xWidth = 0;
	var yHeight = 300;
	$("#btn01").click(function() {
		xWidth = $("div").eq(1).width()-10;
		yHeight = $("div").eq(1).height()-10;
		$("div").eq(1).width(xWidth);
		$("div").eq(1).height(yHeight);
		$("#div02 p").eq(0).text("박스 너비 : " + xWidth);
		$("#div02 p").eq(1).text("박스 높이 : " + yHeight);
	});
	
	
});