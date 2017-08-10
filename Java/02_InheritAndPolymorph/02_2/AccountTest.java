class Account{


	private int accid;
	private String name;
	private double bal;

	Account(int accid, String name, double bal){

		this.accid = accid;
		this.name = name;
		this.bal = bal;
	}



	public double getBal(){
		return this.bal;
	}


}


class SavingsAcc extends Account {


	private double fixedDeposit;

	SavingsAcc(int accid, String name, double bal, double fixedDeposit){

		super(accid, name, bal);
		this.fixedDeposit = fixedDeposit;
	}


	public double getBal(){
		return this.fixedDeposit + super.getBal();
	}
}



class CurrentAcc extends Account {


	private double cashCredit;

	CurrentAcc(int accid, String name, double bal, double cashCredit){

		super(accid, name, bal);
		this.cashCredit = cashCredit;
	}


	public double getBal(){
		return this.cashCredit + super.getBal();
	}
}


class AccountTest{


	public static double TotalCash(Account a[]){

		double totalcash = 0;

		for(int i=0;i<a.length;i++){
			totalcash = totalcash + a[i].getBal();
		}

		return totalcash;

	}
	
	public static void main(String[] args) {
		Account acc[] = new Account[3];

		acc[0] = new SavingsAcc(1000,"Aditya",5000,5000);
		acc[1] = new SavingsAcc(1001,"Rajo",3000,5000);
		acc[2] = new CurrentAcc(2000, "Navi", 5000,3000);


		System.out.println("Total Cash in Bank : "+TotalCash(acc));

	}
}