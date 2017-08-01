import { Injectable } from '@angular/core';

@Injectable()

export class AdvertisementService {

    advertiseList:Array<any> = [];




    
   

    

    setAd(advertisement:any){

            this.advertiseList.push(advertisement);

            console.log(this.advertiseList);

    }


    getAllAds(){

        return this.advertiseList;

    }

    deleteAd(id:number){

        for(let ad of this.advertiseList){

            if(id === ad.id){
                let index = this.advertiseList.indexOf(ad);

                this.advertiseList.splice(index,1);
            }
        }

    }

    getAd(id:number){


        for(let ad of this.advertiseList){
            
                    if(id == ad.id){
                        return ad;
                    }
                }
    }

}
