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
var AdPageComponentClass = (function () {
    function AdPageComponentClass(activatedRoute, adservice, userservice) {
        this.activatedRoute = activatedRoute;
        this.adservice = adservice;
        this.userservice = userservice;
        this.ad = {};
    }
    AdPageComponentClass.prototype.ngOnInit = function () {
        var _this = this;
        this.postid = this.activatedRoute.snapshot.params['id'];
        this.adservice.getAdById(this.postid).subscribe(function (response) {
            _this.ad = response.data.mypost;
            _this.ad.createdDate = new Date(_this.ad.createdDate).toLocaleDateString('en-GB');
        });
    };
    AdPageComponentClass.prototype.sendMessage = function (id, msg) {
        var auth_token = this.userservice.getAuthToken();
        if (auth_token == null || auth_token == undefined) {
            alert("Please login to message poster");
        }
        console.log(id);
        console.log(msg);
        this.adservice.sendMessage(id, msg, auth_token).subscribe(function (response) { console.log(response); });
    };
    return AdPageComponentClass;
}());
AdPageComponentClass = __decorate([
    core_1.Component({
        selector: 'adPage',
        templateUrl: "./adPage-html.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, ad_service_1.AdService, user_service_1.UserService])
], AdPageComponentClass);
exports.AdPageComponentClass = AdPageComponentClass;
//# sourceMappingURL=adPage.component.js.map