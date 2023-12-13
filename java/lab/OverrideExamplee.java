 class Animal//parent class or super class
{
	public void makeSound()//method implementation
	{
	 System.out.println("The Animal makes a sound");//printing the message
	}
}
 class Dog extends Animal//child class or sub class of class Animal
{
	public void makeSound()//overriding the method frpm superclass
	{
	 System.out.println("The Dog barks");//printing the message
	}
}
 class Cat extends Animal//child class or sub class of class Animal
{ public void makeSound()//overriding the method from superclass
	{
	{
	 System.out.println("The Cat meows");//printing the message
	}
	
}
 class OverrideExamplee
{
	public static void main(String args[])//main method
	{
        Animal a=new Animal();//object of super class
        a.makeSound();//calling the method of animal class
        Dog d=new Dog();//object of child class Dog
        d.makeSound();//calling the method of dog class
        Cat c=new Cat();//object of child class Cat
        c.makeSound();//calling the method of cat class
	}
}