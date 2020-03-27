/**
 * 
 */
$(document).ready(function() {
	
	$("#btn01").click(function() {
		// 한번 클릭하면 on이 들어오고
		// 다시 클릭하면 on이 빠진다.
		$("ul li").toggleClass("on");
		$("p").text("밑줄이 들어갔습니다.")
		$("#img01").fadeToggle();
	});
	
	
	$("ul li").mouseenter(function() {
		// ul의 모든 li에 클래스를 생기게 한다.
		$(this).addClass("on");
		$("p").text("밑줄이 들어갔습니다.")
	});

	// ul의 모든 li에 클래스를 없앤다.
	$("ul li").mouseleave(function() {
		$(this).removeClass("on");
		$("p").text("밑줄이 사라졌습니다..")
	});
	
	
	
	
//	$("#btn01").click(function() {
//		// ul의 모든 li에 클래스를 생기게 한다.
//		// 이를 통해 자바스크립트로 CSS를 변경하지 않고
//		// CSS에 작성된 클래스에서 변경이 가능하다.
//		$("ul li").addClass("on");
//		$("p").text("밑줄이 들어갔습니다.")
//	});
//
//	// ul의 모든 li에 클래스를 없앤다.
//	$("#btn01").click(function() {
//		$("ul li").removeClass("on");
//		$("p").text("밑줄이 사라졌습니다..")
//	});
	
});