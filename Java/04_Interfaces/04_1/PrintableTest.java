interface Printable{

		 void print();
}


class Employee implements Printable{

	String name;

	Employee(String name){
		this.name = name;
	}

	public void print(){
		System.out.println(this.name);
	}
}

class Circle implements Printable{

	double radius;

	Circle(double radius){

		this.radius = radius;

	}
	
	public void print(){
		System.out.println(this.radius);
	}
}


public class PrintableTest{

	public static void printall(Printable p[]){

		for(int i=0;i<p.length;i++){
			p[i].print();
		}

	}
	public static void main(String[] args) {
		
		Printable p[] = new Printable[3];
		p[0] = new Circle(10);
		p[1] = new Employee("Aditya");
		p[2] = new Circle(5.6);

		printall(p);
		
	}
}