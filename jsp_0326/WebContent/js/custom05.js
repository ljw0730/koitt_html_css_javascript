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
	
	
});