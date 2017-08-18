package com.corejava.generics;



class GenericWrapper<T>{
	
	T data;
	
	GenericWrapper(T data){
		this.data = data;
	}
	
	public T getData() {
		return this.data;
	}
	
}
public class GenericTest {

	public static void main(String[] args) {
		
		GenericWrapper<Integer> wrapper = new GenericWrapper<Integer>(new Integer(6));
		
		Integer obj = wrapper.getData();
		
		System.out.println(obj);
		
		
	}
		
}
