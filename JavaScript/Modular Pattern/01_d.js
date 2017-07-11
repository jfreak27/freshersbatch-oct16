


function BankAccount(_accNo,_accName,_accBal){

		var accNo = _accNo;
		var accBal = _accBal;
		var accName = _accName;

		function withdraw(amt){
			accBal = accBal - amt;
		}

		function deposit(amt){
			accBal = accBal + amt;
		}

		return {

			withdrawAmt : function withdrawAmt(amt){

				withdraw(amt);


			},

			depositAmt : function depositAmt(amt){

				deposit(amt);
			},

			getBal : function getBal(){
				return accBal;
			},

			getName : function getName(){
				return accName;
			},

			getNo : function getNo(){
				return accNo;
			}



		}
}

function main(){

	var BankAccountObj = new BankAccount(132456,"xor",10000);

	console.log(BankAccountObj);

	console.log("A/C Name :"+ BankAccountObj.getName());


	console.log("A/C Number :"+BankAccountObj.getNo());


	console.log("A/C Balance :"+BankAccountObj.getBal());


	console.log("Calling withdrawAmt(1000)");
	BankAccountObj.withdrawAmt(1000)
	console.log("A/C Balance :"+BankAccountObj.getBal());

	console.log("Calling depositAmt(1000) ");
	BankAccountObj.depositAmt(1000)
	
	console.log("A/C Balance :"+BankAccountObj.getBal());

}





	
	


