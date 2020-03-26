/**
 * 
 */

$(document).ready(function() {
	
	$("#notice").mouseenter(function() {
		$("#notice").css({"color": "white",
							"background": "black"});
		$("p").text("공지사항 선택");
	});

	$("#notice").mouseleave(function() {
		$("#notice").css({"color": "",
							"background": ""});
		$("p").text("마우스를 올려주세요.");
	});
	
	$("#event").mouseenter(function() {
		$("#event").css({"color": "white",
							"background": "black"});
		$("p").text("이벤트 선택");
	});

	$("#event").mouseleave(function() {
		$("#event").css({"color": "",
							"background": ""});
		$("p").text("마우스를 올려주세요.");
	});
	
	$("#login").mouseenter(function() {
		$("#login").css({"color": "white",
							"background": "black"});
		$("p").text("로그인 선택");
	});

	$("#login").mouseleave(function() {
		$("#login").css({"color": "",
							"background": ""});
		$("p").text("마우스를 올려주세요.");
	});
	
	$("#join").mouseenter(function() {
		$("#join").css({"color": "white",
							"background": "black"});
		$("p").text("회원가입 선택");
	});

	$("#join").mouseleave(function() {
		$("#join").css({"color": "",
							"background": ""});
		$("p").text("마우스를 올려주세요.");
	});
	
});