function validate(){

	email = document.getElementById("email").value;
	
	var exp = /\S+@\S+\.\S+/;
    var correct = exp.test(email);

    if(correct == false){

    	alert("Please enter a Valid Email address.");
    }
    else{

    	document.getElementById("placeholder").innerHTML = "Welcome "+email+" !";
    }
}