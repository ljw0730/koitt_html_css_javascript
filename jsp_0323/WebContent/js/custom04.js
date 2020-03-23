/**
 * 
 */

function check() {
	/*
	 	정규표현식
		/ => 정규표현식의 처음을 뜻함
		^ => 문장의 처음을 뜻함.
		[ ] => 대괄호 사이의 문자셋을 비교
		[a-z] => 소문자 a~z
		[A-Z] => 대문자 A~Z
		[가-힣] => 한국어
		
		{ } => 문자열 길이.
		{2, 10} 2~10까지의 길이를 말함
		{8, } 최소 8자리 이상이면 true;
		
		^(?=.*[a-z]) .1개씩 * 모든문자에서 a-z가 있는지 확인
	*/
	
	
	
	// 문자와 숫자만 입력 가능하며
	// 4글자에서 12글자까지만 입력 가능하게 끔한다.
	// 맨앞 ^ 영문자 또는 숫자로 시작하는 
	// 맨뒤 $ 표시에 의해 끝날 때는 영문자 또는 숫자
	var idcheck =/^[a-zA-Z0-9]{4,12}$/;
	
	// 입력값을 비교하여 문자만 입력되어 있는지
	// 확인하기 위한 변수 
	var id_char=/^[a-zA-Z]$/;
	
	// 입력값을 비교하여 숫자만 입력되어 있는지
	// 확인하기 위한 변수
	var id_num = /[0-9]$/;
	//var id_num = /^[0-9]/; // 첫번째 문자가 숫자인지 아닌지 비교
	//var id_num2 = /[0-9]$/; // 마지막 문자가 숫자인지 아닌지 비교
	
	// ^빼면 왜 되는지 물어보기
	
	// 입력값을 비교하여 특수문자만 입력되어 있는지
	// 확인하기 위한 변수
	// 특수문자중 "-|"또는 "|-" 연속으로 들어 가있으면 안되는 오류발견 
	var id_spc = /^[~`!@#$%^&*()_+-=|\<>?/]$/;
	
	var id_kor =/[가-힣]$/;
	
	// 특수문자 빼고 다 되도록
	var id_all = /[a-zA-Z가-힝0-9]$/
	
	
	// 입력이 숫자가 아니면...
	if(!(id_num.test(join.j_id.value))) {
		alert("숫자만 입력이 가능합니다.");
		join.j_id.value = "";
		join.j_id.focus();
		return false;
	}
	else{
		alert("숫자만 입력이 되었습니다.");
	}
	
	// 입력이 국문이 아니면...
	if(!(id_kor.test(join.j_k_name.value))) {
		alert("국문만 입력이 가능합니다.");
		join.j_k_name.value = "";
		join.j_k_name.focus();
		return false;
	}
		
		
	if(join.gender.value == "") {
		alert("성별을 체크해 주세요.");
		return false;
	}
	if(join.gender.value == "male") {
		alert("남성입니다.");
		location.href="http://www.naver.com";
	}
	else if(join.gender.value == "female") {
		alert("여성입니다.");
		location.href="http://www.daum.net";
	}
}