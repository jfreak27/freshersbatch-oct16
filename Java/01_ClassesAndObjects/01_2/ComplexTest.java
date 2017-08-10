class ComplexNumber{


		private int real;
		private int img;


		public ComplexNumber add(ComplexNumber b){

				ComplexNumber sum = new ComplexNumber();
				
				sum.real = this.real + b.real;
				sum.img = this.img + b.img;

				return sum;
		}

		public ComplexNumber subtract(ComplexNumber b){

				ComplexNumber subtraction = new ComplexNumber();
				
				subtraction.real = this.real - b.real;
				subtraction.img = this.img - b.img;

				return subtraction;
		}

		public ComplexNumber multiply(ComplexNumber b){

				ComplexNumber product = new ComplexNumber();
				
				product.real = this.real * b.real;
				product.img = this.img * b.img;

				return product;
		}



		// public void swap(ComplexNumber b){

		// 		ComplexNumber temp = new ComplexNumber();

		// 		temp.real = this.real;
		// 		this.real = b.real;
		// 		b.real = temp.real;

		// 		temp.img = this.img;
		// 		this.img = b.img;
		// 		b.img = temp.img;
				
				
		// }


		public void setComplexNumber(int real, int img){

				this.real = real;
				this.img = img;
		}

		public void printComplexNumber(){

				System.out.println(this.real + " + " + this.img + "i");

		}

}


class ComplexWrapper{


	ComplexNumber c;

	ComplexWrapper(ComplexNumber c){
		this.c = c;
	}
}


class ComplexTest{



		public static void swap(ComplexWrapper a, ComplexWrapper b){

			ComplexNumber temp = a.c;
			a.c = b.c;
			b.c = temp;

		}
		public static void main(String args[]){

				ComplexNumber a = new ComplexNumber();
				ComplexNumber b = new ComplexNumber();
				ComplexNumber c = new ComplexNumber();

				a.setComplexNumber(9,5);
				b.setComplexNumber(3,2);

				System.out.println("Complex A is : ");
				a.printComplexNumber();

				System.out.println("Complex B is : ");
				b.printComplexNumber();

				
				c = a.add(b);

				System.out.println("----------------");

				System.out.println("After Addition");

				c.printComplexNumber();


				c = a.subtract(b);

				System.out.println("----------------");

				System.out.println("After Subtraction");

				c.printComplexNumber();



				c = a.multiply(b);

				System.out.println("----------------");

				System.out.println("After Multiplication");

				c.printComplexNumber();






				System.out.println("----------------");

				System.out.println("After Swap");

				ComplexWrapper cw1 = new ComplexWrapper(a);
				ComplexWrapper cw2 = new ComplexWrapper(b);

				swap(cw1,cw2);


				System.out.println("Complex A is : ");
				cw1.c.printComplexNumber();

				System.out.println("Complex B is : ");
				cw2.c.printComplexNumber();




		}

}