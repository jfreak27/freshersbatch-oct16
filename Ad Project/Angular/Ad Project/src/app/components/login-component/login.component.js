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
var LoginComponentClass = (function () {
    function LoginComponentClass(registerService) {
        this.registerService = registerService;
    }
    LoginComponentClass.prototype.sendToUserServiceRegister = function (fname, lname, uname, pwd, email, phone) {
        var msg;
        var user = {
            firstName: fname,
            lastName: lname,
            userName: uname,
            password: pwd,
            email: email,
            phone: phone
        };
        this.registerService.RegisterUser(user).subscribe(function (response) { console.log("Server says", response); }, function (error) { alert("User Already Exist!"); });
    };
    LoginComponentClass.prototype.sendToUserServiceLogin = function (username, password) {
        if (username === void 0) { username = null; }
        if (password === void 0) { password = null; }
        var userlogin = {
            userName: username,
            password: password
        };
        console.log(userlogin);
        this.registerService.LoginUser(userlogin).subscribe(function (response) { console.log(response); }, function (error) { alert("Wrong Credentials"); });
    };
    return LoginComponentClass;
}());
LoginComponentClass = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: "./login-html.html",
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponentClass);
exports.LoginComponentClass = LoginComponentClass;
//# sourceMappingURL=login.component.js.map