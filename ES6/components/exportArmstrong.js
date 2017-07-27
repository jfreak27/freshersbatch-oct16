

var counter = 10;
class Armstrong {


    [Symbol.iterator](){
           
                return {
                    getNextArmstrong() {
                        let i=counter;
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
                                            return {value : i, done : false};
                                        }
                                        
                                    i++;

                                }

                    }
                }

    }



}




export function exportArmstrong(){

    let arm = new Armstrong();
    let itr= arm[Symbol.iterator]();

    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    console.log(itr.getNextArmstrong());
    

    
}