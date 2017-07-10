


function arr_fun(){

	var arr = [5,6,4,3,2];

	var max = Math.max(...arr);

	var min = Math.min(...arr);

	var sum = 0;

	for(var i=0; i<arr.length; i++){

		sum = sum + arr[i];

	}


	var avg = sum / arr.length;

	document.getElementById("array").innerHTML = ("Array: "+arr);
	document.getElementById("min").innerHTML = ("Minimum Value = "+min);
	document.getElementById("max").innerHTML = ("Maximum Value = "+max);
document.getElementById("sum").innerHTML = ("Sum of All Values = "+sum);
	document.getElementById("avg").innerHTML = ("Average Value = "+avg);
	

}