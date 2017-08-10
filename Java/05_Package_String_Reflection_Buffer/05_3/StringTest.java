class StringTest{


	String s = "aditya";
	String s2 = new String("aditya");

	public void test(){

		System.out.println("s==s2 ? " + s==s2);
	}



	public static void main(String[] args) {
		StringTest st = new StringTest();
		st.test();
	}
}