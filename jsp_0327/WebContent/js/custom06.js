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
		
		if(x <300) {
			$("#div01").eq(0).css({
				"background":"yellow"
			});
		}
		else if(x >= 300 && x <600){
			$("#div01").eq(0).css({
				"background":"skyblue"
			});
		}
		else if(x >= 600 && x <900){
			$("#div01").eq(0).css({
				"background":"pink"
			});
		}
		
		if(y <300) {
			$("#div02").eq(0).css({
				"background":"url('images/img01.jpg')"
			});
		}
		else if(y >= 300 && y <600){
			$("#div02").eq(0).css({
				"background":"url('images/img02.jpg')"
			});
		}
		else if(y >= 600 && y <900){
			$("#div02").eq(0).css({
				"background":"url('images/img03.jpg')"
			});
		}
	})
	
});