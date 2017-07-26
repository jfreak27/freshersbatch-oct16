export function testParameterHandling(){


        let add = (a=5,b=3) => a+b;

        function userFriends(userName, ...friends) {
                        console.log(`${userName} has friends ${friends}`);
        }

        function printCapitalnames(...names){

            names.forEach(function (i) {

                console.log(i.toUpperCase());
        })
        }


        console.log(add());
        let friends = ["adi","rajo","navi"];
       userFriends("Tom",friends);
       printCapitalnames(...friends);





}  