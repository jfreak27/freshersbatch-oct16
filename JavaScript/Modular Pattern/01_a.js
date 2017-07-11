


var BankAccount = {

		accNo : 123456,
		accBal : 10000,
		accName : "Xor",

		withdraw : function(amt){
			this.accBal = this.accBal - amt;
		}, 

		deposit : function(amt){
			this.accBal = this.accBal + amt;
		}

}

function main(){

	//var BankAccountObj = new BankAccount();

	console.log(BankAccount);
	console.log("Calling Withdraw(2000)");
	BankAccount.withdraw(2000);
	console.log("Bal = "+BankAccount.accBal);
	console.log("Calling Deposit(2000)");
	BankAccount.deposit(2000);
	console.log("Bal = "+BankAccount.accBal);


}