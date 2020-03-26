/**
 * 
 */

$(document).ready(function() {
	
	var count = 0;
	
	$("#bottom_table tr").hide();
	
	$("#one_day").click(function() {
		if($(this).is(":checked")) {
			if(count == 0) {
				$("#table_title").show();
			}
			$("#dsim_one_day").show();
			count++;
		}
		else {
			if(count == 1) {
				$("#table_title").hide();
			}
			$("#dsim_one_day").hide();
			count--;
		}
	});
	
	$("#five_day").click(function() {
		if($(this).is(":checked")) {
			if(count == 0) {
				$("#table_title").show();
			}
			$("#dsim_five_day").show();
			count++;
		}
		else {
			if(count == 1) {
				$("#table_title").hide();
			}
			$("#dsim_five_day").hide();
			count--;
		}
	});
	
	$("#ten_day").click(function() {
		if($(this).is(":checked")) {
			if(count == 0) {
				$("#table_title").show();
			}
			$("#dsim_ten_day").show();
			count++;
		}
		else {
			if(count == 1) {
				$("#table_title").hide();
			}
			$("#dsim_ten_day").hide();
			count--;
		}
	});
	
	$("#twenty_day").click(function() {
		if($(this).is(":checked")) {
			if(count == 0) {
				$("#table_title").show();
			}
			$("#dsim_twenty_day").show();
			count++;
		}
		else {
			if(count == 1) {
				$("#table_title").hide();
			}
			$("#dsim_twenty_day").hide();
			count--;
		}
	});
	
	$("#thirty_day").click(function() {
		if($(this).is(":checked")) {
			if(count == 0) {
				$("#table_title").show();
			}
			$("#dsim_thirty_day").show();
			count++;
		}
		else {
			if(count == 1) {
				$("#table_title").hide();
			}
			$("#dsim_thirty_day").hide();
			count--;
		}
	});
	
});















//$(document).ready(function() {
//	$("li").hide();
//	$("#reading").click(function() {
//		if($(this).is(":checked")) {
//			$("li").eq(0).show();
//		}
//		else {
//			$("li").eq(0).hide();
//		}
//	});
//	
//	$("#bicycle").click(function() {
//		if($(this).is(":checked")) {
//			$("li").eq(1).show();
//		}
//		else {
//			$("li").eq(1).hide();
//		}
//	});
//	
//	$("#game").click(function() {
//		if($(this).is(":checked")) {
//			$("li").eq(2).show();
//		}
//		else {
//			$("li").eq(2).hide();
//		}
//	})
//	
//});