package Exxception.related;

public class TaxCalculator {
	public double calculateTax(String empName,boolean isIndian,double empSal)throws Exception
	{
		double taxAmount = 0;
		if(isIndian!= true )
		{
			throw new CountryNotValidException("the employee should be an Indian citizen for calculating tax");
		}
		if(empName==" ")
		{
			throw new EmployeeNameInvalidException("the elployee name cannot be empty");
		}/*if(isIndian!= true )
		{
			throw new CountryNotValidException("the employee should be an Indian citizen for calculating tax");
		}*/
		else
		{
			if(empSal>100000)
			{
				taxAmount=empSal*8/100;
			}
			else if(empSal>50000 && empSal<100000)
			{
				taxAmount=empSal*6/100;
			}
			else if(empSal>30000 && empSal<50000)
			{
				taxAmount=empSal*5/100;
			}
			else if(empSal>10000 && empSal<30000)
			{
				taxAmount=empSal*4/100;
			}
			else
			{
				throw new TaxNotEligibleException("the employee does not need to pay tax");
			}
		}
		return taxAmount;
	}
	

}
