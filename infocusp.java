import java.util.*;


class infocusp 
{
	

		static int countOpDec(int n,int k)
		{
		
			int N=0,K=0;
			N=n<k?n:k;
			K=n>k?n:k;
			
			if(n==k)
			{
				return 0;
			}
			if(K%N!=0&&n>0)
			
			    return (1+countOpDec(--n,k));
			 else	 
				return 0;
		}		

		static int countOpInc(int n,int k)
		{
		
		   
		   int N=0,K=0;
		   N=n<k?n:k;
		   K=n>k?n:k;	
		   if(n==k)
			{
				return 0;
			}
			if(K%N!=0&&n<106)
			
			    return (1+countOpInc(++n,k));
			 else	 
				return 0;
		}
	

		
		
		public static void main(String s[])
		{
			Scanner sc = new Scanner(System.in);
			int testcases =  Integer.parseInt(sc.nextLine());
			
			for(int i=0;i<testcases;i++)
			{
				String ar[] = sc.nextLine().split(" ");
				 
				int k = Integer.parseInt(ar[0]);
				int n = Integer.parseInt(ar[1]);
				int arr[] = new int[n];
				String temp[] = sc.nextLine().split(" ");	
				for(int l=0;l<n;l++)
				{
					arr[l] = Integer.parseInt(temp[l]);
				}
				
				//System.out.print(arr[0]+","+arr[1]+","+arr[2]);
				int numberOfOp = 0;
				for(int j=0;j<n;j++)
				{
					int dec=countOpDec(arr[j],k);				
					int inc=countOpInc(arr[j],k);
										
					numberOfOp += (dec<inc?dec:inc);	
				}
				System.out.print(numberOfOp);
			}	
			
		}

}