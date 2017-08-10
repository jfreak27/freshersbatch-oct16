abstract class Persistence{


		abstract void persist();


}



class FilePersistence extends Persistence{


	public void persist(){
		System.out.println("File Persistence");
	}

}



class DatabasePersistence extends Persistence{


	public void persist(){
		System.out.println("Database Persistence");
	}

}



class PersistenceFactory{


	public static Persistence getPersistence(){

		return new DatabasePersistence();
	}
}



class PersistenceTest{


	public static void main(String[] args) {
		
		
		Persistence p = PersistenceFactory.getPersistence();

		p.persist();
	}

}