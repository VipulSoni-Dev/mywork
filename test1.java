import java.util.Arrays; 
import java.util.Collections; 
  
class test1 
{  
    // Print the sexy prime in a range 
    public static void sexyprime(int l, int r)  
    { 
        // Sieve Of Eratosthenes for generating 
        // prime number. 
        boolean [] prime= new boolean[r + 1]; 
          
        // memset(prime, true, sizeof(prime)); 
        Arrays.fill(prime, true); 
          
  
        for (int p = 2; p * p <= r; p++) 
        { 
            // If prime[p] is not changed,  
            // then it is a prime 
            if (prime[p] == true)  
            { 
                // Update all multiples of p 
                for (int i = p * 2; i <= r; i += p) 
                    prime[i] = false; 
            } 
        } 
  
        // From L to R - 6, checking if i, 
        // i + 6 are prime or not. 
        int cnt1 =0;
        for (int i = l; i <= r - 6; i++)  
            if (prime[i] && prime[i + 6]) 
                cnt1++;  
        System.out.print(cnt1);
    } 
  
    // Driver program to test above methods  
    public static void main(String[] args) 
    { 
        int L = 2, R = 10000000; 
        sexyprime(L, R); 
    } 
} 
  
// This code is contributed by Chhavi  