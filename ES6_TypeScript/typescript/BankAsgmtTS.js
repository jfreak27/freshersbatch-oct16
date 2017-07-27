var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = (function () {
    function Account(id, name, bal) {
        this.id = id;
        this.name = name;
        this.bal = bal;
    }
    Account.prototype.getBalance = function () {
        return this.bal;
    };
    return Account;
}());
var SavingAcc = (function (_super) {
    __extends(SavingAcc, _super);
    function SavingAcc(id, name, bal, int) {
        var _this = _super.call(this, id, name, bal) || this;
        _this.int = int;
        return _this;
    }
    SavingAcc.prototype.getBalance = function () {
        return _super.prototype.getBalance.call(this) + this.int;
    };
    return SavingAcc;
}(Account));
var CurrentAcc = (function (_super) {
    __extends(CurrentAcc, _super);
    function CurrentAcc(id, name, bal, credit) {
        var _this = _super.call(this, id, name, bal) || this;
        _this.credit = credit;
        return _this;
    }
    CurrentAcc.prototype.getBalance = function () {
        return _super.prototype.getBalance.call(this) + this.credit;
    };
    return CurrentAcc;
}(Account));
var AllAccounts = [];
var saving1 = new SavingAcc(1, 'adi', 1000, 1000);
AllAccounts.push(saving1);
var saving2 = new SavingAcc(2, 'rajo', 1000, 1000);
AllAccounts.push(saving1);
var current1 = new CurrentAcc(5, 'navi', 1000, 1000);
AllAccounts.push(current1);
var current2 = new CurrentAcc(5, 'navi', 1000, 1000);
AllAccounts.push(current2);
getTotalBalance(AllAccounts);
function getTotalBalance(AllAccounts) {
    var total = 0;
    AllAccounts.forEach(function (acc) {
        total = total + acc.getBalance();
    });
    console.log("Total Balance in Bank : " + total);
}
