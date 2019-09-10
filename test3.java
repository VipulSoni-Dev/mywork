// import java.util.*;

// import com.sun.org.apache.bcel.internal.generic.INSTANCEOF;

class test3 
{
       
                   

public static void main(String s[])
{
    int cnt=0;
    for(int l=2;l<=10000;l++)
    {
      //  System.out.println(input[0]+","+input[1]);
          if(l==2||l==3||l==5||l==7||(l%2!=0&&l%3!=0&&l%5!=0&&l%7!=0&&l%11!=0&&l%13!=0&&l%17!=0&&l%19!=0))
          {
            // System.out.print(l+",");  
            cnt++;                 
              
          }
          
     } 
System.out.print(cnt);
}



}