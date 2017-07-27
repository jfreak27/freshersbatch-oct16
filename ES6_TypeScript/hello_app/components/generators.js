

var counter = 10;
class Armstrong {


    [Symbol.iterator](){
           
                return {
                    getNextArmstrong(x) {
                        let i=counter;
                        if(x==1){i = 10;}
                       
                            
                            while(true)
                                {
                                        
                                        let number = i;

                                        let noOfDigits = number.toString().length;
                                       
                                        var res=0;
                                        var rem;

                                        while(number != 0){
                                                 rem =Math.floor(number % 10);
                                                 res = res + Math.pow(rem,noOfDigits);
                                                 number = Math.floor(number/10);
                                                        
                                         }
                                           
                                        if(res == i){
                                            counter = i+1;
                                            
                                            try{
                                                    
                                                    if(i>1000)
                                                        throw msg; 
                                            }
                                            
                                            catch(msg){console.log(); 
                                                return {value : "Range went over 1000", done : false};
                                                }

                                            return {value : i, done : false};

                                        }
                                        
                                    i++;

                                }

                    }
                }

    }



}




export function testGenerators(){

    let arm = new Armstrong();
    let itr= arm[Symbol.iterator]();

    function *getNext(x){

        for( ; ; ){
          let x = yield itr.getNextArmstrong(x);
        }
    }
    
    let getNextArm = getNext();
    console.log(getNextArm.next().value.value);
    console.log(getNextArm.next().value.value);
    console.log(getNextArm.next().value.value);
    console.log(getNextArm.next().value.value);            //Resets the series
    console.log(getNextArm.next().value.value);
    console.log(getNextArm.next().value.value);
    
}