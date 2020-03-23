/**
 * 
 */

function check() {
	if(login.l_id.value == "") {
		alert("아이디를 입력해 주세요.");
		login.l_id.focus();
		return false;
	}
	
	if(login.l_id.value.length < 5) {
		alert("아이디를 5자리 이상 입력하세요.");
		login.l_id.focus();
		return false;
	}
	
}