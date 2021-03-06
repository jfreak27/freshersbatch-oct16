package com.java8.lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.*;

public class ReplaceWithUpperCase {

	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		list.add("one");
		list.add("two");
		list.add("three");
		list.add("four");
		
		
		System.out.println(list);
		
		UnaryOperator<String> toUpper = (String str) -> str.replaceAll(str, str.toUpperCase());

		
		
		for(String str : list) {
			System.out.println(toUpper.apply(str));
		}
		
		
	}

}
