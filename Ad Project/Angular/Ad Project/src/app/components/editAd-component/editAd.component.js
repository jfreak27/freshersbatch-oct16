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
var ad_service_1 = require("../../services/AdService/ad.service");
var user_service_1 = require("../../services/UserService/user.service");
var router_2 = require("@angular/router");
var EditAdComponentClass = (function () {
    function EditAdComponentClass(router, activatedRoute, adservice, userservice) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.adservice = adservice;
        this.userservice = userservice;
        this.status = false;
        this.categories = [];
        this.ad = [];
        this.adservice.getCategories().subscribe(function (response) { _this.generateCategories(response); });
        this.postid = this.activatedRoute.snapshot.params['id'];
        this.adservice.getAdById(this.postid).subscribe(function (response) {
            _this.ad = response.data.mypost;
        });
    }
    EditAdComponentClass.prototype.generateCategories = function (response) {
        for (var _i = 0, _a = response.data.itemList; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categories.push(x.name);
        }
    };
    EditAdComponentClass.prototype.editAd = function (title, category, description) {
        var _this = this;
        var auth_token = this.userservice.getAuthToken();
        var uname = this.userservice.getUserName();
        this.adservice.editAd(this.ad.id, title, uname, category, description, auth_token).subscribe(function (response) { console.log(response); });
        this.status = true;
        setTimeout(function (router) {
            _this.router.navigate(['']);
        }, 2000);
    };
    EditAdComponentClass.prototype.ngOnInit = function () {
    };
    return EditAdComponentClass;
}());
EditAdComponentClass = __decorate([
    core_1.Component({
        selector: 'editAd',
        templateUrl: "./editAd-html.html",
    }),
    __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, ad_service_1.AdService, user_service_1.UserService])
], EditAdComponentClass);
exports.EditAdComponentClass = EditAdComponentClass;
//# sourceMappingURL=editAd.component.js.map