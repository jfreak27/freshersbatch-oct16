function BankAccount(_accNo,_accName,_accBal){

		this.accNo = _accNo;
		this.accBal = _accBal;
		this.accName = _accName;
}

BankAccount.prototype.withdraw = function withdraw(amt){
			this.accBal = this.accBal - amt;
		}

BankAccount.prototype.deposit = function deposit(amt){
			this.accBal = this.accBal + amt;
		}

		

BankAccount.prototype.getBal = function getBal(){
				return this.accBal;
		}

BankAccount.prototype.getName = function getName(){
				return this.accName;
		}

BankAccount.prototype.getNo = function getNo(){
				return this.accNo;
		}



		


function main(){

	var BankAccountObj = new BankAccount(132456,"xor",10000);

	console.log(BankAccountObj);

	console.log("A/C Name :"+ BankAccountObj.getName());


	console.log("A/C Number :"+BankAccountObj.getNo());


	console.log("A/C Balance :"+BankAccountObj.getBal());


	console.log("Calling withdraw(1000)");
	BankAccountObj.withdraw(1000)
	console.log("A/C Balance :"+BankAccountObj.getBal());

	console.log("Calling deposit(1000) ");
	BankAccountObj.deposit(1000)
	
	console.log("A/C Balance :"+BankAccountObj.getBal());

}

