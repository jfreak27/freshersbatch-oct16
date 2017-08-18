package com.corejava.nestedclass;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

interface BPListener {
    void bpAbove140(int bp);
}

class Hospital{
	
	
	
	
	private int bloodPressure;
	
	public void updateBloodPressure(int bp) 
	{
		this.bloodPressure = bp;
		Notifier notifier = new Notifier();
		notifier.addListener(new Person());
		notifier.addListener(new Person());
		notifier.addListener(new Person());
		
		if(bloodPressure >= 140) {
					
			notifier.bpEvent(bloodPressure);

		}
	}
	
	
	
	
	class Notifier{
		
		private ArrayList<BPListener> listeners = new ArrayList<BPListener>();

	    public void addListener(BPListener toAdd) {
	        listeners.add(toAdd);
	    }
		
	    public void bpEvent(int bp) {
	    	for(BPListener listener : listeners) 
	    		listener.bpAbove140(bp);
	    	
	    }
	    
	}
	

}


class Person implements BPListener{
	
	public void bpAbove140(int bp) {
		System.out.println("ALERT! BP at "+bp);
	}
}




public class HospitalTest {

	public static void main(String[] args) throws InterruptedException {
	
		Hospital h = new Hospital();
		
		
		
		for( ; ; ) {
			int bp = ThreadLocalRandom.current().nextInt(100,150);
			h.updateBloodPressure(bp);
			System.out.println(bp);
			Thread.sleep(3000);
		}

	}

}
