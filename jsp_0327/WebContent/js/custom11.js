/**
 * 
 */
function move(obj, time) {
	$(obj).stop().animate({
		"left": "-550",
		"top": "0",
	}, time);
}

function back(css) {
	$(css).stop().animate({
		"left": "0",
		"top": "0"
	});
}



$(document).ready(function() {
	
	
	
	
});