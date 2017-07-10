function check_pal(){

	var word = document.getElementById("word").value;
	var len = word.length;
	var msg = 0;

	if(len===0){
		alert("Enter a Number!");
		return ;
	}
	
    if (word == word.split('').reverse().join('')){

    	msg=1
    }
    

    if(msg===1){

    	document.getElementById("msg").innerHTML = "It's a Palindrome! "; 	
    }
    if(msg===0){
    	document.getElementById("msg").innerHTML = "It's Not a Palindrome! ";
    }

}
