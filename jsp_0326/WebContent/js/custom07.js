/**
 * 
 */

var n = 0;

$(document).ready(function() {
	
	$("div.out").mouseenter(function () {
		$("p:first").text("마우스 올라감");
		$("p:last").text(++n);
		
		if(n>=10) {
			n=0;
		}
	});
	
	$("div.out").mouseleave(function() {
		$("p:first").text("마우스 빠져나감");
		$("p:last").text(0);
	});
	
	$("div.out").mousedown(function() {
		$("p:first").hide();
		$("p:last").text("이벤트 글자 사라짐");
	});
	
	$("div.out").mouseup(function() {
		$("p:first").show();
		$("p:last").text("이벤트 글자 나타남");
	});
});