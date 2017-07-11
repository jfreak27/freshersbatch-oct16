


function BankAccount(accNo,accName,accBal){

		this.accNo = accNo,
		this.accBal = accBal,
		this.accName = accName,

		this.withdraw = function(amt){
			this.accBal = this.accBal - amt;
		}, 

		this.deposit = function(amt){
			this.accBal = this.accBal + amt;
		}

}

function main(){

	var BankAccountObj = new BankAccount(132456,"xor",10000);

	console.log(BankAccountObj);
	
	console.log("Calling Withdraw(2000)");
	BankAccountObj.withdraw(2000);
	
	console.log("Bal = "+BankAccountObj.accBal);
	
	console.log("Calling Deposit(2000)");
	BankAccountObj.deposit(2000);
	
	console.log("Bal = "+BankAccountObj.accBal);


}