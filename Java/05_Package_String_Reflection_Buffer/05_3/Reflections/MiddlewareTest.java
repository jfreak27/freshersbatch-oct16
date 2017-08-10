import java.lang.reflect.*;

class Middleware{


	// public Class[] getParameterTypes(String className, String methodName){

	// 	Class c = Class.forName(className);
	// 	Object cObj = c.newInstance();
	// 	Method method = c.getDeclaredMethod(methodName);
	// 	return  method.getParamsTypes();
	// }


	public void invokeMethod(String className, String methodName, String arg1, String arg2 ) throws ClassNotFoundException, InstantiationException, NoSuchMethodException, IllegalAccessException, InvocationTargetException{
		Class c = Class.forName(className);

		Object cObj = c.newInstance();

		Method[] allMethods = c.getDeclaredMethods();
		Method method = null;

		for (Method m : allMethods) {
				if (!m.getName().equals(methodName)) {
				    continue;
				}
		

				method = m;
			}
			
			Class[] paramTypes = method.getParameterTypes();
			
			for(int i=0; i<paramTypes.length; i++)	
				System.out.println(paramTypes[i]);
			
			method.invoke(cObj,arg1,arg2);
		
	}

}


class MiddlewareTest{


	public static void main(String[] args) throws ClassNotFoundException, InstantiationException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
		Middleware mw = new Middleware();

	


		//Class[] paramTypes= String.class;
		mw.invokeMethod(args[0], args[1], args[2], args[3]);


	}
}