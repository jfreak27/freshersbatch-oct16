import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { AdService } from '../../services/AdService/ad.service'
import { UserService } from '../../services/UserService/user.service'

@Component({
  selector: 'postAd',
  templateUrl: `./postAd-html.html`,
 
})
export class PostAdComponentClass implements OnInit  {

  public status:boolean = false;
  public categories:any= [];

  generateCategories(response:any){
   
    for(let x of response.data.itemList){
          this.categories.push(x.name);
    }
        
  }

  

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private adservice : AdService, private userservice: UserService){

      this.adservice.getCategories().subscribe((response)=>{this.generateCategories(response)});



  }
  
  createAd(title:string, category:string, description:string){

    let auth_token = this.userservice.getAuthToken();
    
    let uname = this.userservice.getUserName();
    
   
    
    this.adservice.postNewAd(auth_token, title,category,description,uname).subscribe((response)=> {console.log(response)});
    
    this.status = true;

    setTimeout((router: Router) => {
        this.router.navigate(['']);
    }, 2000);

    

      
  }
  


  
  ngOnInit(){}
 
    
  
 }
