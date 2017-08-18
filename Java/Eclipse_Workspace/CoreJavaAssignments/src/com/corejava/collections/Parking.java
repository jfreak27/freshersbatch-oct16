package com.corejava.collections;
import java.util.*;

class ParkingLocation{
	
	int floor;
	int section;
	int location;
	
	Parked_CarOwner_Details parkedCar;
	boolean occupied = false;
	
}
class Parked_CarOwner_Details{
	
	
	String ownerName;
	String carModel;
	String carNo;
	int ownerMobileNo;
	String ownerAddress;
	
	public Parked_CarOwner_Details(String owner, String car, String carNo, int mobile, String addr) {
		
		ownerName = owner;
		carModel = car;
		this.carNo = carNo;
		ownerMobileNo = mobile;
		ownerAddress = addr;
	}
	
	public String getOwnerName() {
		return ownerName;
	}
	
	public String getCarModel() {
		return carModel;
	}
	
	public String getCarNo() {
		return carNo;
	}
	
	public int getOwnerMobileNo() {
		return ownerMobileNo;
	}
	
	public String getOwnerAddress() {
		return ownerAddress;
	}
	
}


class Parked_CarOwnerList{
	
	

	

}




public class Parking {

}
