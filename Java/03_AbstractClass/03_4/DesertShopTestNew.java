import java.util.Scanner;
import java.util.ArrayList;
abstract class DesertItem{

	abstract double getCost();
	
}



class Candy extends DesertItem{

	
	private  double cost = 100;
	

	public  double getCost(){
		return this.cost;
	}


}


class Cookie extends DesertItem{

	private  double cost = 200;
	

	public  double getCost(){
		return this.cost;
	}

}



class IceCream extends DesertItem{

	private  double cost = 500;
	

	public  double getCost(){
		return this.cost;
	}


}

 class DesertShop{

			private static ArrayList<Candy> candyInventory = new ArrayList<Candy>();
			private static ArrayList<Cookie> cookieInventory = new ArrayList<Cookie>();
			private static ArrayList<IceCream> iceCreamInventory = new ArrayList<IceCream>();


			public int viewCandyInventory(){
				return candyInventory.size();
			}

			public int viewCookieInventory(){
				return cookieInventory.size();
			}

			public int viewIceCreamInventory(){
				return iceCreamInventory.size();
			}

			public void addCandy(int quantity){
				Candy candy[] = new Candy[quantity];

				for(int i=0 ; i<quantity; i++){
					candyInventory.add(candy[i]);
				}
			}

			public void addCookie(int quantity){
				Cookie cookie[] = new Cookie[quantity];

				for(int i=0 ; i<quantity; i++){
					cookieInventory.add(cookie[i]);
				}
			}

			public void addIceCream(int quantity){
				IceCream iceCream[] = new IceCream[quantity];

				for(int i=0 ; i<quantity; i++){
					iceCreamInventory.add(iceCream[i]);
				}
			}


			public void getCookie(int quantity){

				for(int i=0; i <quantity ; i++)
					cookieInventory.remove(0);

			}

			public void getCandy(int quantity){

				for(int i=0; i <quantity ; i++)
					candyInventory.remove(0);

			}

			public void getIceCream(int quantity){

				for(int i=0; i <quantity ; i++)
					iceCreamInventory.remove(0);

			}
			
}

public class DesertShopTestNew{


	public static void main(String[] args) {
			Scanner scr = new Scanner(System.in);
			int choice;
			int quantity;
			Candy candy = new Candy();
			Cookie cookie = new Cookie();
			IceCream iceCream = new IceCream();
			DesertShop shop = new DesertShop();

			while(true)
			{
				System.out.println("------------------");
				System.out.println("Are you ");
				System.out.println("Owner ---- 1");
				System.out.println("Customer ---- 2");
				System.out.println("Quit ---- 3");
				System.out.println("------------------");
				choice = scr.nextInt();



				


				if(choice == 1){

						outer : while(true){
							System.out.println("------------------");
							System.out.println("Update Inventory of : ");
							System.out.println("Candy --- 1");
							System.out.println("Cookie --- 2");
							System.out.println("IceCream --- 3");
							System.out.println("Get Inventory --- 4");
							System.out.println("Go Back --- 5");
							System.out.println("------------------");
							
							choice = scr.nextInt();

							switch(choice){


								case 1 : System.out.println("How many Candies ?");
										 quantity = scr.nextInt();
										 shop.addCandy(quantity);
										 System.out.println("Updated Quanity of Candy :"+shop.viewCandyInventory());
										 break;

								case 2 : System.out.println("How many Cookies ?");
										 quantity = scr.nextInt();
										 shop.addCookie(quantity);
										 System.out.println("Updated Quanity of Cookie :"+shop.viewCookieInventory());
										 break;

								case 3 : System.out.println("How many Ice Creams ?");
										 quantity = scr.nextInt();
										 shop.addIceCream(quantity);
										 System.out.println("Updated Quanity of Ice Creams :"+shop.viewIceCreamInventory());
										 break;

								case 4 : System.out.println("------------------");
										 System.out.println("Inventory");
										 System.out.println("Candies : "+shop.viewCandyInventory());
										 System.out.println("Cookies : "+shop.viewCookieInventory());
										 System.out.println("IceCream : "+shop.viewIceCreamInventory());
										 System.out.println("------------------");
										 break;

								case 5 : break outer;
							}
					}
				}


				if(choice == 2){

						outer1: while(true){
							System.out.println("------------------");
							System.out.println("Do you want...");
							System.out.println("Candy --- 1");
							System.out.println("Cookie --- 2");
							System.out.println("IceCream --- 3");
							System.out.println("Go Back--- 4");
							System.out.println("------------------");
							choice = scr.nextInt();

							switch(choice){


								case 1 : System.out.println("How many Candies ?");
										 quantity = scr.nextInt();
										 if(quantity > shop.viewCandyInventory()){
 
										 		System.out.println("Excess than Inventory");
										 		break;
										 }

										 shop.getCandy(quantity);
										 System.out.println("Total Cost :"+candy.getCost() * quantity/60 +" Rupees");
										 break;

								case 2 : System.out.println("How many Cookies ?");
										 quantity = scr.nextInt();
										 if(quantity > shop.viewCookieInventory()){

										 		System.out.println("Excess than Inventory");
										 		break;
										 }

										 shop.getCookie(quantity);
										 System.out.println("Total Cost :"+cookie.getCost() * quantity / 70+" Euros");
										 break;

								case 3 : System.out.println("How many Ice Creams ?");
										 quantity = scr.nextInt();
										 if(quantity > shop.viewIceCreamInventory()){
										 	
										 		System.out.println("Excess than Inventory");
										 		break;
										 }

										shop.getIceCream(quantity);
										 System.out.println("Total Cost :"+iceCream.getCost() * quantity+" Rupees");
										 break;

								case 4 : break outer1;
							}
						}


				}	

				if(choice == 3){System.exit(1);}	
		}

	}
}