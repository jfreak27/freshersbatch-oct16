import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdService } from '../../services/AdService/ad.service';
import { UserService } from '../../services/UserService/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'editAd',
  templateUrl: `./editAd-html.html`,
})
export class EditAdComponentClass implements OnInit {
public postid:any;
public status:boolean = false;
 public categories:any= [];

 public ad:any=[];

  generateCategories(response:any){
   
    for(let x of response.data.itemList){
          this.categories.push(x.name);
    }
        
  }
    constructor(private router: Router, private activatedRoute : ActivatedRoute, private adservice:AdService, private userservice:UserService){

        this.adservice.getCategories().subscribe((response)=>{this.generateCategories(response)});

          this.postid = this.activatedRoute.snapshot.params['id'];
          this.adservice.getAdById(this.postid).subscribe((response)=>{
                                                this.ad = response.data.mypost ;
                                               
                                               });

    }
   editAd(title:any, category:any, description:any){

    let auth_token = this.userservice.getAuthToken();
    let uname = this.userservice.getUserName();
    
  
    
   
    
    this.adservice.editAd(this.ad.id,title, uname ,category,description,auth_token).subscribe((response)=> {console.log(response)});
    
    this.status = true;

    setTimeout((router: Router) => {
        this.router.navigate(['']);
    }, 2000);

    
   }
  ngOnInit(){



  }
 }
