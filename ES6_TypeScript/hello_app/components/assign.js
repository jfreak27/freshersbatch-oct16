export function testAssign(){

let orderObj = {

        id : 1,
        title : "Washing Machine",
        price : 1000,

        printOrder()  {console.log(this)},

        getPrice() { console.log(this.price) },



        }

        orderObj.printOrder();
        orderObj.getPrice();

        let orderObjCopy = {};
        Object.assign(orderObjCopy , orderObj);

        console.log("OrderObjCopy : ",orderObjCopy);



}



