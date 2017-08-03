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
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/UserService/user.service");
var ad_service_1 = require("../../services/AdService/ad.service");
var router_2 = require("@angular/router");
var MyAccountComponentClass = (function () {
    function MyAccountComponentClass(router, adservice, activatedRoute, userservice) {
        var _this = this;
        this.router = router;
        this.adservice = adservice;
        this.activatedRoute = activatedRoute;
        this.userservice = userservice;
        this.userInfo = { id: null, firstName: null, lastName: null, userName: null, password: null, email: null, phone: null };
        this.userservice.getUserInfo().subscribe(function (response) { console.log(response); _this.userInfo = response.data.user; });
        this.auth_token = this.userservice.getAuthToken();
        console.log(this.auth_token);
        this.adservice.getAdsByUser(this.auth_token).subscribe(function (response) { _this.myads = response.data.mypostList; console.log(_this.myads); });
    }
    MyAccountComponentClass.prototype.deleteAd = function (id) {
        var auth_token = this.userservice.getAuthToken();
        this.adservice.deleteAd(id, auth_token).subscribe(function (response) { console.log(response); });
        alert("Ad Deleted Successfully");
    };
    MyAccountComponentClass.prototype.editAd = function (id) {
        this.router.navigate(['editAd', id]);
    };
    return MyAccountComponentClass;
}());
MyAccountComponentClass = __decorate([
    core_1.Component({
        selector: 'myAccount',
        templateUrl: "./myAccount-html.html",
    }),
    __metadata("design:paramtypes", [router_2.Router, ad_service_1.AdService, router_1.ActivatedRoute, user_service_1.UserService])
], MyAccountComponentClass);
exports.MyAccountComponentClass = MyAccountComponentClass;
//# sourceMappingURL=myAccount.component.js.map