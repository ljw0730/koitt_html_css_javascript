/**
 * 
 */

function check() {
	if(login.age.value>=20) {
		alert("성인입니다.");
		login.age.focus();
		return false;
	}
	else if(login.age.value<20) {
		alert("성인이 아닙니다.");
		login.age.focus();
		return false;
	}
	else{
		alert("숫자만 입력 가능합니다.");
		login.age.focus();
		return false;
	}
}