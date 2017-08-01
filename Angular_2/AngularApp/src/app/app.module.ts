import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
//import { AdvertisementFormClass }  from './components/AdvertisementFormComponent/AdvertisementForm.component';
import { AdvertisementTableClass }  from './components/AdvertisementTableComponent/AdvertisementTable.component';
import { SearchAdPipe } from './pipes/searchAd-pipe/searchAd.pipe';
import { AdvertisementFormTemplateClass }  from './components/AdvertisementForm-Template/AdvertisementFormTemplate.components';
//import { AdvertisementFormMDFClass }  from './components/AdvertisementForm-MDF/AdvertisementFormMDF.components';
//import { AdvertisementFormFormBuilderClass }  from './components/AdvertisementForm-FormBuilder/AdvertisementFormFormBuilder.components';
import { HomeClass } from './components/HomeComponent/Home.component';
import { EditAdClass } from './components/EditAdComponent/EditAd.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
          {path: '', component : HomeClass},
          {path: 'edit/:id', component : EditAdClass}

  ])],
  declarations: [ AppComponent, HomeClass, AdvertisementFormTemplateClass, AdvertisementTableClass, SearchAdPipe, EditAdClass],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
