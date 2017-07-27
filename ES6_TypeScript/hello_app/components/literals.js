export function testLiteral(){


let LaptopObj = {

    model : 'lenovo',
    deskno : 5,
    name : 'aditya',

    sendTicket() {

    console.log(`${this.name} has ${this.model} laptop. He seats at desk no ${this.deskno}`);


}
};





LaptopObj.sendTicket();



}