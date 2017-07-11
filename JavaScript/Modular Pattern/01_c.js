

var BankAccount = {				//This is a prototype

	accNo : 0,
	accName : "",
	accBal : 0,

	withdraw : function(amt){
			this.accBal = this.accBal - amt;
		}, 

		deposit : function(amt){
			this.accBal = this.accBal + amt;
		}


}




function main(){

	//console.log(BankAccount);
	var BankAccountObj = Object.create(BankAccount);		//Here we are initializing the prototype. 
	console.log("Default Value: "+BankAccountObj);			//Object.create method
															//Obj.create method will not execute any member function body
															// It will only initialize var
															//Thus function wont show on console either

	console.log("Changing accNo");
	BankAccountObj.accNo=123456;

	console.log("Changing accName");
	BankAccountObj.accName="xor";

	console.log("Changing accBal");
	BankAccountObj.accBal=10000;

	console.log(BankAccountObj);

	console.log("Calling Withdraw(2000)");
	BankAccountObj.withdraw(2000);
	console.log("Bal = "+BankAccountObj.accBal);

	console.log("Calling Deposit(2000)");
	BankAccountObj.deposit(2000);
	console.log("Bal = "+BankAccountObj.accBal);

	console.log(BankAccountObj);





	


}




