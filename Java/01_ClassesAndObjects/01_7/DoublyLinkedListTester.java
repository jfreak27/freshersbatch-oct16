class Node{


	private Node prev;
	private int data;
	private Node next;


	public Node(){

		next = null;
		prev = null;
		data = 0;

	}

	public Node(int item, Node n, Node p){

		data = item;
		prev = p;
		next = n;


	}


	public void setLinkNext(Node n){

		next = n;
	}

	public void setLinkPrev(Node p){
		prev = p;
	}

	public Node getLinkNext(){
		return next;

	}

	public Node getLinkPrev(){
		return prev;

	}
	

	public int getData(){

		return data;
	}

	public void setData(int d){

		data = d;
	}



	
}


class DoublyLinkedList{

	private Node start;
	private Node end;
	int size = 0;

	public DoublyLinkedList(){

			start = null;
			end = null;
			size = 0;

	}


	public void addNewNode(int item){

			Node node = new Node(item,null,null);

			if(start==null){

				start = node;
				end = start;
			}

			else {

				node.setLinkPrev(end);
				end.setLinkNext(node);
				end = node;
			}

			size++;

	}

	public void getSize(){

		System.out.println("Number of Nodes : "+size);
	}


	public void printList(){


		if(size == 0){

			System.out.println("List is empty");
		}

		if(start.getLinkNext() == null){
			System.out.println(start.getData());
		}

		Node ptr = start;

		System.out.print(start.getData()+ " --- ");
        ptr = start.getLinkNext();
        while (ptr.getLinkNext() != null)
        {
            System.out.print(ptr.getData()+ " --- ");
            ptr = ptr.getLinkNext();
        }
        System.out.print(ptr.getData()+ "\n");
	}


	public void delete(int item){

			Node ptr = start;
			while (ptr.getLinkNext() != null)
        	{
	            if(ptr.getData() != item)
	            		ptr = ptr.getLinkNext();
	            else 
	            {

	            		Node p = ptr.getLinkPrev();
	            		Node n = ptr.getLinkNext();

	            		p.setLinkNext(n);
	            		n.setLinkPrev(p);
	            		size--;
	            		break;

	            }
       		 }

	}


	public void addNodeAtPos(int item, int pos){


		Node node = new Node(item, null, null);    
                
        Node ptr = start;
        for (int i = 2; i <= size; i++)
        {
            if (i == pos)
            {
                Node tmp = ptr.getLinkNext();
                ptr.setLinkNext(node);
                node.setLinkPrev(ptr);
                node.setLinkNext(tmp);
                tmp.setLinkPrev(node);
            }
            ptr = ptr.getLinkNext();            
        }
        size++ ;
	}

}




class DoublyLinkedListTester{



	public static void main (String args[]){


		DoublyLinkedList list = new DoublyLinkedList();

		list.addNewNode(5);
		list.addNewNode(6);
		list.addNewNode(7);
		list.addNewNode(8);


		list.printList();



		list.delete(7);
	
		list.printList();
	
		list.getSize();


		list.addNodeAtPos(9,2);
		list.addNodeAtPos(14,4);

		list.printList();
	}
}