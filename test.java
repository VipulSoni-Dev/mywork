import java.util.*;

// import com.sun.org.apache.bcel.internal.generic.INSTANCEOF;

class test 
{
        int input[]= new int[2]; 
        int prime[];
        int limit=0;

        void getInput()
        {
            // Scanner sc= new Scanner(System.in);
            String tmp = sc.nextLine();
            String t[];
            
            t = tmp.split(" ");
            
               input[0]= Integer.parseInt(t[0]);
               input[1] = Integer.parseInt(t[1]);
            //  System.out.print(input[0]=Integer.parseInt(t[0]));
        }
        void setprime(int prime[])
        {
            this.prime = prime;
        }
     void getPrime()
        {
          int i=0;
           
          this.prime = new  int[input[1]];
          for(int l=input[0];l<=input[1];l++)
          {
            //  System.out.println(input[0]+","+input[1]);
                if(l==2||l==3||l==5||l==7||(l%2!=0&&l%3!=0&&l%5!=0&&l%7!=0))
                {
                    
                    this.prime[i] = l;
                    i++;
                    
                }
                
           }          
this.limit= i;
        }
        void findsexypair()
        {
            int i = 0;
            int counter = 0;
            while(i!=limit)
            {
                   if((prime[i]+6)==(prime[i+1])||(prime[i]+6)==(prime[i+2]))
                   {
                       counter++;
                   } 
            i++;
            }
            System.out.print(counter);
        }

public static void main(String s[])
{
        test tt= new test();
        tt.getInput();
        tt.getPrime();
        tt.findsexypair();

}



}