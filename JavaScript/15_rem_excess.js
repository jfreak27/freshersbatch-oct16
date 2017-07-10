function trim(){

	str = document.getElementById("sentence").value;

	var new_str = str.replace(/\s+/g,' ').trim();
	document.getElementById("placeholder").innerHTML = "Trimmed Sentence is : "+new_str;

}

