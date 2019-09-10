import java.util.*;





public class prime
{
static ArrayList<Integer> list =new ArrayList<Integer>();

static boolean primeCheck(int i)
{	
	if(i==2||i==3||i==5||i==7||(i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0))		
	{
		if(checklist(i))
		{
			list.add(i);
			return true;
		}
		else{
		
			return false;
		}
	}
	return false;
}

static boolean checklist(int i)
{
	if(list.size()==0)
	{
		return true;
	}
	
Iterator<Integer> ai= list.iterator();
while(ai.hasNext())
{
int  tmp = ai.next();
	if(tmp>(int)Math.sqrt(i)) break;
	if(i%tmp==0)
	{
		return false;
	}

}

return true;	
}

	public static void main(String s[])
	{
			int count =0;
		for(int i=2;i<10000000;i++)
		{
			if(primeCheck(i)) {
			count++;}
		}		
	System.out.println(count);
	}
	
} 