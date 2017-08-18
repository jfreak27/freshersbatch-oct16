package com.corejava.annotations;

class Test{
	
	public String name = "Aditya";
	
	public String msg = null;
	
	@Getter
	public String getName() {
		
		return this.name;
	}
	
	@Getter
	public String GetMsg() {
		System.out.println(this.name);
		return this.name;
	}
}



