class StackedArray{


		private int ary[] = new int[10];
		private int top =-1;

		public void push(int item){

				if(this.top == -1){
					this.top++;
					this.ary[top] = item;
				}

				else if(this.top != -1 && this.top <4){
					this.top++;
					this.ary[top] = item;
				}

				if(this.top >= 4){
					System.out.println("Stack Overflown!");
				}




		}


		public void pop(){

			if(this.top != -1){
					System.out.println("Popped Element is : " + this.ary[top]);
					top--;
			}

			if(this.top == -1){
					System.out.println("Stack Empty! ");
					
			}

		}


		public void printStack(){

			System.out.println("Stack : ");
			for(int i=top; i > -1; i--){
				if(i==top)
					System.out.println(ary[i]+" <----TOP");
				else
					System.out.println(ary[i]);
			}

		}

		public int getTop(){

			return this.top;
		}


}



class StackedArrayTest{



	public static void main(String args[]){

			StackedArray stack = new StackedArray();

			stack.push(10);
			
			stack.push(20);
			
			stack.push(30);
			
			stack.push(40);
			
			stack.push(50);
			
			
			stack.printStack();

			System.out.println("--------------------------------");

			stack.pop();
			stack.printStack();

			System.out.println("--------------------------------");

			stack.pop();
			stack.printStack();

			stack.pop();

			stack.pop();

			stack.printStack();
			stack.pop();
			stack.pop();
	}
}