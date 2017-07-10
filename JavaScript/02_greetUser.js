function greet_user(){

	var uname = document.getElementById("uname").value;

	document.getElementById("placeholder").innerHTML = ("<h2>Hello,<i><b> "+uname+"!<b></i></h2>");
	
}