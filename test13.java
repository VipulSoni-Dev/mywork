class RotateArray { 
  
    void leftRotate(int arr[], int n) 
    { 
        int i, temp; 
        temp = arr[0]; 
        for (i = 0; i < n - 1; i++) 
            arr[i] = arr[i + 1]; 
        arr[i] = temp; 
    } 
  
    /* utility function to print an array */
    void printArray(int arr[], int n) 
    { 
        for (int i = 0; i < n; i++) 
            System.out.print(arr[i] + " "); 
    } 
  
    // Driver program to test above functions 
    public static void main(String[] args) 
    { 
        RotateArray rotate = new RotateArray(); 
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 }; 
        rotate.leftRotate(arr, 7);
		rotate.leftRotate(arr, 7);
		rotate.leftRotate(arr, 7);		
        rotate.printArray(arr, 7); 
    } 
} 	