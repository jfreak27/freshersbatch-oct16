function fact(){

	var num = document.getElementById("num1").value;

	var fact = 1;

	var i;

	for(i=1;i<=num;i++){

		fact = fact * i;

	}
	
	document.getElementById("placeholder").innerHTML = "Factorial of " + num + " is " + fact;

}