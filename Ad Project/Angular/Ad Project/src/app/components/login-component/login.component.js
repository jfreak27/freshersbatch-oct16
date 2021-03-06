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
var LoginComponentClass = (function () {
    function LoginComponentClass(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginSuccess = true;
        this.registerSuccess = false;
        this.registerFailure = false;
    }
    LoginComponentClass.prototype.sendToUserServiceRegister = function (fname, lname, uname, pwd, email, phone) {
        var _this = this;
        var msg;
        var user = {
            firstName: fname,
            lastName: lname,
            userName: uname,
            password: pwd,
            email: email,
            phone: phone
        };
        this.userService.RegisterUser(user).subscribe(function (response) { console.log("Server says", response); _this.registerSuccess = true; }, function (error) { _this.registerFailure = true; });
    };
    LoginComponentClass.prototype.sendToUserServiceLogin = function (username, password) {
        var _this = this;
        if (username === void 0) { username = null; }
        if (password === void 0) { password = null; }
        var userlogin = {
            userName: username,
            password: password
        };
        console.log(userlogin);
        this.userService.LoginUser(userlogin).subscribe(function (response) {
            _this.authToken = response.data['auth-token'];
            _this.username = response.data['userId'];
            if (_this.authToken != null) {
                document.getElementById('closeModal').click();
                _this.userService.setAuthToken(_this.authToken);
                _this.userService.setUserName(_this.username);
            }
            if (_this.authToken == null) {
                _this.loginSuccess = false;
            }
        }, function (error) {
            alert("Wrong Credentials");
        });
    };
    LoginComponentClass.prototype.goToMyAccount = function () {
        this.router.navigate(['/myAccount']);
    };
    return LoginComponentClass;
}());
LoginComponentClass = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: "./login-html.html",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponentClass);
exports.LoginComponentClass = LoginComponentClass;
//# sourceMappingURL=login.component.js.map