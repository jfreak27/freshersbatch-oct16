import java.lang.reflect.*;

class Middleware{



	public void invokeMethod(String className) throws ClassNotFoundException, InstantiationException, NoSuchMethodException, IllegalAccessException, InvocationTargetException{
		
		

		    Class c = Class.forName(className);

            Constructor constructors[] = c.getDeclaredConstructors();
            Object obj = null;
            for (int i=0; i<constructors.length;i++) {
                Class[] params = constructors[i].getParameterTypes();
                if (params.length == 1 && params[0] == int.class) {
                    obj = constructors[i].newInstance(10);
                }
            }

		
			
			
}
}


class MiddlewareTestConstructor{


	public static void main(String[] args) throws ClassNotFoundException, InstantiationException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
		Middleware mw = new Middleware();

	


		//Class[] paramTypes= String.class;
		mw.invokeMethod(args[0]);


	}
}