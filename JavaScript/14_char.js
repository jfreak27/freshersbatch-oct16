function calculate_char(){

	var str = document.getElementById("sentence").value;

	
	var space_count = 0;
	for(var i = 0; i < str.length; i++){

		if(str[i]===' '){ space_count++;}
	}

	var char = str.length - space_count;
	document.getElementById("placeholder").innerHTML =("Sentence contains "+char+" characters.");
}