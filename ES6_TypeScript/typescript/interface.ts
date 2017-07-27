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


function printall():void{

    let c = new Circle();
    let e = new Employee();

    c.print();
    e.print();


}

printall();