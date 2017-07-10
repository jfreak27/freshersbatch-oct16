
var attempts = 3;
function login(){

	
	
var userpassword = document.getElementById("password").value;
	var password = "kgroup";
	
	if(password != userpassword){

		
		if(attempts<1){

			alert("You have exhausted your attempts");
			window.location = "08_login_error.html";
		}
		else {
		alert(" Wrong Password!  You have "+attempts+" chances remaining.");
		attempts--;
		}
		
		
	}

}






