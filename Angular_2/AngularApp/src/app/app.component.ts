import { Component } from '@angular/core';
import { AdvertisementService } from './services/Advertisement.service';
@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers :[AdvertisementService]

})
export class AppComponent  { 
  
name = 'Angular'; 
}

 