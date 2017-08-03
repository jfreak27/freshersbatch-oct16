import { Component } from '@angular/core';
import { AdService } from '../../services/AdService/ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'adGrid',
  templateUrl: `./adGrid-html.html`,
})
export class AdGridComponentClass  {

    public filteredAds:any = [];
    public cat:any = null;
    public allAds:any = [];
    
    constructor(private adservice:AdService, private router:Router){

        
        this.adservice.getAllAds().subscribe((response)=> this.storeAds(response));
   

       
    }


    ngDoCheck(){

            this.cat = this.adservice.getCategory();
            if(this.cat != undefined) {
                this.filteredads(this.cat);
            }
            if(this.cat == undefined){
                this.filteredads(null);
            }

    }

    filteredads(text:any){

      console.log("InAdGrid", text);
      this.filteredAds = [];
      for(let x of this.allAds){

            if(text == null){
                this.filteredAds.push(x);
            }
            else{
                if(text == x.category){
                    this.filteredAds.push(x);
                }
            }
            
        }
    }
       

    


    goToAd(id:number){

           this.router.navigate(['/adPage',id]);


    }

    
    storeAds(response:any){

        //this.filteredAds = [];
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
