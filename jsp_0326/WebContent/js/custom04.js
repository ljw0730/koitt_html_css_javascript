/**
 * 
 */

$(document).ready(function () {
	
	// 시작하자마자 정답을 감춘다.
	$(".ans").hide();
	
	// mouseenter : 요소에 마우스를 가져다 대면 이벤트발동
	$("#q1").mouseenter(function () {
		$("#a1").show();
	});
	
	// mouseleave : 요소에 마우스를 빼면 이벤트발동
	$("#q1").mouseleave(function() {
		$("#a1").hide();
	});
	
	// mousedown : 요소를 마우스로 클릭하고 있는 상태면 이벤트 발동
	$("#q2").mousedown(function () {
		$("#a2").show();
	});
	
	// mouseup : 요소를 클릭했다가 풀었을때의 상태면 이벤트 발동
	$("#q2").mouseup(function() {
		$("#a2").hide();
	});
});