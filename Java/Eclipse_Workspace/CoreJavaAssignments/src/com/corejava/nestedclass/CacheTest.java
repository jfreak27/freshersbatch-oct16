package com.corejava.nestedclass;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

class Storage{
	
	class Cache{
				
		private HashMap<Integer,ArrayList<String>> hm=new HashMap<Integer,ArrayList<String>>(); 
		
		public void putData(int key, String data) {
			String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
			ArrayList<String> value = new ArrayList<String>();
			value.add(data);
			value.add(timeStamp);
			hm.put(key,value);
		}
		
		public ArrayList<String> getData(int key) {
		
			return hm.get(key);
		}
	}
	
	
	Cache cache = new Cache();
	
	public void setData(int key, String data) {
		cache.putData(key,data);
	}
	
	
	public ArrayList<String> getData(int key) {
		 return cache.getData(key);
	}
}


public class CacheTest {

	public static void main(String[] args) throws InterruptedException {
		

			Storage s = new Storage();
			s.setData(1,"aditya");
			Thread.sleep(1000);
			s.setData(5,"khare");
			
			System.out.println(s.getData(1));
			System.out.println(s.getData(5));
			
	}

}
