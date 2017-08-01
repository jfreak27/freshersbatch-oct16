import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule} from '@angular/http';

import { NavBarComponentClass }  from './components/navbar-component/navbar.component';
import { FooterComponentClass }  from './components/footer-component/footer.component';
import { LoginComponentClass }  from './components/login-component/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NavBarComponentClass, FooterComponentClass, LoginComponentClass],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
