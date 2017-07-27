export function testArrow(){

        let names = ['Adi','Rajo','Navi'];

        let result = [];

        names.forEach(i => {

               
            let nameObj = {name : i, length : i.length};

            result.push(nameObj);


        });


        console.log(...result);


}