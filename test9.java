import java.util.*;
public class test9 
{
	public static void main (String s[])
	{
		String s1= "arm";
		String s2= "mar";
		
		char c1[]= s1.toCharArray();
		char c2[]= s2.toCharArray();
		Arrays.sort(c1);
		Arrays.sort(c2);
		s1 = new String(c1);
		s2 = new String(c2);
		System.out.println(s2+s1);
	
	}
}