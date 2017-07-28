import { Component, EventEmitter } from '@angular/core'; 


@Component({


    selector : 'advert-form',
    templateUrl : "./AdvertisementForm-html.html",
    outputs : ["AdvertAddEvent"]


})

export class AdvertisementFormClass  { 

    title = "Advertisement Form";

    categories = [{id: 1, name : "Hardware"},
                {id: 2, name : "Furniture"},
                {id: 3, name : "Mobile"}];
    name = "Aditya Khare";

    advertisements : Array<any> = [];
    
    public display:boolean = false;

    public AdvertAddEvent = new EventEmitter<any>();
    public id : number = 1;
    submit(title : string, name :string, category:string, desc:string){

        this.advertisements.push({id : this.id,title:title, name:name, category:category,desc :desc});
        console.log(this.advertisements);
        this.id = this.id +1;
        this.AdvertAddEvent.emit(this.advertisements);


        
        
    }

   

 }