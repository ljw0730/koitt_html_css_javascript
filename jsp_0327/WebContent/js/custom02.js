/**
 * 
 */
$(document).ready(function() {

	$("img").hide();
	
	
	$("div").click(function() {
		$("p").text("div를 클릭했습니다.");
	});
	
	$("div").mouseenter(function() {
		$("p").text("div에 마우스가 올라갔습니다.");
		$(this).css({
			"background" : "#efefef",
			"border-bottom" : "5px solid red"
		});
		//fadeIn() : 서서히 나타난다.
		$("#img01").fadeIn(2000);
		//slideDown() : 위에서 아래로 서서히 나타난다. 
		$("#img02").slideDown(2000);
		
	});
	
	$("div").mouseleave(function() {
		$("p").text("div에 마우스가 빠져나왔습니다.");
		$(this).css({
			"background" : "yellow",
			"border-bottom" : "1px solid black"
		});
		//fadeOut() : 서서히 사라진다.
		$("#img01").fadeOut(2000);
		//slideUp() : 아래에서 위로 서서히 사라진다.
		$("#img02").slideUp(2000);
	});
	
});