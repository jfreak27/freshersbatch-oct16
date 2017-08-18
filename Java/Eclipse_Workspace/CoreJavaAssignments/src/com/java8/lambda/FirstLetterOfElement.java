package com.java8.lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.*;

public class FirstLetterOfElement {

	public static void main(String[] args) {
		
		
		List<String> list = new ArrayList<String>();
		list.add("EVEN");
		list.add("ODD");
		list.add("DVENWORD");
		list.add("WDDWORD");
		
		
		System.out.println(list);
		
		StringBuilder sb = new StringBuilder();
		
		Consumer<String> getFirst = (String str) -> sb.append(Character.toString(str.charAt(0)));
		
		for(int i=0;i<list.size();i++) {
			getFirst.accept(list.get(i));
		}
		
		System.out.println(sb);
	

	}

}
