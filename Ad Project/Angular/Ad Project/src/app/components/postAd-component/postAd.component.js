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
var router_2 = require("@angular/router");
var ad_service_1 = require("../../services/AdService/ad.service");
var user_service_1 = require("../../services/UserService/user.service");
var PostAdComponentClass = (function () {
    function PostAdComponentClass(router, activatedRoute, adservice, userservice) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.adservice = adservice;
        this.userservice = userservice;
        this.status = false;
        this.categories = [];
        this.adservice.getCategories().subscribe(function (response) { _this.generateCategories(response); });
    }
    PostAdComponentClass.prototype.generateCategories = function (response) {
        for (var _i = 0, _a = response.data.itemList; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categories.push(x.name);
        }
    };
    PostAdComponentClass.prototype.createAd = function (title, category, description) {
        var _this = this;
        var auth_token = this.userservice.getAuthToken();
        var uname = this.userservice.getUserName();
        this.adservice.postNewAd(auth_token, title, category, description, uname).subscribe(function (response) { console.log(response); });
        this.status = true;
        setTimeout(function (router) {
            _this.router.navigate(['']);
        }, 2000);
    };
    PostAdComponentClass.prototype.ngOnInit = function () { };
    return PostAdComponentClass;
}());
PostAdComponentClass = __decorate([
    core_1.Component({
        selector: 'postAd',
        templateUrl: "./postAd-html.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute, ad_service_1.AdService, user_service_1.UserService])
], PostAdComponentClass);
exports.PostAdComponentClass = PostAdComponentClass;
//# sourceMappingURL=postAd.component.js.map