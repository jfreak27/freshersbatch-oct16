import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';
import { AdService } from '../../services/AdService/ad.service';
import { Router } from '@angular/router';
@Component({
  selector: 'myAccount',
  templateUrl: `./myAccount-html.html`,
})
export class MyAccountComponentClass  {

  public uname:any;
  public auth_token:any;
  public userInfo:any = {id:null, firstName:null, lastName:null, userName:null, password:null, email:null, phone:null};
  public myads:any;

  constructor(private router : Router, private adservice:AdService, private activatedRoute: ActivatedRoute, private userservice : UserService){
      
    this.userservice.getUserInfo().subscribe((response:any) => {console.log(response); this.userInfo = response.data.user;} );

    this.auth_token = this.userservice.getAuthToken();
    console.log(this.auth_token);

    this.adservice.getAdsByUser(this.auth_token).subscribe((response:any)=>{this.myads = response.data.mypostList; console.log(this.myads)});
}
  
deleteAd(id:number){

  let auth_token = this.userservice.getAuthToken();
  this.adservice.deleteAd(id,auth_token).subscribe((response)=>{console.log(response)});
  alert("Ad Deleted Successfully");

}

editAd(id:number){

  
  
  this.router.navigate(['editAd',id]);

}


}
