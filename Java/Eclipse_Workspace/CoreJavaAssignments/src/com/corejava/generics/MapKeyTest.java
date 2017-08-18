package com.corejava.generics;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class MapKeyTest {

	public static void printMapKeyValues(Map<? extends Number, ?> list) {
		Iterator<?> itr = list.values().iterator();
		while(itr.hasNext())	
			System.out.println(itr.next());
	}
	
	
	public static void main(String[] args) {
		
		Map<Integer, String> stringMap = new HashMap<Integer,String>();
		Map<Double, Integer> integerMap = new HashMap<Double,Integer>();
		
		stringMap.put(5,"Aditya");
		integerMap.put(4.6,455);
		
		
		printMapKeyValues(stringMap);
		printMapKeyValues(integerMap);
		
		
	}
}