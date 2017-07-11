function isPrime(num) {
  for(var x = 2; x < num; x++){
    if(num % x == 0) {
    	return false;
    }
}
  return true;
}


function prime(){	


	var num1 = parseInt(document.getElementById("num1").value);

	var num2 = parseInt(document.getElementById("num2").value);

	if(num1>num2){

		var t = num1;
		num1 = num2; 
		num2 = t;
	}

	var i;
	var arr = [];
	for(i = num1 ; i <= num2 ; i++){

			var prime = isPrime(i);
			if (prime==true){
				console.log(i);
				arr.push(i);
				
			}

	}
	document.getElementById("placeholder").innerHTML = (arr);
}




