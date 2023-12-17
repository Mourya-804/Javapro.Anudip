package Exxception.related;

public class CalculatorSimulator {
	public static void main(String args[]) throws Exception
	{
		TaxCalculator t=new TaxCalculator();
		double am=t.calculateTax( "Neha ",true,55000);
		System.out.println("the amount is"+"  "+am);
	}

}
