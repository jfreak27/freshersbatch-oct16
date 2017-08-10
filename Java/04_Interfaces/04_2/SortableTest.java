import java.util.Arrays;
import java.util.*;

interface Sortable{

	int compare();


}





class Circle implements Sortable{

	int radius;

	Circle(int radius){

		this.radius = radius;

	}
	
	public int compare(){
			return this.radius;
	}
}


class Employee implements Sortable{

	int id;

	Employee(int id){
		this.id = id;
	}

	public int compare(){
			return this.id;
	}
}





public class SortableTest{

	public static void sortall(ArrayList<Sortable> arr){

		for(int i=0; i < arr.size(); i++){  
                 for(int j=1; j < (arr.size()-i); j++){  
                          if(arr.get(j-1).compare() > arr.get(j).compare()){  
                                 Collections.swap(arr,j-1,j); 
                         }  
                          
                 }  

	}
}


	public static void main(String[] args) {
		
		//Sortable s[] = new Sortable[3];
		ArrayList<Sortable> s = new ArrayList<Sortable>();
		// s.add(new Circle(10));
		// s.add(new Circle(3));
		// s.add(new Circle(5));

		s.add(new Employee(10));
		s.add(new Employee(3));
		s.add(new Employee(5));


		//System.out.println(s[0].compare());

		for(int i=0;i<s.size();i++){
			System.out.println(s.get(i).compare());
		}


		sortall(s);

		for(int i=0;i<s.size();i++){
			System.out.println(s.get(i).compare());
		}
		
	}
}