/**
 * 
 */

function check() {
		
	var id_check = /^[a-zA-z0-9]{4,}$/;
	// 실험해본 결과 특수문자 ^ _ \ 는 입력이 됨.
	
	var age_check = /^[0-9]+$/;
	var id_spc = /^[~!@#$%^&*()_+|<>?]+$/;
	// 아이디란이 입력되어 있는지 확인
	if(join.j_id.value == "") {
		alert("아이디를 입력해 주세요.");
		join.j_id.focus();
		return false;
	}
	// 아이디가 문자, 숫자만 입력되어 있고 4자리 이상인지 확인
	if(!(id_check.test(join.j_id.value))) {
		alert("4자리 이상, 영문자, 숫자만 가능합니다.");
		join.j_id.value = "";
		join.j_id.focus();
		return false;
	}
	
	// 비밀번호란이 입력되어 있는지 확인
	if(join.j_pw.value == "") {
		alert("패스워드를 입력해 주세요.");
		join.j_pw.focus();
		return false;
	}
	
	if(join.j_name.value=="") {
		alert("이름을 입력하세요.");
		join.j_name.focus();
		return false;
	}
	
	if(join.j_age.value == "") {
		alert("나이를 입력하세요.");
		join.j_age.focus();
		return false;
	}
	if(!(age_check.test(join.j_age.value))) {
		alert("나이는 숫자만 입력 가능합니다.");
		join.j_age.value = "";
		join.j_age.focus();
		return false;
	}
	
}