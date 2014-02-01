"use strict";
function calcular(){
	var result;
	var original = document.getElementById("valor");
	var temp = original.value;
	var regexp = /[+-]?\d+(\.\d+)?[cCfF]$/;

	var m = temp.match(regexp);

	if (m){
		var num = m[0].match(/[+-]?\d+(\.\d+)?/);
		var type = m[0].match(/[cCfF]$/);
		num = parseFloat(num);
		if (type == 'c' || type == 'C'){
			result = (num *9/5)+32;
			result = String(result+" Farenheit");
		}
		else{
			result = (num -32)*5/9;
			result = String(result+" Celsius");
		}
		converted.innerHTML = result;
	}
	else{
		converted.innerHTML = "ERROR! Prueba algo como '-4.2C'";
	}
}
