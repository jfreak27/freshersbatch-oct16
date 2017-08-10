import java.util.*;
import java.text.SimpleDateFormat;  

class Employee implements Cloneable {


	public Date dob = Calendar.getInstance();


	public void printDate(){


		System.out.println(dob.toString());
	DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
		System.out.println(df.format(dob));
	}


	// public Object clone() throws CloneNotSupportedException {
	//     Employee e = (Employee)super.clone();
	//     return e;
	// }	

	public Object clone() throws CloneNotSupportedException {
	   	Employee e = (Employee)super.clone();
	   	e.dob = (Date)this.dob.clone();
	   	return e;
	}

}


class Date implements Cloneable{

	public Object clone() throws CloneNotSupportedException {
		Date d = (Date)super.clone();
	    return d;
	 }
	}

	 

public class DeepCopyTest{


	public static void main(String[] args) throws CloneNotSupportedException {
		
		Employee e = new Employee();

		
		Employee e2 = (Employee)e.clone();


		System.out.println("e == e2: (Shallow Copy)");
		System.out.println(e==e2);
		System.out.println("e.dob == e2.dob: (Deep Copy)");
		System.out.println(e.dob == e2.dob);

		

		
		e.printDate();

		e2.printDate();

	}
}