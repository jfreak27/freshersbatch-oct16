package com.corejava.collections;

import java.util.HashMap;

class Employee{
	
	
	String name;
	int id;
	
	Employee(String name, int id){
		this.name = name;
		this.id = id;
	}
	
	@Override
	public int hashCode() {
		return 1;
	}
	
	@Override
	public boolean equals(Object o) {
		return true;
	}
	
	public String toString() {
		return this.name;
	}
	
}



public class HashMapFailTest {

	public static void main(String[] args) {
		HashMap<Employee, Integer> hm = new HashMap<Employee, Integer>();
		
		hm.put(new Employee("Aditya",10), 1);
		hm.put(new Employee("Aditya1",10), 2);
		hm.put(new Employee("Aditya2",10), 3);
		
		
		//System.out.println(hm.get(1).toString());
		System.out.println(hm.size());
	}
	
	
}
