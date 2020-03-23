/**
 * 
 */

function check() {
	
	// 아이디 유효성 검사
	var id_ch = /^[a-zA-z]{4,12}$/;
	if(join.j_id.value == "") {
		alert("아이디를 입력해 주세요.");
		join.j_id.focus();
		return false;
	}
	if(!(id_ch.test(join.j_id.value))){
		alert("아이디는 4~12자리, 영문자(대문자/소문자)만 입력 가능합니다.");
		join.j_id.value = "";
		join.j_id.focus();
		return false;
	}
	
	// 패스워드 유효성 검사
	var pw_ch = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{1,}$/);
	
	if(join.j_pw.value == "") {
		alert("패스워드를 입력해 주세요.");
		join.j_pw.focus();
		return false;
	}
	if(!(pw_ch.test(join.j_pw.value))) {
		alert("패스워드는 소문자, 대문자, 숫자, 특수문자가 각각 1개이상 있어야 합니다.");
		join.j_pw.value="";
		join.j_pw2.value="";
		join.j_pw.focus();
		return false;
	}
	
	// 패스워드, 패스워드 확인 일치확인
	if(join.j_pw.value != join.j_pw2.value) {
		alert("패스워드와 패스워드 확인이 일치하지 않습니다.");
		join.j_pw.value="";
		join.j_pw2.value="";
		join.j_pw.focus();
		return false;
	}
	
	
	
	// 이름 유효성 검사
	var name_ch = /^[가-힣]{1,}$/;
	if(join.j_name.value == "") {
		alert("이름을 입력해 주세요.");
		join.j_name.focus();
		return false;
	}
	if(!(name_ch.test(join.j_name.value))){
		alert("이름은 한글만 입력이 가능합니다.");
		join.j_name.value="";
		join.j_name.focus();
		return false;
	}
	
	// 나이 유효성 검사
	var age_ch = /^[0-9]{1,3}$/;
	if(join.j_age.value == "") {
		alert("나이를 입력해 주세요.");
		join.j_age.focus();
		return false;
	}
	if(!(age_ch.test(join.j_age.value))) {
		alert("나이는 1~3글자, 한글만 입력이 가능합니다.");
		join.j_age.value="";
		join.j_age.focus();
		return false;
	}
	
	// 성별 유효성 검사
	if(join.gender.value == "") {
		alert("성별을 체크해 주세요.");
		return false;
	}
	
	// 전화번호 유효성 검사
	var tell_ch = /^[0-9]{9,11}$/;
	if(join.j_tell.value == "") {
		alert("전화번호를 입력해 주세요.");
		join.j_tell.focus();
		return false;
	}
	if(!(tell_ch.test(join.j_tell.value))) {
		alert("전화번호는 '-'를 빼고 입력해야 하며, 9~11자리 숫자만 입력 가능합니다.");
		join.j_tell.value="";
		join.j_tell.focus();
		return false;
	}
	
	// 취미 유효성 검사
	if((!join.book.checked) && (!join.game.checked) && (!join.swimming.checked)
			&& (!join.bike.checked) && (!join.hiking.checked)) {
		alert("취미는 1개 이상 선택하셔야 합니다.");
		return false;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}