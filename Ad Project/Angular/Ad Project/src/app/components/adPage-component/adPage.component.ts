import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AdService } from '../../services/AdService/ad.service';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'adPage',
  templateUrl: `./adPage-html.html`,
})
export class AdPageComponentClass implements OnInit {

  public postid:any;

  public ad:any = {};
  constructor(private activatedRoute: ActivatedRoute, private adservice : AdService, private userservice:UserService){}
  
  
  ngOnInit(){

         this.postid = this.activatedRoute.snapshot.params['id'];
         this.adservice.getAdById(this.postid).subscribe((response)=>{
                                                this.ad = response.data.mypost ;
                                                this.ad.createdDate = new Date(this.ad.createdDate).toLocaleDateString('en-GB');
                                               });
 

  }


  sendMessage(id:any, msg:any){

      let auth_token = this.userservice.getAuthToken();

      if(auth_token==null || auth_token==undefined){alert("Please login to message poster")}
      console.log(id);
      console.log(msg);
      this.adservice.sendMessage(id, msg, auth_token).subscribe((response)=>{console.log(response)});


  }
 }
