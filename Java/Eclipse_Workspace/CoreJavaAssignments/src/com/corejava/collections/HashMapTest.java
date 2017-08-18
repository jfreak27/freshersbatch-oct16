package com.corejava.collections;

import java.util.HashMap;

class DateOfBirth{
	
	int date;
	int month;
	int year;
	
	public DateOfBirth(int d, int m, int y) {

			date = d;
			month = m;
			year = y;
		
	}
	
	public int getDate() {return this.date;}
	public int getMonth() {return this.month;}
	public int getYear() {return this.year;}
	
	public int hashCode() {
		return date;
		
	}
	
	@Override
	public boolean equals(Object o) {
		DateOfBirth d = (DateOfBirth)o;
		if(this.date== d.getDate() && this.month == d.getMonth() )
			return true;
		else 
			return false;
	}
}



public class HashMapTest {

	
	public static void main(String[] args) {
		HashMap<DateOfBirth, String> hm = new HashMap<DateOfBirth, String>();
		
		hm.put(new DateOfBirth(12,10,1995), "Aditya");
		hm.put(new DateOfBirth(02,1,1565), "Rahul");
		hm.put(new DateOfBirth(25,8,1255), "Raj");
		hm.put(new DateOfBirth(12,10,2007), "Rohit");
		
		
		System.out.println(hm.get(new DateOfBirth(12,10,1995)));
		System.out.println("Failed !");
		
	}
	
	
	
}
