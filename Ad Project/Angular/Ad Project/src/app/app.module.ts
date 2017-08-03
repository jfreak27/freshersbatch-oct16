import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HttpModule} from '@angular/http';

import { NavBarComponentClass }  from './components/navbar-component/navbar.component';
import { FooterComponentClass }  from './components/footer-component/footer.component';
import { LoginComponentClass }  from './components/login-component/login.component';
import { PostAdComponentClass }  from './components/postAd-component/postAd.component';
import { AdGridComponentClass }  from './components/adGrid-component/adGrid.component';
import { AdPageComponentClass }  from './components/adPage-component/adPage.component';
import { MyAccountComponentClass }  from './components/myAccount-component/myAccount.component';
import { EditAdComponentClass }  from './components/editAd-component/editAd.component';

import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([{path:'', component: AdGridComponentClass},{path :'postAd', component: PostAdComponentClass}, {path: 'adPage/:id', component: AdPageComponentClass},{path: 'myAccount', component: MyAccountComponentClass},{path:'editAd/:id',component : EditAdComponentClass}])],
  declarations: [ AppComponent, NavBarComponentClass, FooterComponentClass, LoginComponentClass, PostAdComponentClass, AdGridComponentClass, AdPageComponentClass, MyAccountComponentClass,EditAdComponentClass] ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
