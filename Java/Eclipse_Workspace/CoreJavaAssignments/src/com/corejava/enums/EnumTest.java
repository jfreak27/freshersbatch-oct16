package com.corejava.enums;


enum Status{
	
	NEW(1), REJECTED(2), ACCEPTED(3), COMPLETED(4);
	
	public int value;
	
	Status(int val){
		this.value = val;
	}
	
}



class Order{
	
	
	private int orderId;
	private int quantity;
	private String name;
	private double price;
	private Status status;
	
	
	
	public void placeOrder(Status status, int id, String name, int qty, int price) {
		this.orderId = id;
		this.name = name;
		this.quantity = qty;
		this.price = price;
		this.status = status;
	}
	
	
	public void printOrder() {
		System.out.println("Order ID: "+orderId);
		System.out.println("Status: "+status.value);
		System.out.println("Name: "+name);
		System.out.println("Quantity: "+quantity);
		System.out.println("Price: "+price);
		
	}
	
	
}




public class EnumTest {

	public static void main(String[] args) {
		
			Order order = new Order();
			
			order.placeOrder(Status.NEW, 1, "TV", 1, 5000);
			
			order.printOrder();
		
	}

}
