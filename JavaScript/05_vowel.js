function check_vowel(){

	var alpha = document.getElementById("alphabet").value;
	var msg;
	
	if(alpha=='a' || alpha=='e'| alpha=='i' || alpha=='o' || alpha=='u')
			msg = "Vowel !";

	else
			msg = "Consonent !";

	document.getElementById("placeholder").innerHTML = ("It's a "+msg);
}