/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _scoping = __webpack_require__(1);

	var _assign = __webpack_require__(2);

	var _arrow = __webpack_require__(3);

	var _parameterHandling = __webpack_require__(4);

	var _literals = __webpack_require__(5);

	var _destructuring = __webpack_require__(6);

	var _BankAssignment = __webpack_require__(7);

	var _symbols = __webpack_require__(8);

	var _exportArmstrong = __webpack_require__(9);

	//testConstant();
	//testScoping();
	//testAssign();
	//testArrow();
	//testParameterHandling();
	//testLiteral();
	//testDestructuring();
	//BankAssignment();
	//fibo();

	(0, _exportArmstrong.exportArmstrong)(); //import {testConstant} from "./components/constant.js"; //Commented because, it wouldnt let other functions compile

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.testScoping = testScoping;
	function testScoping() {

	  if (5 < 4) {
	    var _abc = 1;
	    console.log(flag);
	  }
	  console.log(abc);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.testAssign = testAssign;
	function testAssign() {

	        var orderObj = {

	                id: 1,
	                title: "Washing Machine",
	                price: 1000,

	                printOrder: function printOrder() {
	                        console.log(this);
	                },
	                getPrice: function getPrice() {
	                        console.log(this.price);
	                }
	        };

	        orderObj.printOrder();
	        orderObj.getPrice();

	        var orderObjCopy = {};
	        Object.assign(orderObjCopy, orderObj);

	        console.log("OrderObjCopy : ", orderObjCopy);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.testArrow = testArrow;
	function testArrow() {
	        var _console;

	        var names = ['Adi', 'Rajo', 'Navi'];

	        var result = [];

	        names.forEach(function (i) {

	                var nameObj = { name: i, length: i.length };

	                result.push(nameObj);
	        });

	        (_console = console).log.apply(_console, result);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.testParameterHandling = testParameterHandling;
	function testParameterHandling() {

	        var add = function add() {
	                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
	                var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
	                return a + b;
	        };

	        function userFriends(userName) {
	                for (var _len = arguments.length, friends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                        friends[_key - 1] = arguments[_key];
	                }

	                console.log(userName + " has friends " + friends);
	        }

	        function printCapitalnames() {
	                for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                        names[_key2] = arguments[_key2];
	                }

	                names.forEach(function (i) {

	                        console.log(i.toUpperCase());
	                });
	        }

	        console.log(add());
	        var friends = ["adi", "rajo", "navi"];
	        userFriends("Tom", friends);
	        printCapitalnames.apply(undefined, friends);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testLiteral = testLiteral;
	function testLiteral() {

	    var LaptopObj = {

	        model: 'lenovo',
	        deskno: 5,
	        name: 'aditya',

	        sendTicket: function sendTicket() {

	            console.log(this.name + ' has ' + this.model + ' laptop. He seats at desk no ' + this.deskno);
	        }
	    };

	    LaptopObj.sendTicket();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testDestructuring = testDestructuring;
	function testDestructuring() {

	    var arr = ['one', 'two', 'three', 'four'];

	    var _ref = [].concat(arr),
	        third = _ref[2];

	    console.log(third);

	    var org = {

	        name: 'Company',
	        address: {

	            city: 'Pune',
	            zip: 445442

	        }

	    };

	    var zip = org.address.zip;


	    console.log(zip);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.BankAssignment = BankAssignment;

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function BankAssignment() {
	    var Account = function () {
	        function Account(id, name, bal) {
	            _classCallCheck(this, Account);

	            this.id = id;
	            this.name = name;
	            this.bal = bal;
	        }

	        _createClass(Account, [{
	            key: 'getBalance',
	            value: function getBalance() {

	                return this.bal;
	            }
	        }]);

	        return Account;
	    }();

	    var SavingAcc = function (_Account) {
	        _inherits(SavingAcc, _Account);

	        function SavingAcc(id, name, bal, int) {
	            _classCallCheck(this, SavingAcc);

	            var _this = _possibleConstructorReturn(this, (SavingAcc.__proto__ || Object.getPrototypeOf(SavingAcc)).call(this, id, name, bal));

	            _this.int = int;

	            return _this;
	        }

	        _createClass(SavingAcc, [{
	            key: 'getBalance',
	            value: function getBalance() {

	                return _get(SavingAcc.prototype.__proto__ || Object.getPrototypeOf(SavingAcc.prototype), 'getBalance', this).call(this) + this.int;
	            }
	        }]);

	        return SavingAcc;
	    }(Account);

	    var CurrentAcc = function (_Account2) {
	        _inherits(CurrentAcc, _Account2);

	        function CurrentAcc(id, name, bal, credit) {
	            _classCallCheck(this, CurrentAcc);

	            var _this2 = _possibleConstructorReturn(this, (CurrentAcc.__proto__ || Object.getPrototypeOf(CurrentAcc)).call(this, id, name, bal));

	            _this2.credit = credit;

	            return _this2;
	        }

	        _createClass(CurrentAcc, [{
	            key: 'getBalance',
	            value: function getBalance() {

	                return _get(CurrentAcc.prototype.__proto__ || Object.getPrototypeOf(CurrentAcc.prototype), 'getBalance', this).call(this) + this.credit;
	            }
	        }]);

	        return CurrentAcc;
	    }(Account);

	    var AllAccounts = [];

	    var saving1 = new SavingAcc(1, 'adi', 2000, 1000);
	    AllAccounts.push(saving1);

	    var saving2 = new SavingAcc(2, 'rajo', 1000, 2000);
	    AllAccounts.push(saving1);

	    var current1 = new CurrentAcc(5, 'navi', 1000, 1000);
	    AllAccounts.push(current1);

	    var current2 = new CurrentAcc(5, 'navi', 1000, 5000);
	    AllAccounts.push(current2);

	    getTotalBalance(AllAccounts);
	}

	function getTotalBalance(AllAccounts) {

	    var total = 0;
	    AllAccounts.forEach(function (acc) {

	        total = total + acc.getBalance();
	    });

	    console.log('Total Balance in Bank : ' + total);
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.fibo = fibo;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var a = Symbol();
	var b = Symbol();

	var Fibo = function () {
	    function Fibo() {
	        _classCallCheck(this, Fibo);

	        a = 0;
	        b = 1;
	    }

	    _createClass(Fibo, [{
	        key: "next",
	        value: function next() {
	            var _ref = [b, a + b];
	            a = _ref[0];
	            b = _ref[1];

	            return { value: a, done: false };
	        }
	    }]);

	    return Fibo;
	}();

	function fibo() {

	    var fibo = new Fibo();

	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	    console.log(fibo.next());
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.exportArmstrong = exportArmstrong;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var counter = 10;

	var Armstrong = function () {
	    function Armstrong() {
	        _classCallCheck(this, Armstrong);
	    }

	    _createClass(Armstrong, [{
	        key: Symbol.iterator,
	        value: function value() {

	            return {
	                getNextArmstrong: function getNextArmstrong() {
	                    var i = counter;
	                    while (true) {

	                        var number = i;

	                        var noOfDigits = number.toString().length;

	                        var res = 0;
	                        var rem;

	                        while (number != 0) {
	                            rem = Math.floor(number % 10);
	                            res = res + Math.pow(rem, noOfDigits);
	                            number = Math.floor(number / 10);
	                        }

	                        if (res == i) {
	                            counter = i + 1;
	                            return { value: i, done: false };
	                        }

	                        i++;
	                    }
	                }
	            };
	        }
	    }]);

	    return Armstrong;
	}();

	function exportArmstrong() {

	    var arm = new Armstrong();
	    var itr = arm[Symbol.iterator]();

	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	    console.log(itr.getNextArmstrong());
	}

/***/ }
/******/ ]);