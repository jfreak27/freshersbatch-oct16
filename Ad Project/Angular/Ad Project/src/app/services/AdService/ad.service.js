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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var http_2 = require("@angular/http");
var AdService = (function () {
    function AdService(_http) {
        this._http = _http;
    }
    // getAdById(){
    //         let url = "http://192.168.3.144:9000/viewAd"; //Akshay's machine
    //         let headers = new Headers();
    //         headers.append('Content-Type', 'application/json');
    //         headers.append('auth-token',token);
    //         let options = new RequestOptions({ headers: headers });
    //         return this._http.post(url, JSON.stringify(ad), options).map((response: Response)=>response.json());
    // }
    AdService.prototype.getAllAds = function () {
        var url = "http://192.168.3.144:9000/posts/search"; //Akshay's machine
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    AdService.prototype.getCategories = function () {
        var url = "http://192.168.3.144:9000/categories"; //Akshay's machine
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    AdService.prototype.postNewAd = function (token, title, category, description, uname) {
        this.auth_token = token;
        var ad = {
            "title": title,
            "name": uname,
            "category": category,
            "description": description,
        };
        console.log(ad);
        var url = "http://192.168.3.144:9000/postAd"; //Akshay's machine
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', token);
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(url, JSON.stringify(ad), options).map(function (response) { return response.json(); });
    };
    return AdService;
}());
AdService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AdService);
exports.AdService = AdService;
//# sourceMappingURL=ad.service.js.map