export function testDestructuring(){


    let arr = ['one','two','three','four'];

    let [,,third,] = [...arr];

    console.log(third);


    let org = {

            name : 'Company',
            address : {

                    city : 'Pune',
                    zip : 445442,

            }


    }

    let {address :{ zip}} = org;

    console.log(zip);



}