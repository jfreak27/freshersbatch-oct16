import java.util.*;
class WrapperTest{


	public static void main(String[] args) {
		
		System.out.println("Input : ");
		for(int i=0 ; i<args.length ; i++)
			System.out.println(args[i]);

		Arrays.sort(args);

		System.out.println("After Sorting :");
		for(int i=0 ; i<args.length ; i++)
			System.out.println(args[i]);
	}
}