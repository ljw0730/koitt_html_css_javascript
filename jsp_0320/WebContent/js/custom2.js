/**
 * 
 */

function check() {
	var id=form.id.value;
	var pw=form.pw.value;
	if(id=="") {
		alert("아이디를 입력해 주세요.");
		form.id.focus();
		return false;
	}
	if(pw=="") {
		alert("비밀번호를 입력해 주세요.");
		form.pw.focus();
		return false;
	}
	
	
	if(id == "admin") {
		if(pw =="12345") {
			alert("로그인 되었습니다.");
			// font.submit()을 통해 from에 입력된
			// action 으로 연결이 되면서 값도 넘어간다.
			return form.submit();
			
		}
		else {
			alert("패스워드가 틀렸습니다.");
			// 페이지 불러오기
			location.href="login_error.html";
			
		}
	}
	else {
		alert("아이디가 일치하지 않습니다.");
		location.href="login_error.html";
		
	}
}

