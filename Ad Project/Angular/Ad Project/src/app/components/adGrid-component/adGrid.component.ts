import { Component } from '@angular/core';
import { AdService } from '../../services/AdService/ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'adGrid',
  templateUrl: `./adGrid-html.html`,
})
export class AdGridComponentClass  {

    public allAds:any = [];
    constructor(private adservice:AdService, private router:Router){


        this.adservice.getAllAds().subscribe((response)=> this.storeAds(response));
        

       
    }
  
    goToAd(id:number){

           this.router.navigate(['/adPage', id]);


    }

    
    storeAds(response:any){

            for(let x of response.data.advertiseList){
                         this.allAds.push(x);
    }
                        console.log(this.allAds);
                        this.convertDate(this.allAds);
                        

    }

    convertDate(ads:any){

            for(let x of ads){

                x.createdDate = new Date(x.createdDate).toLocaleDateString('en-GB');
            }

    }
 }
