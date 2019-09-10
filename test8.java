public class test8 
{
	
	static int count; 
	static{
		count=0;	
	}
	
	public static void main (String s[])
	{
		int counter = 0;
		for(int i=1;i<10000;i++)
		{   
 			int k=0;
			for(int j=1;j<i;j++)
			{
			     if(i%j==0)k+=j;
			}	
			if(k==i)
			{
				count++;
				System.out.println(k);
			}
		}	
 		System.out.println(count);
	}
}