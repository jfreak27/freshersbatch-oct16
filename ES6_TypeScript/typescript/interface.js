var Circle = (function () {
    function Circle() {
        this.rad = 10;
    }
    Circle.prototype.print = function () { console.log("This is a Circle with radius " + this.rad); };
    return Circle;
}());
var Employee = (function () {
    function Employee() {
        this.name = "Aditya";
    }
    Employee.prototype.print = function () { console.log("This is a Employee of name " + this.name); };
    return Employee;
}());
function printall(c, e) {
    c.print();
    e.print();
}
var c = new Circle();
var e = new Employee();
printall(c, e);
