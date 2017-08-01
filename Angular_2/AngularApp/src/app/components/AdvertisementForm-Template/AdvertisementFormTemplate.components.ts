import { Component, EventEmitter } from '@angular/core'; 
import { AdvertisementService } from '../../services/Advertisement.service';


@Component({


    selector : 'advert-form',
    templateUrl : "./AdvertisementFormTemplate-html.html",
    


})

export class AdvertisementFormTemplateClass  { 

    title = "Advertisement Form";

    categories = [{id: 1, name : "Hardware"},
                {id: 2, name : "Furniture"},
                {id: 3, name : "Mobile"}];
    name = "Aditya Khare";

    advertisements : Array<any> = [];
    
    public display:boolean = false;

    
    public id : number = 1;
    submit(title : string, name :string, category:string, desc:string){

        

        this.adService.setAd({id : this.id,title:title, name:name, category:category,desc :desc});

        this.id = this.id + 1;
       }

    constructor(private adService : AdvertisementService){


    }

   

 }