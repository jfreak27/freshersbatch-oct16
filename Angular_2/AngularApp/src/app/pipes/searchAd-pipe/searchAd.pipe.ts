import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'searchAd'})


export class SearchAdPipe implements PipeTransform{

            transform(value: any[], ...args:any[]): any {

                    let arr :Array<any> = [];
                    
                    
                    if(args[0]== ''){
                        return value;
                    }


                    for(let x of value){
                    {
                            if(!(x==undefined || args[0]==null )){

                            if(x.title.includes(args[0]) || (x.name.includes(args[0]))){
                                arr.push(x);
                            }
                            }


                    }

                   
                    }
                 return arr;
                   
                    

            

        }
}