function prime(){	


	var num1 = document.getElementById("num1").value;

	var num2 = document.getElementById("num2").value;

	var i;

	for(i = num1 ; i <= num2 ; i++){

			var prime = isprime(i)
			if (prime==1){
				console.log(i)
				//document.getElementById("placeholder").innerHTML = (i+"</br>");
			}

	}




}


function isprime(num){

	var flag = 1;
	for(var i=1; i < num; i++) {

			if(num % i==0 && i!=1){

				flag = 0;
				break;
			}

	}


	if(flag == 0){

		return 0;
	}

	else{

		return 1;
	}

}