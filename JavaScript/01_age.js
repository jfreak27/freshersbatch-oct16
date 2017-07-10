

function input_age(){


	var age = prompt("Enter Your Age");
	current_age(age)
}		


function current_age(age){

	var current_year = new Date().getFullYear();
	var birth_year = current_year - age;

	document.write("Your birth year is : ", birth_year);

}