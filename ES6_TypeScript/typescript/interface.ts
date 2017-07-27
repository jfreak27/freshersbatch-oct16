interface Printable{

print() : void;


}



class Circle implements Printable{

    rad:number = 10;

    print() : void {console.log(`This is a Circle with radius ${this.rad}`);}

}

class Employee implements Printable{

    name:string = "Aditya";

    print() : void {console.log(`This is a Employee of name ${this.name}`);}

}


function printall(c:Circle, e:Employee):void{

    
    c.print();
    e.print();


}
let c:Circle = new Circle();
let e:Employee = new Employee();

printall(c,e);