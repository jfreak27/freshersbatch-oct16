import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AdvertisementFormClass }  from './components/AdvertisementFormComponent/AdvertisementForm.component';
import { AdvertisementTableClass }  from './components/AdvertisementTableComponent/AdvertisementTable.component';
import { SearchAdPipe } from './pipes/searchAd-pipe/searchAd.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AdvertisementFormClass, AdvertisementTableClass, SearchAdPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
