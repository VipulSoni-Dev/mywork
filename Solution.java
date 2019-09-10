class Solution {
    
	public int countCharacters(String[] words, String chars) {
        
       
     for(int k=0;k<words.length;k++){                                      //(String sss : words){ 
      	int count=0;
        
	for(int i=0;i<words[k].length;i++)
        {
           boolean flag=false;
            for(int j =0;j<chars.length;j++)
            {
                if(words[k].charAt[i]==chars[j])flag=true;
            }
           if(flag)count++;
           
       }
      if(count==words[k].length)result +=result;
      }
        
     return result;   
    }
	
	public static void main (String as[])
	{
		Solution tmp = new Solution();
		String[] s= {"cat","bt","man","hole"};
		String s2 = "atach";
		System.out.println(tmp.countCharacters(s,s2));
	}
	
	
}