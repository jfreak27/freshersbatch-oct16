package com.corejava.multithreading;

public class PingPong implements Runnable {

	
	
	
	PingPong(){
		Thread t1 = new Thread(this);
		t1.setName("Ping");
		t1.start();
		
		Thread t2 = new Thread(this);
		t2.setName("Pong");
		t2.start();
		
		
	}
	
	
	public void run(){
		if(Thread.currentThread().getName().equals("Ping")) {
			for(int i=0;i <10 ;i++)
			{	
				System.out.println("PING");
				try {
					Thread.sleep(600);
				} catch (InterruptedException e) {
				
					e.printStackTrace();
				}
			}
			
		}
		
		if(Thread.currentThread().getName().equals("Pong")) {
			for(int i=0;i <10 ;i++)
			{	
				System.out.println("\t PONG");
				try {
					Thread.sleep(300);
				} catch (InterruptedException e) {
				
					e.printStackTrace();
				}
			}
			
		}
		
		
	
	}
	
	
	public static void main(String[] args) {
		
		new PingPong();
		
	}
}
