class Account{


		private String name;
		private double bal = 0;


		public void deposit(double amt){


			this.bal = this.bal + amt;
		}


		public void withdraw(double amt){

			if(amt > this.bal){

					System.out.println("Insufficient Balance");
			}

			else
				this.bal = this.bal - amt;
		}


		public double getBalance(){


			return this.bal;
		}



}



class AccountTest{


	public static void main(String args[]){

			Account a = new Account();

			System.out.println("Initial Balance : "+a.getBalance());

			System.out.println("Adding 500 : ");
			a.deposit(500);
			System.out.println("New Balance : "+a.getBalance());


			System.out.println("Withdraw 200 : ");
			a.withdraw(200);
			System.out.println("New Balance : "+a.getBalance());

			
			System.out.println("Withdraw 600 : ");
			a.withdraw(600);



	}
}