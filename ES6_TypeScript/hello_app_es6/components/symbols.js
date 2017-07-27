
    let a = Symbol();
    let b = Symbol();
    
    class Fibo{
            constructor(){

                    a=0;
                    b=1;
         }
        
                    next(){
                            [a,b] = [b,a+b];
                            return {value : a, done : false};

                    }
            

    
    }

   
    
    export function fibo(){

    let fibo = new Fibo();
    

    
   

    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
     console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    



}