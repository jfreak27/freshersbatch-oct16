package com.corejava.multithreading.balls;

import java.awt.*;
import java.awt.event.*;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

public class OvalMovementTemplate extends Frame implements Runnable {

	int y1;
	int y2;
	int y3;
	
	int flag1=0;
	int flag2=0;
	int flag3=0;
	
	static int reachFlag = 0;
	
	ReentrantLock lock = new ReentrantLock();
	Condition cond = lock.newCondition();
	
	public OvalMovementTemplate() {
		
		super("Oval Game");
		y1 = 400;
		y2 = 400;
		y3 = 400;
		this.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
		
		
		Thread ball1 = new Thread(this);
		ball1.setName("RedBall");
		ball1.start();
		
		Thread ball2 = new Thread(this);
		ball2.setName("GreenBall");
		ball2.start();
		
		Thread ball3 = new Thread(this);
		ball3.setName("BlueBall");
		ball3.start();
	}
	
	

	 void waitForAll() {
		lock.lock();
		 try {
			cond.await();
		} catch (InterruptedException e) {
		
			e.printStackTrace();
			
		}
		 lock.unlock();
	}
	
	 void notifyToAll() {
		lock.lock();
		
		cond.signalAll();
		lock.unlock();
	 }
	
	public void run() {
		
		
		if(Thread.currentThread().getName().equals("RedBall")) {
			for( ; ; ) {
				
				
				if(flag1==0) {
					for(int i=400;i>100;i--) {
					try {
						Thread.sleep(10);
						} catch (InterruptedException e) {e.printStackTrace();}
					y1 = i;
					this.repaint();
					if(i==101) {
						flag1=1 ;
						}
				}
				}
				
				waitForAll();
					
				
				
			
			if(flag1==1) {
				
				for(int i=100;i<400;i++) {
					try {
						Thread.sleep(10);
						} catch (InterruptedException e) {e.printStackTrace();}
					y1 = i;
					this.repaint();
					if(i==399) 
						flag1=0 ;
						
				}
				
			}
			waitForAll();
			}
			
		}
			
		
		
		
		if(Thread.currentThread().getName().equals("GreenBall")) {
			
			for( ; ; ) {
			if(flag2==0) {
				for(int i=400;i>100;i--) {
				try {
					Thread.sleep(20);
					} catch (InterruptedException e) {e.printStackTrace();}
				y2 = i;
				this.repaint();
				if(i==101) {
					flag2=1 ;
					}
			}
			}
			
			notifyToAll();
			
			
			
		
			if(flag2==1) {
				
				for(int i=100;i<400;i++) {
					try {
						Thread.sleep(20);
						} catch (InterruptedException e) {e.printStackTrace();}
					y2 = i;
					this.repaint();
					if(i==399) 
						flag2=0 ;
						
				}
				
			}
			notifyToAll();
			}
		}
		
		
		
		if(Thread.currentThread().getName().equals("BlueBall")) {
			
			for( ; ; ) {
			if(flag3==0) {
				for(int i=400;i>100;i--) {
				try {
					Thread.sleep(15);
					} catch (InterruptedException e) {e.printStackTrace();}
				y3 = i;
				this.repaint();
				if(i==101) {
					flag3=1 ;
					}
			}
			}
			
			waitForAll();
			
		
		
		
			if(flag3==1) {
				
				for(int i=100;i<400;i++) {
					try {
						Thread.sleep(15);
						} catch (InterruptedException e) {e.printStackTrace();}
					y3 = i;
					this.repaint();
					if(i==399) 
						flag3=0 ;
						
				}
				
			}
			waitForAll();}
		}
		
		
	}
	
	public void paint(Graphics g) {
		
		
		g.setColor(Color.RED);
		g.fillOval(100, y1, 50, 50);
		
		
		g.setColor(Color.GREEN);
		g.fillOval(200, y2, 50, 50);
		
		
		g.setColor(Color.BLUE);
		g.fillOval(300, y3, 50, 50);
	}
	
}
