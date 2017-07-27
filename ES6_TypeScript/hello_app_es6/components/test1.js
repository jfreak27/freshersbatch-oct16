export function test1(){




                function* fibonacci() {
                            let pre = 0;
                            let cur = 1;
                            for(;;){
                                 [pre, cur] = [cur, pre + cur];
                                 let reset = yield cur;
                                    if(reset) {
                                            pre = 0;
                                             cur = 1;
                                    }
                                }
                            }


let seq= fibonacci();
console.log(seq.next().value); //call multiple times
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);

}