import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service'
import { Router } from '@angular/router';
import { AdService } from '../../services/AdService/ad.service';
import { AdGridComponentClass }  from '../adGrid-component/adGrid.component';

@Component({
  selector: 'navigation-bar',
  templateUrl: `./navigation-html.html`
  
})
export class NavBarComponentClass  {

  public token:any = null;
  public categories:any= [];

  generateCategories(response:any){
   
    for(let x of response.data.itemList){
          this.categories.push(x.name);
    }
       
  }




  constructor(private router:Router, private userservice:UserService, private adservice : AdService){

    this.adservice.getCategories().subscribe((response)=>{this.generateCategories(response)});
  }
  
  
  goToPostAd(){

      if(this.token!=null)
          this.router.navigate(['/postAd']);
      
      if(this.token==null){
        console.log("123");
           document.getElementById('loginButton').click();
           alert("Please login to post ad");
      }
          

  }

  ngDoCheck(){

        this.token = this.userservice.getAuthToken();

  }

   logout(){

     this.userservice.LogOutUser(this.token);
     this.userservice.setAuthToken(null);
     
    

   }

   goToMyAccount(){

   // let userid = this.userservice.getUserName();
    this.router.navigate(['/myAccount']);

   }
    
   filteredAds(cat:any){
    console.log("in navbar",cat);
      this.adservice.setCategory(cat);
    
  }


  
 }
