import java.lang.reflect.*;

class Middleware{



	public void invokeMethod(String className, String methodName, String fieldName) throws NoSuchFieldException, ClassNotFoundException, InstantiationException, NoSuchMethodException, IllegalAccessException, InvocationTargetException{
		
		
		Class c = Class.forName(className);

		Object cObj = c.newInstance();

		Method method = c.getDeclaredMethod(methodName);
		method.setAccessible(true);
		method.invoke(cObj);


		Field field = c.getDeclaredField(fieldName);
		field.setAccessible(true);
		System.out.println("private x in "+className+" : "+field.get(c.newInstance()));
		
			
			
		}
}


class MiddlewareTestPrivate{


	public static void main(String[] args) throws NoSuchFieldException, ClassNotFoundException, InstantiationException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
		Middleware mw = new Middleware();

	


		
		mw.invokeMethod(args[0],args[1],args[2]);


	}
}