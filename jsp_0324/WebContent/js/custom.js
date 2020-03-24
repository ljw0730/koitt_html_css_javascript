/**
 * 
 */

function check() {
	
	// / : 정규식을 시작 하겠다.
	// ^[a-zA-z] : 첫글자는 영문자만 받는다.
	// [a-zA-z0-9]{2, 10} 2~10자리는 영문자, 숫자만 받는다.
	// 3자리 이상 총 15글자
	// 만약[0-9]${2,14} 한다면 마지막글자는 숫자만 받는다.
	var id_check = /^[a-zA-z][a-zA-z0-9]{2,14}$/;
	
	// [가-힣] : 한글만 입력가능
	// {1,} : 한글자 이상
	var name_check = /^[가-힣]{1,}$/;
	
	// [0-9] : 숫자만 입력가능
	// {1,3} : 1~3자리 입력
	// 만약 자리수에 신경쓰고 싶지 않다면 '*'을 넣는다.
	// 이는 넣어도 되고 안넣어도 된다는 표현이다.
	var age_check= /^[0-9]{1,3}$/;
	
	
	// 패스워드는 소문자, 대문자, 숫자, 특수문자
	// 1개씩 이상 들어가야한다는 조건이 있다면
	// ?=.* : 입력된 모든 한글자 한글자 비교해서 있는지 없는지 체크
	// 있으면 true, 없으면 false
	// 범위 앞에 '.' 꼭 있어야함
	var pw_check= (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{3,10}$/);

	// 아이디 유효성 검사
//	if(join.j_id.value == "") {
//		alert("아이디를 입력해 주세요.");
//		join.j_id.focus();
//		return false;
//	}
	if(!(id_check.test(join.j_id.value))) {
		alert("아이디는 3~15자리, 첫글자는 영문자만 가능하며 " +
				"나머지는 영문자,숫자만 가능합니다.");
		join.j_id.value = "";
		join.j_id.focus();
		return false;
	}
	
	
	
	// 비밀번호 유효성 검사
//	if(join.j_pw.value == "") {
//		alert("패스워드를 입력해 주세요.");
//		join.j_pw.focus();
//		return false;
//	}
//	if(join.j_pw2.value == "") {
//		alert("패스워드확인을 입력해 주세요.");
//		join.j_pw2.focus();
//		return false;
//	}
//	if(!(join.j_pw.value == join.j_pw2.value)) {
//		alert("패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
//		join.j_pw.value = "";
//		join.j_pw2.value = "";
//		join.j_pw.focus();
//		return false;
//	}
//	if(!(pw_check.test(join.j_pw.value))) {
//		alert("비밀번호는 3~10자리, 소문자, 대문자, 숫자, 특수문자 1개이상 입력해 주세요.");
//		join.j_pw.value = "";
//		join.j_pw.focus();
//		return false;
//	}

	
	// 이름 유효성 검사
//	if(join.j_name.value == "") {
//		alert("이름을 입력해 주세요.");
//		join.j_name.focus();
//		return false;
//	}
//	if(!(name_check.test(join.j_name.value))) {
//		alert("한글 1자리 이상 입력이 가능합니다.");
//		join.j_name.value = "";
//		join.j_name.focus();
//		return false;
//	}
	
	// 나이 유효성 검사
//	if(join.j_age.value == "") {
//		alert("나이를 입력해 주세요.");
//		join.j_age.focus();
//		return false;
//	}
//	if(!(age_check.test(join.j_age.value))) {
//		alert("숫자 1~3자리 입력이 가능합니다.");
//		join.j_age.value = "";
//		join.j_age.focus();
//		return false;
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	return join.submit();
	
}