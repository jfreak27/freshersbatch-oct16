import java.util.*;


class Person implements Comparable<Person>{


	private int height;
	private int weight;
	private String name;

	Person(String name, int h, int w){

		this.height = h;
		this.weight = w;
		this.name = name;
	}


	public int getHeight(){ return this.height; }
	public int getWeight(){ return this.weight; }
	public String  getName(){ return this.name; }

	public String toString(){
		return this.name + " " + this.height + " " + this.weight;
	}


	public int compareTo(Person p){
		if(this.height > p.getHeight())
			return 1;

		else if (this.height < p.getHeight())
			return -1;

		else
			return 0;
	}
}




class HeightComparator implements Comparator{


	public int compare(Object o1, Object o2){

		Person p1 = (Person)o1;
		Person p2 = (Person)o2;

		if(p1.getHeight() > p2.getHeight())
			return 1;

		else if (p1.getHeight() < p2.getHeight())
			return -1;

		else
			return 0;
	}
}


class WeightComparator implements Comparator{


	public int compare(Object o1, Object o2){

		Person p1 = (Person)o1;
		Person p2 = (Person)o2;

		if(p1.getWeight() > p2.getWeight())
			return 1;

		else if (p1.getWeight() < p2.getWeight())
			return -1;

		else
			return 0;
	}
}


class NameComparator implements Comparator{


	public int compare(Object o1, Object o2){

		Person p1 = (Person)o1;
		Person p2 = (Person)o2;

		return p1.getName().compareTo(p2.getName());
	}
}




public class PersonTest{

	public static void main(String[] args) {
		
		Person p[] = new Person[3];

		p[0] = new Person("aditya",154,60);
		p[1] = new Person("rajo",120,39);
		p[2] = new Person("navi",200,80);


		System.out.println("Default");
		for(int i=0; i < p.length; i++){

			System.out.println(p[i].toString());
		}
		System.out.println("-------------------");




		Arrays.sort(p, new HeightComparator());

		System.out.println("Sorted by Height");
		for(int i=0; i < p.length; i++){

			System.out.println(p[i].toString());
		}
		System.out.println("-------------------");




		Arrays.sort(p, new WeightComparator());

		System.out.println("Sorted by Weight");
		for(int i=0; i < p.length; i++){

			System.out.println(p[i].toString());
		}
		System.out.println("-------------------");


		Arrays.sort(p, new NameComparator());

		System.out.println("Sorted by Name");
		for(int i=0; i < p.length; i++){

			System.out.println(p[i].toString());
		}
		System.out.println("-------------------");



		Arrays.sort(p);

		System.out.println("Sorted by HeightComparator");
		for(int i=0; i < p.length; i++){

			System.out.println(p[i].toString());
		}
		System.out.println("-------------------");



	}
}