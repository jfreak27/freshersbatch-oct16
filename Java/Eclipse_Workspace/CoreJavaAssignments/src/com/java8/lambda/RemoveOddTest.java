package com.java8.lambda;
import java.util.*;
import java.util.function.*;



public class RemoveOddTest {

	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		list.add("EVEN");
		list.add("ODD");
		list.add("EVENWORD");
		list.add("ODDWORD");
		
		
		System.out.println(list);
		
		Predicate<String> removeOdd = (String str)-> str.length()%2!=0;
		
		list.removeIf(removeOdd);
		
		System.out.println(list);
		
		
		
		
		
		
	}
	
	
		
	
		
	
	
}
