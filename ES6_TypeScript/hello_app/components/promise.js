export function testPromise(){


var p1 = new Promise(function (resolve, reject){resolve(6)});
var p2 = new Promise(function (resolve, reject){resolve(4)});


Promise.all([p1,p2]).then(function (promises){

// var sum = promises[0] + promises[1];
// console.log(sum);

var sum = 0;
    promises.forEach(function (x){

        sum = sum +x;

    })
    console.log(sum);
    
});



}