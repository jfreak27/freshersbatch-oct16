import { Component } from '@angular/core'; 
import { AdvertisementService } from '../../services/Advertisement.service';
import { Router } from '@angular/router';
@Component({


    selector : 'advert-table',
    templateUrl : "./AdvertisementTable-html.html",
    
    

})

export class AdvertisementTableClass  { 

   title= "Advertisement Table";

   public advertList : Array<any>;

   constructor(private adService:AdvertisementService, private router:Router){

        this.advertList = adService.getAllAds();
        console.log(this.advertList);
   }
    
   deleteAd(id:number){

        this.adService.deleteAd(id);

   }

   getAd(id:number){

    this.adService.getAd(1);

   }

   editAd(id:number){

      this.router.navigate(['/edit', id]);


   }
        
}

   

 