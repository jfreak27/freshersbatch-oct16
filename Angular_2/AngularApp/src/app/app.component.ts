import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1><advert-form (AdvertAddEvent)="advertisements=$event"></advert-form> <advert-table [advertList] = "advertisements"></advert-table></h1>`,
})
export class AppComponent  { name = 'Angular'; 

public advertisements : Array<any>;
}
