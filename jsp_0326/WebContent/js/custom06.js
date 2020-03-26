/**
 * 
 */

var n = 0;

$(document).ready(function() {
	
	$("img").mouseenter(function() {
		$("p").text("마우스가 이미지 위로 올라갔습니다.")
	})
	
	$("img").mouseleave(function() {
		$("p").text("마우스가 이미지 위에서 벗어났습니다.")
	})
});	