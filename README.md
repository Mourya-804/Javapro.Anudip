# Javapro.Anudip

import java.util.Scanner;

public class MethodEg {
	public void factorial(int num)
	{ int i=1;
	int fact=1;
		while(i<=num)
		{   
			 fact=fact*i;
			 
			
			 i++;
    }
	
		System.out.println("factorial"+"("+num+")"+"="+fact);
	}
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("enter number");
		int num=sc.nextInt();
		MethodEg m=new MethodEg();
  m.factorial(num);
  }
  }



  
