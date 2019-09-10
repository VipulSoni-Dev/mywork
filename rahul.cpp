#include <stdio.h>


int main()
{
		int a[]={1,10,3,4,5};
		int i=0;
	    int flag =0;
	

		for(i=0;i<5;i++)
		{
			if(a[i]==9)
			{
				flag = 1;
				break;
				
			}			
	
		}
		
		if(flag == 1)
		{
			printf("%d",a[i]);
			
		}
		else{
			printf("element not found");
			
		}
		
		
		
		
		
	return 0;
}
