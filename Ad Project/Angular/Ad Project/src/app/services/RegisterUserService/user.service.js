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
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.RegisterUser = function (user) {
        var url = "http://192.168.3.144:9000/register"; //Akshay's machine
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(url, user, options).map(function (response) { return response.json(); });
    };
    UserService.prototype.LoginUser = function (user) {
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map