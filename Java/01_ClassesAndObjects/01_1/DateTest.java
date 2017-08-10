class Date{

	private int day;
	private int month;
	private int year;


	Date(){

			this.day = 5;
			this.month = 12;
			this.year = 1995;

	}


	Date(int day,int month,int year){

		this.day = day;
		this.month = month;
		this.year = year;

	}


	public String getDate(){

		return this.day + "/" + this.month + "/" + this.year;

	}


	public void setDay(int day){


			this.day = day;
		
	}

	public void setMonth(int month){


			this.month = month;
		
	}

	public void setYear(int year){


			this.year = year;
		
	}

	public void printDate(){

			System.out.println("Date is " + this.day + "/" + this.month + "/" + this.year);

	}

	public static void swap(Date dt[]){

		Date temp = dt[0];
		dt[0] = dt[1];
		dt[1] = temp;

	}

	

}



public class DateTest{




		public static void main(String args[]){


				Date d[] = new Date[2];
				
				d[0] = new Date();
				d[1] = new Date(10,2,2017);				
				System.out.println("Date in D1 (Default Constructor): "+d[0].getDate());
				System.out.println("Date in D2 (Parameterised Constructor): "+d[0].getDate());
				

				Date.swap(d);
				

		
				System.out.println();
				System.out.println("Date in D1 : "+d[0].getDate());
				System.out.println("Date in D2 : "+d[1].getDate());

		}
}