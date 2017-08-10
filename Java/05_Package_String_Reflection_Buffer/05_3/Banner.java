class Banner{



	StringBuilder sb = new StringBuilder("Welcome to Java!");

	String str = "Welcome to Java!";


	public void display(){

	
		while(true){

			

			for(int i=0;i<str.length();i++)
			{
				sb.deleteCharAt(0);
				sb.append(str.charAt(i));
				
				System.out.print(sb + "\r");
				try{
					Thread.sleep(300);
				}catch (InterruptedException e){}

				
				
			}

			
			
		}
	}

	public static void main(String[] args)  throws InterruptedException {

		Banner b = new Banner();
		b.display();
	}
}