package com.corejava.exceptions;

class Database implements AutoCloseable{

	public void execute() {
				
		System.out.println("Database is being executed!");
		
	}

	@Override
	public void close() throws Exception {
		System.out.println("Database Connection has been closed!");
		
	}

}


class DatabaseTest{
	
	
	public static void main(String[] args)  {
		
		
		try(Database d = new Database()){
			
			d.execute();
		}
		
		catch(Exception e) {
			System.out.println("Exception Caught!");
		}
	}
}