/**
 * 
 */

function check() {
	if(login.gender.value == "") {
		alert("성별을 체크해 주세요.");
		return false;
	}
	if(login.gender.value == "male") {
		alert("남성입니다.");
		location.href="http://www.naver.com";
	}
	else if(login.gender.value == "female") {
		alert("여성입니다.");
		location.href="http://www.daum.net";
	}
}