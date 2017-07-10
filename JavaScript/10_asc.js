var arr = [5,6,7,8,2,1,4,3,9];

function order(){

	
	document.getElementById("array_holder").innerHTML = arr;

}


function ascending(){

	arr.sort(function(a, b){return a-b});
	document.getElementById("arrAns").innerHTML = arr;

}

function descending(){

	arr.sort(function(a, b){return b-a});
	document.getElementById("arrAns").innerHTML = arr;

}