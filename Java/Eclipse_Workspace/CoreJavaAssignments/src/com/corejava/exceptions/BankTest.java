package com.corejava.exceptions;

class InsufficientBalanceException extends Exception {

	
	private String message;
	
	InsufficientBalanceException() {
		this.message = "";
	}
	
	 InsufficientBalanceException(int bal, int amt){
		 message = "Balance : "+bal+" Withdrawl : "+amt;
	 }
	 
	 public String toString() {
		 return "Insufficient Balance!" + message;
	 }
}



class Account{
		
	private int bal;
	
	
	public void deposit(int amt) {
		
		this.bal = this.bal + amt;
	}
	
	public void withdraw(int amt) {
		try {
			if(amt > this.bal) {
				throw new InsufficientBalanceException(bal, amt);
			}
				this.bal = this.bal - amt;
		}
		catch(InsufficientBalanceException e) {
			System.out.println(e);
		}
	}
	
	public int getBal() {
		return this.bal;
	}
	
}



public class BankTest {

	public static void main(String[] args) {

		Account a = new Account();
		System.out.println("Depositing 500");
		a.deposit(500);
		System.out.println("Current Balance : "+a.getBal());
		
		
		System.out.println("Withdrawing 100");
		a.withdraw(100);
		
		System.out.println("Current Balance : "+a.getBal());
		System.out.println("Withdrawing 500");
		a.withdraw(500);
		System.out.println("Current Balance : "+a.getBal());
		
		System.out.println("Withdrawing 200");
		a.withdraw(200);
		System.out.println("Current Balance : "+a.getBal());
		

	}

}
