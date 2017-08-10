class QueuedArray{


	private int ary[] = new int[10];

	private int front = -1;
	private int rear = -1;


	public void push(int item){


			if(this.front == -1 && this.rear ==-1){

				this.front++;
				this.rear++;

				this.ary[this.rear] = item;
			}

			else if(rear >= 5){

				System.out.println("Queue Full!");
			}

			else {

				this.ary[this.rear] = item;
				this.rear++;
			}



	}


	public void pop(){

			if(this.front != -1){

					
					//System.out.println("Popped Element is "+this.ary[this.front]);
					this.front++;

			}

			if(this.front > this.rear){

					System.out.println("Queue is Empty!");
					
			}

	}

	public void printQueue(){


			System.out.println("Queue: ");

			if(this.front > this.rear){
					System.out.println("Queue Empty");
			}
			for(int i=this.front ; i<=this.rear ; i++){
				if(i==this.front)
					System.out.println(i+"<---FRONT");

				else if(i==this.rear)
					System.out.println(i+"<---REAR");

				else 
					System.out.println(i);
			}
	}


}


class QueuedArrayTest{


		public static void main(String args[]){

				QueuedArray queue = new QueuedArray();

				System.out.println();
				queue.push(0);
				queue.push(1);
				queue.push(2);
				queue.push(3);
				queue.push(4);
				queue.push(5);
				queue.push(6);
				

				queue.printQueue();


				queue.pop();
				queue.pop();
				queue.pop();
				queue.pop();
				queue.pop();
				queue.pop();
				queue.printQueue();

		}
}