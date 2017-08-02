"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var navbar_component_1 = require("./components/navbar-component/navbar.component");
var footer_component_1 = require("./components/footer-component/footer.component");
var login_component_1 = require("./components/login-component/login.component");
var postAd_component_1 = require("./components/postAd-component/postAd.component");
var adGrid_component_1 = require("./components/adGrid-component/adGrid.component");
var adPage_component_1 = require("./components/adPage-component/adPage.component");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot([{ path: '', component: adGrid_component_1.AdGridComponentClass }, { path: 'postAd', component: postAd_component_1.PostAdComponentClass }, { path: 'adPage/:id', component: adPage_component_1.AdPageComponentClass }])],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponentClass, footer_component_1.FooterComponentClass, login_component_1.LoginComponentClass, postAd_component_1.PostAdComponentClass, adGrid_component_1.AdGridComponentClass, adPage_component_1.AdPageComponentClass],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map