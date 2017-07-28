import { Component } from '@angular/core'; 

@Component({


    selector : 'advert-table',
    templateUrl : "./AdvertisementTable-html.html",
    inputs : ['advertList'],
    

})

export class AdvertisementTableClass  { 

   title= "Advertisement Table";

   public advertList : Array<any>;

    
   deleteAd(id:number){

        for(let ad of this.advertList){

            if(id === ad.id){
                let index = this.advertList.indexOf(ad);

                this.advertList.splice(index,1);
            }
        }

   }
        
}

   

 