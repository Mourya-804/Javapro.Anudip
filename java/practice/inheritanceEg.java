// parent class
class Animal {
	
	//parent property
	String name ;
	String color;
	String food;
	String natureOfLiving;
	int noOfLegs;
	
}
//first child class
class Carnivorous extends Animal{
	//child property 
	String strength;
	String Hunting; 
	
	void display(){
		System.out.println(name + " " + color + " "+ food +" "+ natureOfLiving +" "+ noOfLegs); //parent property
		System.out.println(strength + " "+ Hunting); //child property
	}
	
}
//second child class
class Herbivores extends Animal {
	//child property
	String grazing;
	String hunt;
	
	
	void display(){
		System.out.println(name + " " + color + " "+ food +" "+ natureOfLiving +" "+ noOfLegs); //parent property
		System.out.println(grazing + " "+ hunt); //child property
	}
}

// main class
class inhertianceEg{

	//entry point
	public static void main(String args[]){
		Carnivorous c = new Carnivorous();
                c.name="Lion";
                c.color="yello-gold";
                c.food="birds,wild dogs";
                c.natureOfLiving="carniourous";
                c.noOfLegs=4;
                c.strength="can change direction quickly";
                c.Hunting="yes";
                c.display();
		Herbivores h = new Herbivores();
                h.name="rabbit";
                h.color="white";
                h.food="grass,carrots";
                h.natureOfLiving="Herbivorous";
                h.noOfLegs=4;
                h.grazing="yes";
                h.hunt="No";
                h.display();
	}
}