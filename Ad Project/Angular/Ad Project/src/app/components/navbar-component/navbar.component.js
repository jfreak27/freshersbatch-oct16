"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/UserService/user.service");
var router_1 = require("@angular/router");
var ad_service_1 = require("../../services/AdService/ad.service");
var NavBarComponentClass = (function () {
    function NavBarComponentClass(router, userservice, adservice) {
        var _this = this;
        this.router = router;
        this.userservice = userservice;
        this.adservice = adservice;
        this.token = null;
        this.categories = [];
        this.adservice.getCategories().subscribe(function (response) { _this.generateCategories(response); });
    }
    NavBarComponentClass.prototype.generateCategories = function (response) {
        for (var _i = 0, _a = response.data.itemList; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categories.push(x.name);
        }
    };
    NavBarComponentClass.prototype.goToPostAd = function () {
        if (this.token != null)
            this.router.navigate(['/postAd']);
        if (this.token == null) {
            console.log("123");
            document.getElementById('loginButton').click();
            alert("Please login to post ad");
        }
    };
    NavBarComponentClass.prototype.ngDoCheck = function () {
        this.token = this.userservice.getAuthToken();
    };
    NavBarComponentClass.prototype.logout = function () {
        this.userservice.LogOutUser(this.token);
        this.userservice.setAuthToken(null);
    };
    NavBarComponentClass.prototype.goToMyAccount = function () {
        // let userid = this.userservice.getUserName();
        this.router.navigate(['/myAccount']);
    };
    NavBarComponentClass.prototype.filteredAds = function (cat) {
        console.log("in navbar", cat);
        this.adservice.setCategory(cat);
    };
    return NavBarComponentClass;
}());
NavBarComponentClass = __decorate([
    core_1.Component({
        selector: 'navigation-bar',
        templateUrl: "./navigation-html.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, ad_service_1.AdService])
], NavBarComponentClass);
exports.NavBarComponentClass = NavBarComponentClass;
//# sourceMappingURL=navbar.component.js.map