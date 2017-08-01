import { Component, OnInit } from '@angular/core'; 
import { AdvertisementService } from '../../services/Advertisement.service';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({


    selector : 'edit',
    templateUrl : "./EditAd-html.html",
    })

export class EditAdClass implements OnInit { 

    constructor(private adService:AdvertisementService, private activatedRoute : ActivatedRoute, private router : Router){}
    
     advertisement:any = {};
     title:any;
     name:any;
     description:any;
     category:any;
     id:number;
    categories = [{id: 1, name : "Hardware"},
                {id: 2, name : "Furniture"},
                {id: 3, name : "Mobile"}];

        
            ngOnInit() {
                this.id = this.activatedRoute.snapshot.params['id'];
                
                this.advertisement = this.adService.getAd(this.id);

                console.log(this.advertisement);
                this.title = this.advertisement.title; 
                this.name = this.advertisement.name;
                this.category = this.advertisement.category;
                this.description= this.advertisement.desc;

                

        }

        update(title : string, name :string, category:string, desc:string){

            this.adService.deleteAd(this.id);

            this.adService.setAd({id : this.id,title:title, name:name, category:category,desc :desc});

            this.router.navigate(['']);

        }



}


   

 