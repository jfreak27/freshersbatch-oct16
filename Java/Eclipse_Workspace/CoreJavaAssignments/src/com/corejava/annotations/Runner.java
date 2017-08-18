package com.corejava.annotations;
import java.lang.reflect.*;


public class Runner {

	public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, NoSuchFieldException, SecurityException {
		
		Test t = new Test();
		Class c = t.getClass();
		
		Method methods[] = c.getMethods();
		
		Field field = null;
		for(Method method : methods) {
			
			Getter anno = method.getAnnotation(Getter.class);
			if(anno != null)		
			{	
				StringBuilder methodNameBuilder = new StringBuilder(method.getName());
				
				if(method.getName().toString().startsWith("get")==false)
				{
					System.out.println("Method "+method.getName()+" is incorrect getter!");
					
				}
				System.out.println("Method : "+methodNameBuilder);
				for(int i=0;i<3;i++)
					methodNameBuilder.deleteCharAt(0);
				
				
				String memberName = methodNameBuilder.toString().toLowerCase();
				System.out.println("Getting Member : "+memberName);
				
				
				try {
					field = c.getField(memberName);
					if(method.getReturnType() != field.getType())
						throw new NoSuchFieldException();
					else
						System.out.println("Member Found!");
					
				}
				catch(NoSuchFieldException n) {
					System.out.println("No "+memberName+" field found for function "+method.getName());
				}
				
				
				
			
				
			
				
			}
			
		}

	}

}
