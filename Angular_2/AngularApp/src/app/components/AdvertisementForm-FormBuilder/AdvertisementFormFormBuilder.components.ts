import { Component, EventEmitter } from '@angular/core'; 
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({


    selector : 'advert-form',
    templateUrl : "./AdvertisementFormFormBuilder-html.html",
    outputs : ["AdvertAddEvent"]


})

export class AdvertisementFormFormBuilderClass  { 

    title = "Advertisement Form";

    categories = [{id: 1, name : "Hardware"},
                {id: 2, name : "Furniture"},
                {id: 3, name : "Mobile"}];
   


    adForm : FormGroup;
    
    constructor(private formBuilder : FormBuilder){

        this.adForm = this.formBuilder.group({
        title : new FormControl(null,[Validators.required, Validators.minLength(5)]),
        name : new FormControl(null,[Validators.required]),   
        description : new FormControl()




    });}
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