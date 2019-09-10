import java.util.*;



public class test6 {

    int a[][] =new int[3][3];


        void setArr(String r1[],String r2[],String r3[])
        {
            
            a[0][0] = Integer.parseInt(r1[0]);
            a[0][1] = Integer.parseInt(r1[1]);
            a[0][2] = Integer.parseInt(r1[2]);
            a[1][0] = Integer.parseInt(r2[0]);
            a[1][1] = Integer.parseInt(r2[1]);
            a[1][2] = Integer.parseInt(r2[2]);
            a[2][0] = Integer.parseInt(r3[0]);
            a[2][1] = Integer.parseInt(r3[1]);
            a[2][2] = Integer.parseInt(r3[2]);

        }


  boolean checkRow(int i)
  {
        if(a[i][0]==1 || a[i][1]==1 || a[i][2]==1)
        {
            return true;
        }
        else
        return false;
  }


  boolean checkColumn(int j)
  {
        if(a[0][j]==1 || a[1][j]==1 || a[2][j]==1)
        {
            return true;
        }
        else
        return false;
  }


    public static void main(String s[])
    {

        Scanner sc = new Scanner(System.in);


        String r1[]=sc.nextLine().split(" ");
        String r2[]=sc.nextLine().split(" ");
        String r3[]=sc.nextLine().split(" ");

        // int a[][] = new Array[2][2];
        test6 t =new test6();

        t.setArr(r1,r2,r3);        

        // r1=null;r2=null;r3=null;

        for(int i=0;i<3;i++)
        {

            for(int j=0;j<3;j++)
            {
                if((t.checkRow(i) || t.checkColumn(j)))
                System.out.print("1 ");
                else
                System.out.print("0 ");
            }
            System.out.println();
        }
        



    }

}