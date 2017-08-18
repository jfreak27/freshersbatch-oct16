package com.corejava.collections;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;



public class FailSafeTest {

	public static void main(String[] args) {
		
		ConcurrentHashMap<Integer,String> map = new ConcurrentHashMap<>();
		map.put(5, "aditya");
		boolean flag = true;
		
		Iterator<Integer> itr = map.keySet().iterator();
		
		while(itr.hasNext()) {
		if(flag){
			map.put(2, "Rajo");
			flag=false;
			}
			System.out.println(map.get(itr.next()));
		}
		
//		itr = map.keySet().iterator();
//		while(itr.hasNext())
//			System.out.println(map.get(itr.next()));
//	

	}
}
     
//            ConcurrentHashMap<String, String> hm=new ConcurrentHashMap<>();
//            hm.put("abs", "abs");
//            hm.put("abd", "abd");
//            hm.put("pq", "pqr");
//            
//			Iterator iterator = hm.keySet().iterator();
//			boolean flag=true;
//			while (iterator.hasNext())
//			{
//					if(flag){
//					hm.put("ab", "ab");
//					flag=false;
//			}
//			System.out.println(hm.get(iterator.next()));
//			
//			}
//			}
//
//	}


