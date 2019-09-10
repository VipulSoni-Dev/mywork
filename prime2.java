public class prime2
{
	    public static boolean isPrime(int number) {
        int sqrt = (int) Math.sqrt(number) + 1;
        for (int i = 2; i < sqrt; i++) {
            if (number % i == 0) {
                // number is perfectly divisible - no prime
                return false;
            }
        }
        return true;
		}
		
		public static void main(String s[])
		{
		int count=0;
			for(int i =2;i<10000000;i++)
			{
				if(isPrime(i))
				{
			//	System.out.println(i);
					count++;
				}
			}
			System.out.print(count);
		}
		

}