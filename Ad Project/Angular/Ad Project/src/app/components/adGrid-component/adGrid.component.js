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
var ad_service_1 = require("../../services/AdService/ad.service");
var router_1 = require("@angular/router");
var AdGridComponentClass = (function () {
    function AdGridComponentClass(adservice, router) {
        var _this = this;
        this.adservice = adservice;
        this.router = router;
        this.allAds = [];
        this.adservice.getAllAds().subscribe(function (response) { return _this.storeAds(response); });
    }
    AdGridComponentClass.prototype.goToAd = function (id) {
        this.router.navigate(['/adPage', id]);
    };
    AdGridComponentClass.prototype.storeAds = function (response) {
        for (var _i = 0, _a = response.data.advertiseList; _i < _a.length; _i++) {
            var x = _a[_i];
            this.allAds.push(x);
        }
        console.log(this.allAds);
        this.convertDate(this.allAds);
    };
    AdGridComponentClass.prototype.convertDate = function (ads) {
        for (var _i = 0, ads_1 = ads; _i < ads_1.length; _i++) {
            var x = ads_1[_i];
            x.createdDate = new Date(x.createdDate).toLocaleDateString('en-GB');
        }
    };
    return AdGridComponentClass;
}());
AdGridComponentClass = __decorate([
    core_1.Component({
        selector: 'adGrid',
        templateUrl: "./adGrid-html.html",
    }),
    __metadata("design:paramtypes", [ad_service_1.AdService, router_1.Router])
], AdGridComponentClass);
exports.AdGridComponentClass = AdGridComponentClass;
//# sourceMappingURL=adGrid.component.js.map