function generate_table()
{

	var num = document.getElementById("num").value;

	document.getElementById("mult").innerHTML = " ";

	var i = 1;

	
	//var multiplier = [1,2,3,4,5,6,7,8,9];
	var product = [];

	for (i=1;i<=10;i++)
	{

			product[i] = num * i;
			console.log(product[i]);

	}
	



	for(i=1;i<=10;i++){
		//document.write(num+" x "+i+" = "+product[i]+"<br>");

		var node = document.createElement("p");
		var textnode = document.createTextNode(num+" x "+i+" = "+product[i]);
		node.appendChild(textnode);
		document.getElementById("mult").appendChild(node);
	}
	



}
