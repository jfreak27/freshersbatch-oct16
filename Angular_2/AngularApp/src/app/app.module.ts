import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AdvertisementFormClass }  from './components/AdvertisementFormComponent/AdvertisementForm.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AdvertisementFormClass ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
