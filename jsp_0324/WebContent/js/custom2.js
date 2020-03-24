/**
 * 
 */

// form
// 이름 - 국문만 가능 1자리 이상
// 숫자1 - 숫자만 1자리, 숫자1 - 숫자만 2자리
// 숫자3 - 숫자만 3자리, 숫자4 - 숫자만 4자리이하
// 함수로 add, multi
// 4개 숫자 더하기 결과 값 :  4개 숫자 곱하기 결과값 : 
// 화면에 출력하시오.

function check() {
	
	var name_check = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,}$/;
	var num1_check = /^[0-9]{1}$/;
	var num2_check = /^[0-9]{2}$/;
	var num3_check = /^[0-9]{3}$/;
	var num4_check = /^[0-9]{1,4}$/;
	
	if(sm.sm_name.value =="" ) {
		alert("이름을 입력해 주세요.");
		sm.sm_name.focus();
		return false;
	}
	if(!(name_check.test(sm.sm_name.value))) {
		alert("이름은 1글자 이상 한글을 입력해 주세요.");
		sm.sm_name.value = "";
		sm.sm_name.focus();
		return false;
	}
	
	if(sm.sm_num1.value == "") {
		alert("숫자 1을 입력해 주세요.");
		sm.sm_num1.focus();
		return false;
	}
	if(!(num1_check.test(sm.sm_num1.value))) {
		alert("숫자 1은 1자리 숫자만 입력해 주세요.");
		sm.sm_num1.value="";
		sm.sm_num1.focus();
		return false;
	}
	
	if(sm.sm_num2.value == "") {
		alert("숫자 2을 입력해 주세요.");
		sm.sm_num2.focus();
		return false;
	}
	if(!(num2_check.test(sm.sm_num2.value))) {
		alert("숫자 2은 2자리 숫자만 입력해 주세요.");
		sm.sm_num2.value="";
		sm.sm_num2.focus();
		return false;
	}
	
	if(sm.sm_num3.value == "") {
		alert("숫자 3을 입력해 주세요.");
		sm.sm_num3.focus();
		return false;
	}
	if(!(num3_check.test(sm.sm_num3.value))) {
		alert("숫자 3은 3자리 숫자만 입력해 주세요.");
		sm.sm_num3.value="";
		sm.sm_num3.focus();
		return false;
	}
	
	if(sm.sm_num4.value == "") {
		alert("숫자 4을 입력해 주세요.");
		sm.sm_num4.focus();
		return false;
	}
	if(!(num4_check.test(sm.sm_num4.value))) {
		alert("숫자 4은 1~4자리 숫자만 입력해 주세요.");
		sm.sm_num4.value="";
		sm.sm_num4.focus();
		return false;
	}
	
	var add_result = add(sm.sm_num1.value, sm.sm_num2.value, sm.sm_num3.value,
							sm.sm_num4.value);
	var mul_result = mul(sm.sm_num1.value, sm.sm_num2.value, sm.sm_num3.value,
							sm.sm_num4.value);
	document.write(sm.sm_name.value + " 학생의 덧셈/곱셈 수행<br/>");
	document.write("4개 숫자 더하기 결과 값 : " + add_result + "<br/>");
	document.write("4개 숫자 곱하기 결과 값 : " + mul_result + "<br/>");
}

function add(num1, num2, num3, num4) {
	var result = parseInt(num1) + parseInt(num2) + parseInt(num3)
				+ parseInt(num4);
	
	return result;
}

function mul(num1, num2, num3, num4) {
	var result = parseInt(num1) * parseInt(num2) * parseInt(num3)
				* parseInt(num4);

	return result;
}



