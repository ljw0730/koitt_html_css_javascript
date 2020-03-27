/**
 * 
 */
$(document).ready(function() {
	
	$("#btn01").click(function() {
		$("img").css({
			"border": "1px dashed black"
		});
		// $("img").attr: 이미지의 속성값을 변경한다.
		$("img").attr({
			"alt":"도시이미지",
			"src":"images/img01.jpg"
		});
		$("p").text("도시 이미지 입니다.");
		
	});
	
	$("#btn02").click(function() {
		$("img").css({
			"border": "2px solid red"
		});
		$("img").attr({
			"alt": "벚꽃이미지",
			"src": "images/img02.jpg"
		});
		$("p").text("벚꽃 이미지 입니다.");
	});
	
	
});