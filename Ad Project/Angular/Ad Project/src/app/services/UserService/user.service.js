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
    UserService.prototype.setUserName = function (name) {
        this.username = name;
    };
    UserService.prototype.getUserName = function () {
        return this.username;
    };
    UserService.prototype.setAuthToken = function (token) {
        this.auth_token = token;
    };
    UserService.prototype.getAuthToken = function () {
        return this.auth_token;
    };
    UserService.prototype.RegisterUser = function (user) {
        var url = "http://192.168.3.144:9000/register"; //Akshay's machine
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(url, user, options).map(function (response) { return response.json(); });
    };
    UserService.prototype.LoginUser = function (user) {
        var url = "http://192.168.3.144:9000/login"; //Akshay's machine
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_2.RequestOptions({ headers: headers });
        var usercred = {
            userName: user.userName,
            password: user.password
        };
        return this._http.post(url, usercred, options).map(function (response) { return response.json(); });
    };
    UserService.prototype.LogOutUser = function (token) {
        var url = "http://192.168.3.144:9000/logout"; //Akshay's machine
        var headers = new http_1.Headers();
        headers.append('auth-token', token);
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.delete(url, options).map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserInfo = function () {
        var url = "http://192.168.3.144:9000/user?userId=" + this.username; //Akshay's machine
        var headers = new http_1.Headers();
        headers.append('auth-token', this.auth_token);
        console.log(url);
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.get(url, options).map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map