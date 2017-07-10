function check_divisor(){

	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	
	if(num2 == 0){
			alert("Divisor cannot be 0!");
			document.getElementById("division").innerHTML = "Divisor cannot be 0";
		}
	else
		document.getElementById("division").innerHTML = num1/num2;

}