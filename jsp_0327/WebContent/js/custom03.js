/**
 * 
 */
$(document).ready(function() {

	// scroll : 스크롤을 움직였을 경우
	$(window).scroll(function() {
		// scrollTop() : 맨위에서 얼만만큼 스크롤 되었는지 알수 있다.
		var scrolltop = $(this).scrollTop();
		if(scrolltop < 300) {
			$("div").css({
				"background-image": "url('images/img01.jpg')",
				"background-repeat": "no-repeat",
				"background-size": "cover"
					
			});
		}
		else if(scrolltop >= 300 && scrolltop < 600) {
			$("div").css({
				"background-image": "url('images/img02.jpg')",
				"background-repeat": "no-repeat"
			});
		}
		else if(scrolltop >= 600 && scrolltop < 900) {
			$("div").css({
				"background-image": "url('images/img03.jpg')",
				"background-repeat": "no-repeat"
			});
		}
		else if(scrolltop >= 900) {
			$("div").css({
				"background-image": "url('images/img04.jpg')",
				"background-repeat": "no-repeat"
			});
		}
		
		$("div").css({"position": "fixed"});
		$("p").text("스크롤 높이 : " + scrolltop);
	})
	
	// resize : 브라우저 화면 크기가 바뀐다면
	$(window).resize(function() {
		$("p").text("화면이 리사이즈 되었습니다.");
		$("div").css({"position": "fixed"});
	})
	
});