class new2
{
		boolean primecheck(int num)
		{
			if (num < 0) {
				return false;
			}
			if (num == 0 || num == 1) {
				return false;
			}
			if (num == 2 || num == 3) {
				return true;
			} 
			if((num * num - 1) % 24 == 0) {
					return true;
				} else {
					return false;
				}
		
		}
		
		
		public static void main(String s[])
		{
		new2 temp =new new2();
			// int num = 10000;
			int count = 0;
			
			for(int i=0;i<100;i++)
			{
			
				if(temp.primecheck(i))
				{
					System.out.println(i);
					count++;
				}
				
			}
			
			System.out.print(count);
			
		}
}