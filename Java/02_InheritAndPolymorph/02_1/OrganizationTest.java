class Employee{

	private String name;
	private int id;
	private double base_sal;

	Employee(String name, int id, double sal){
		
		this.name = name;
		this.id = id;
		this.base_sal = sal;

	}


	public double getSal(){

		return this.base_sal;
	}




}


class Manager extends Employee{

		private double incentive;

		Manager(String name, int id, double sal, double inc){
		
		super(name,id,sal);
		this.incentive = inc;

	}

	public double getSal(){

		return this.incentive + super.getSal();
	}


}


class Labor extends Employee{

		private double overtime;

		Labor(String name, int id, double sal, double overtime){
		
		super(name,id,sal);
		this.overtime = overtime;

	}

	public double getSal(){

		return this.overtime + super.getSal();
	}


}

class TotalSal{





}



class OrganizationTest{

	
	public static double TotalSal(Employee e[]){

		double totalsal = 0;

		for(int i=0;i<e.length;i++){
			totalsal = totalsal + e[i].getSal();
		}
		return totalsal;
	}

	public static void main(String[] args) {
		
		Employee e[] = new Employee[3];
		e[0] = new Manager("Rajo",123,5000,500);
		e[1] = new Labor("Adi",1230,3000,500);
		e[2] = new Labor("Navi",1231,3000,500);

		System.out.println("Total Sal of All Employees : "+ TotalSal(e));


	}
}

