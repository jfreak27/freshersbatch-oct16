package com.corejava.generics;
import java.util.*;




public class NumberListTest {

	public static void printList(List<? extends Number> list) {
		Iterator<? extends Number> itr = list.iterator();
		while(itr.hasNext())	
			System.out.println(itr.next());
	}
	
	
	public static void main(String[] args) {
		List<Integer> intList = new ArrayList<Integer>();
		List<Double> floatList = new ArrayList<Double>();
		
		intList.add(6);
		intList.add(7);
		intList.add(8);
		intList.add(9);
		
		
		floatList.add(6.3);
		floatList.add(2.5);
		floatList.add(3.9);
		floatList.add(2.1);
		
		printList(intList);
		printList(floatList);
		
		
		
		
	}
}