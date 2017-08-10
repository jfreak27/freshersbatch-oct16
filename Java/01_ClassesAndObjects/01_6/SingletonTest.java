class Singleton{

	public int a;

	private static Singleton single_instance=null;
 
	private Singleton(){

			this.a = 5;

	}

	public int getA(){
		return this.a;
	}


	public static Singleton Singleton()
    {
      
        if (single_instance == null)
        {
            single_instance = new Singleton();
       }
        return single_instance;
    }

}


class SingletonChild extends Singleton{}




class SingletonTest{


	public static void main(String args[]){


			Singleton x = Singleton.Singleton();
			Singleton y =  Singleton.Singleton();
			Singleton z =  Singleton.Singleton();

			System.out.println("A in X : "+x.a);
			System.out.println("A in Y : "+y.a);
			System.out.println("A in Z : "+z.a);

			System.out.println("Adding 5 to X in A ");
			x.a = x.a + 5;

			System.out.println("A in X : "+x.a);
			System.out.println("A in Y : "+y.a);
			System.out.println("A in Z : "+z.a);





	}
}



