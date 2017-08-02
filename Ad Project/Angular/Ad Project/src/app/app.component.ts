import { Component } from '@angular/core';
import { AdService } from './services/AdService/ad.service'
import { UserService } from './services/UserService/user.service'
@Component({
  selector: 'my-app',
  template: `<navigation-bar></navigation-bar> <router-outlet></router-outlet> <myfooter></myfooter>`,
   providers : [AdService, UserService]
})
export class AppComponent  {


  
 }
