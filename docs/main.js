/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameObjects/background.ts":
/*!***************************************!*\
  !*** ./src/gameObjects/background.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBackground)
/* harmony export */ });
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eva/plugin-renderer-img */ "@eva/plugin-renderer-img");
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__);


function createBackground() {
    var bg = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('bg', {
        size: { width: 750, height: 1624 },
        origin: { x: 0.5, y: 1 },
        position: {
            x: 0,
            y: 120,
        },
        anchor: {
            x: 0.5,
            y: 1,
        },
    });
    bg.addComponent(new _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__.Img({
        resource: 'bg',
    }));
    return bg;
}


/***/ }),

/***/ "./src/gameObjects/ball.ts":
/*!*********************************!*\
  !*** ./src/gameObjects/ball.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBall)
/* harmony export */ });
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eva/plugin-renderer-img */ "@eva/plugin-renderer-img");
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__);


function createBall(position) {
    var ball = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('ball', {
        size: { width: 79, height: 79 },
        origin: { x: 0.5, y: 0.5 },
        position: position,
        anchor: {
            x: 0,
            y: 0,
        },
    });
    ball.addComponent(new _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__.Img({
        resource: 'basketball',
    }));
    return ball;
}


/***/ }),

/***/ "./src/gameObjects/board/backboard.ts":
/*!********************************************!*\
  !*** ./src/gameObjects/board/backboard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBackboard)
/* harmony export */ });
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eva/plugin-renderer-img */ "@eva/plugin-renderer-img");
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__);


function createBackboard() {
    var backboard = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('backboard', {
        size: {
            width: 100,
            height: 238,
        },
    });
    backboard.addComponent(new _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__.Img({
        resource: 'backboard',
    }));
    return backboard;
}


/***/ }),

/***/ "./src/gameObjects/board/basketBack.ts":
/*!*********************************************!*\
  !*** ./src/gameObjects/board/basketBack.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBasketBack)
/* harmony export */ });
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eva/plugin-renderer-img */ "@eva/plugin-renderer-img");
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__);


function createBasketBack() {
    var basketBack = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('basketBack', {
        size: {
            width: 166,
            height: 158,
        },
        position: {
            x: 65,
            y: 160,
        },
    });
    basketBack.addComponent(new _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_1__.Img({
        resource: 'basketBack',
    }));
    return basketBack;
}


/***/ }),

/***/ "./src/gameObjects/board/basketFront.ts":
/*!**********************************************!*\
  !*** ./src/gameObjects/board/basketFront.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBasketFront)
/* harmony export */ });
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eva/plugin-renderer-sprite-animation */ "@eva/plugin-renderer-sprite-animation");
/* harmony import */ var _eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_1__);


function createBasketFront() {
    var basetFront = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('board', {
        size: {
            width: 166,
            height: 157,
        },
        position: {
            x: 80,
            y: -760,
        },
        anchor: {
            x: 0,
            y: 1,
        },
    });
    var anim = basetFront.addComponent(new _eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_1__.SpriteAnimation({
        resource: 'boardIdle',
        speed: 100,
    }));
    var playAnim = function () {
        anim.resource = 'boardGoal';
        setTimeout(function () {
            anim.resource = 'boardIdle';
        }, 900);
    };
    return { basetFront: basetFront, playAnim: playAnim };
}


/***/ }),

/***/ "./src/gameObjects/board/board.ts":
/*!****************************************!*\
  !*** ./src/gameObjects/board/board.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _backboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backboard */ "./src/gameObjects/board/backboard.ts");
/* harmony import */ var _basketBack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basketBack */ "./src/gameObjects/board/basketBack.ts");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_2__);



function createBoard() {
    var board = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_2__.GameObject('boardContainer', {
        size: {
            width: 750,
            height: 1484,
        }
    });
    var boardContainer = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_2__.GameObject('boardContainer', {
        position: {
            x: 0,
            y: -920,
        },
        anchor: {
            x: 0,
            y: 1,
        },
    });
    var backContainer = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_2__.GameObject('boardContainer', {
        position: {
            x: 0,
            y: -920,
        },
        anchor: {
            x: 0,
            y: 1,
        },
    });
    boardContainer.addChild((0,_backboard__WEBPACK_IMPORTED_MODULE_0__.default)());
    backContainer.addChild((0,_basketBack__WEBPACK_IMPORTED_MODULE_1__.default)());
    board.addChild(backContainer);
    board.addChild(boardContainer);
    return board;
}


/***/ }),

/***/ "./src/gameObjects/btn.ts":
/*!********************************!*\
  !*** ./src/gameObjects/btn.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBtn)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@2.2.0@tslib/tslib.es6.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eva/plugin-renderer-event */ "@eva/plugin-renderer-event");
/* harmony import */ var _eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eva/plugin-renderer-graphics */ "@eva/plugin-renderer-graphics");
/* harmony import */ var _eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eva/plugin-renderer-text */ "@eva/plugin-renderer-text");
/* harmony import */ var _eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eva_plugin_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eva/plugin-transition */ "@eva/plugin-transition");
/* harmony import */ var _eva_plugin_transition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_transition__WEBPACK_IMPORTED_MODULE_4__);






function createBtn(_a) {
    var text = _a.text, _b = _a.transform, transform = _b === void 0 ? {} : _b, _c = _a.callback, callback = _c === void 0 ? function () { } : _c;
    var box = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('box', (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({ size: {
            width: 320,
            height: 80,
        } }, transform));
    var btnGO = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('btn');
    var textGO = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.GameObject('text', {
        anchor: {
            x: 0.5,
            y: 0.5,
        },
        origin: {
            x: 0.5,
            y: 0.5,
        },
    });
    var graphics = btnGO.addComponent(new _eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics()).graphics;
    graphics.beginFill(0xFF4510, 0.5);
    graphics.lineStyle(6, 0xA65A22);
    graphics.drawRoundedRect(0, 0, 320, 80, 8);
    graphics.endFill();
    textGO.addComponent(new _eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_3__.Text({
        text: text,
        style: {
            fontSize: 32,
            fill: 0xffffff,
        },
    }));
    box.addChild(btnGO);
    box.addChild(textGO);
    var transition = box.addComponent(new _eva_plugin_transition__WEBPACK_IMPORTED_MODULE_4__.Transition({
        group: {
            idle: [
                {
                    name: 'scale.x',
                    component: box.transform,
                    values: [
                        {
                            time: 0,
                            value: 1,
                            tween: 'ease-out',
                        },
                        {
                            time: 300,
                            value: 1.2,
                            tween: 'ease-in',
                        },
                        {
                            time: 600,
                            value: 1,
                        },
                    ],
                },
                {
                    name: 'scale.y',
                    component: box.transform,
                    values: [
                        {
                            time: 0,
                            value: 1,
                            tween: 'ease-out',
                        },
                        {
                            time: 300,
                            value: 1.2,
                            tween: 'ease-in',
                        },
                        {
                            time: 600,
                            value: 1,
                        },
                    ],
                },
            ]
        }
    }));
    transition.play('idle', Infinity);
    var evt = box.addComponent(new _eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_1__.Event);
    evt.on('tap', function () {
        callback();
    });
    return box;
}


/***/ }),

/***/ "./src/resources.ts":
/*!**************************!*\
  !*** ./src/resources.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'basketball',
        type: _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: 'png',
                url: './statics/TB1WF1R0Ez1gK0jSZLeXXb9kVXa-99-99.png',
            },
        },
        preload: true,
    },
    {
        name: 'backboard',
        type: _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: 'png',
                url: './statics/TB1a11YoRFR4u4jSZFPXXanzFXa-109-263.png',
            },
        },
        preload: true,
    },
    {
        name: 'bg',
        type: _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: 'png',
                url: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
            },
        },
        preload: true,
    },
    {
        name: 'basketBack',
        type: _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: 'png',
                url: './statics/TB1Xerd0AY2gK0jSZFgXXc5OFXa-184-175.png',
            },
        },
        preload: true,
    },
    {
        name: 'boardIdle',
        type: _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPE.SPRITE_ANIMATION,
        src: {
            image: {
                type: 'png',
                url: './statics/TB1LYwonSR26e4jSZFEXXbwuXXa-920-875.png',
            },
            json: {
                type: 'json',
                url: './statics/3246284841596d87b60749e88e0e26cd.json',
            },
        },
        preload: true,
    },
    {
        name: 'boardGoal',
        type: _eva_eva_js__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPE.SPRITE_ANIMATION,
        src: {
            image: {
                type: 'png',
                url: './statics/TB1ob_c0EY1gK0jSZFCXXcwqXXa-552-525.png',
            },
            json: {
                type: 'json',
                url: './statics/dfefdd86474cded44bdc226549ae6d81.json',
            },
        },
        preload: true,
    },
]);


/***/ }),

/***/ "./node_modules/_tslib@2.2.0@tslib/tslib.es6.js":
/*!******************************************************!*\
  !*** ./node_modules/_tslib@2.2.0@tslib/tslib.es6.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "@eva/eva.js":
/*!**********************!*\
  !*** external "EVA" ***!
  \**********************/
/***/ ((module) => {

module.exports = EVA;

/***/ }),

/***/ "@eva/plugin-renderer-event":
/*!****************************************************!*\
  !*** external ["EVA","plugin","renderer","event"] ***!
  \****************************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer.event;

/***/ }),

/***/ "@eva/plugin-renderer-graphics":
/*!*******************************************************!*\
  !*** external ["EVA","plugin","renderer","graphics"] ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer.graphics;

/***/ }),

/***/ "@eva/plugin-renderer-img":
/*!**************************************************!*\
  !*** external ["EVA","plugin","renderer","img"] ***!
  \**************************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer.img;

/***/ }),

/***/ "@eva/plugin-renderer-render":
/*!*****************************************************!*\
  !*** external ["EVA","plugin","renderer","render"] ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer.render;

/***/ }),

/***/ "@eva/plugin-renderer-sprite-animation":
/*!**************************************************************!*\
  !*** external ["EVA","plugin","renderer","spriteAnimation"] ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer.spriteAnimation;

/***/ }),

/***/ "@eva/plugin-renderer-text":
/*!***************************************************!*\
  !*** external ["EVA","plugin","renderer","text"] ***!
  \***************************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer.text;

/***/ }),

/***/ "@eva/plugin-renderer":
/*!********************************************!*\
  !*** external ["EVA","plugin","renderer"] ***!
  \********************************************/
/***/ ((module) => {

module.exports = EVA.plugin.renderer;

/***/ }),

/***/ "@eva/plugin-transition":
/*!**********************************************!*\
  !*** external ["EVA","plugin","transition"] ***!
  \**********************************************/
/***/ ((module) => {

module.exports = EVA.plugin.transition;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameObjects_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObjects/background */ "./src/gameObjects/background.ts");
/* harmony import */ var _gameObjects_board_basketFront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObjects/board/basketFront */ "./src/gameObjects/board/basketFront.ts");
/* harmony import */ var _gameObjects_board_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameObjects/board/board */ "./src/gameObjects/board/board.ts");
/* harmony import */ var _gameObjects_ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameObjects/ball */ "./src/gameObjects/ball.ts");
/* harmony import */ var _gameObjects_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameObjects/btn */ "./src/gameObjects/btn.ts");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources */ "./src/resources.ts");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eva/eva.js */ "@eva/eva.js");
/* harmony import */ var _eva_eva_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eva_eva_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eva_plugin_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eva/plugin-renderer */ "@eva/plugin-renderer");
/* harmony import */ var _eva_plugin_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eva/plugin-renderer-img */ "@eva/plugin-renderer-img");
/* harmony import */ var _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eva/plugin-renderer-event */ "@eva/plugin-renderer-event");
/* harmony import */ var _eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eva/plugin-renderer-sprite-animation */ "@eva/plugin-renderer-sprite-animation");
/* harmony import */ var _eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eva_plugin_renderer_render__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eva/plugin-renderer-render */ "@eva/plugin-renderer-render");
/* harmony import */ var _eva_plugin_renderer_render__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_render__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eva_plugin_transition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eva/plugin-transition */ "@eva/plugin-transition");
/* harmony import */ var _eva_plugin_transition__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_transition__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @eva/plugin-renderer-graphics */ "@eva/plugin-renderer-graphics");
/* harmony import */ var _eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eva/plugin-renderer-text */ "@eva/plugin-renderer-text");
/* harmony import */ var _eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_14__);















_eva_eva_js__WEBPACK_IMPORTED_MODULE_6__.resource.addResource(_resources__WEBPACK_IMPORTED_MODULE_5__.default);
var game = new _eva_eva_js__WEBPACK_IMPORTED_MODULE_6__.Game({
    systems: [
        new _eva_plugin_renderer__WEBPACK_IMPORTED_MODULE_7__.RendererSystem({
            canvas: document.querySelector('#canvas'),
            width: 750,
            height: 1484,
            antialias: true,
        }),
        new _eva_plugin_renderer_img__WEBPACK_IMPORTED_MODULE_8__.ImgSystem(),
        new _eva_plugin_transition__WEBPACK_IMPORTED_MODULE_12__.TransitionSystem(),
        new _eva_plugin_renderer_sprite_animation__WEBPACK_IMPORTED_MODULE_10__.SpriteAnimationSystem(),
        new _eva_plugin_renderer_render__WEBPACK_IMPORTED_MODULE_11__.RenderSystem(),
        new _eva_plugin_renderer_event__WEBPACK_IMPORTED_MODULE_9__.EventSystem(),
        new _eva_plugin_renderer_graphics__WEBPACK_IMPORTED_MODULE_13__.GraphicsSystem(),
        new _eva_plugin_renderer_text__WEBPACK_IMPORTED_MODULE_14__.TextSystem(),
    ],
});
game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1484;
var pos = {
    x: 500,
    y: 1100,
};
var ball = (0,_gameObjects_ball__WEBPACK_IMPORTED_MODULE_3__.default)(pos);
var _a = (0,_gameObjects_board_basketFront__WEBPACK_IMPORTED_MODULE_1__.default)(), basetFront = _a.basetFront, playAnim = _a.playAnim;
var btn = (0,_gameObjects_btn__WEBPACK_IMPORTED_MODULE_4__.default)({
    text: '投球',
    transform: {
        position: {
            x: 0,
            y: -120,
        },
        origin: {
            x: 0.5,
            y: 0.5,
        },
        anchor: {
            x: 0.5,
            y: 1,
        },
    },
    callback: function () {
        alert('还没做呢～一起来完善吧');
    },
});
game.scene.addChild((0,_gameObjects_background__WEBPACK_IMPORTED_MODULE_0__.default)());
game.scene.addChild((0,_gameObjects_board_board__WEBPACK_IMPORTED_MODULE_2__.default)());
game.scene.addChild(ball);
game.scene.addChild(basetFront);
game.scene.addChild(btn);
window.playAnim = playAnim;
window.game = game;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2FtZU9iamVjdHMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2FtZU9iamVjdHMvYmFsbC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2FtZU9iamVjdHMvYm9hcmQvYmFja2JvYXJkLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9nYW1lT2JqZWN0cy9ib2FyZC9iYXNrZXRCYWNrLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9nYW1lT2JqZWN0cy9ib2FyZC9iYXNrZXRGcm9udC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2FtZU9iamVjdHMvYm9hcmQvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dhbWVPYmplY3RzL2J0bi50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9fdHNsaWJAMi4yLjBAdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBcIkVWQVwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBbXCJFVkFcIixcInBsdWdpblwiLFwicmVuZGVyZXJcIixcImV2ZW50XCJdIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBbXCJFVkFcIixcInBsdWdpblwiLFwicmVuZGVyZXJcIixcImdyYXBoaWNzXCJdIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBbXCJFVkFcIixcInBsdWdpblwiLFwicmVuZGVyZXJcIixcImltZ1wiXSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgW1wiRVZBXCIsXCJwbHVnaW5cIixcInJlbmRlcmVyXCIsXCJyZW5kZXJcIl0iLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIFtcIkVWQVwiLFwicGx1Z2luXCIsXCJyZW5kZXJlclwiLFwic3ByaXRlQW5pbWF0aW9uXCJdIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBbXCJFVkFcIixcInBsdWdpblwiLFwicmVuZGVyZXJcIixcInRleHRcIl0iLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIFtcIkVWQVwiLFwicGx1Z2luXCIsXCJyZW5kZXJlclwiXSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgW1wiRVZBXCIsXCJwbHVnaW5cIixcInRyYW5zaXRpb25cIl0iLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUNoQztBQUNmLGlCQUFpQixtREFBVTtBQUMzQixlQUFlLDJCQUEyQjtBQUMxQyxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCx3QkFBd0IseURBQUc7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CeUM7QUFDTTtBQUNoQztBQUNmLG1CQUFtQixtREFBVTtBQUM3QixlQUFlLHdCQUF3QjtBQUN2QyxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCwwQkFBMEIseURBQUc7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCeUM7QUFDTTtBQUNoQztBQUNmLHdCQUF3QixtREFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLCtCQUErQix5REFBRztBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDO0FBQ007QUFDaEM7QUFDZix5QkFBeUIsbURBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsZ0NBQWdDLHlEQUFHO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlDO0FBQytCO0FBQ3pEO0FBQ2YseUJBQXlCLG1EQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCwyQ0FBMkMsa0ZBQWU7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCMEM7QUFDRTtBQUNIO0FBQzFCO0FBQ2Ysb0JBQW9CLG1EQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDZCQUE2QixtREFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCw0QkFBNEIsbURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsNEJBQTRCLG1EQUFlO0FBQzNDLDJCQUEyQixvREFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNpQztBQUNRO0FBQ1U7QUFDTTtBQUNSO0FBQ0c7QUFDckM7QUFDZix5RUFBeUUsaUVBQWlFLEVBQUU7QUFDNUksa0JBQWtCLG1EQUFVLFFBQVEsK0NBQVEsRUFBRTtBQUM5QztBQUNBO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsb0JBQW9CLG1EQUFVO0FBQzlCLHFCQUFxQixtREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCwwQ0FBMEMsbUVBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEMsOERBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQ0FBbUMsNkRBQUs7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGNEM7QUFDNUMsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsY0FBYyw0REFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLDREQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMsNERBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyw0REFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHVFQUE4QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHVFQUE4QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qiw4RUFBOEU7QUFDdkc7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTs7QUFFTztBQUNQLG1DQUFtQyxvQ0FBb0M7QUFDdkU7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxvREFBb0QsUUFBUTtBQUM1RDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQixzRkFBc0YsYUFBYSxFQUFFO0FBQ3RILHNCQUFzQixnQ0FBZ0MscUNBQXFDLDBDQUEwQyxFQUFFLEVBQUUsR0FBRztBQUM1SSwyQkFBMkIsTUFBTSxlQUFlLEVBQUUsWUFBWSxvQkFBb0IsRUFBRTtBQUNwRixzQkFBc0Isb0dBQW9HO0FBQzFILDZCQUE2Qix1QkFBdUI7QUFDcEQsNEJBQTRCLHdCQUF3QjtBQUNwRCwyQkFBMkIseURBQXlEO0FBQ3BGOztBQUVPO0FBQ1A7QUFDQSxpQkFBaUIsNENBQTRDLFNBQVMsRUFBRSxxREFBcUQsYUFBYSxFQUFFO0FBQzVJLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLGdEQUFnRCxnQkFBZ0IsRUFBRSxLQUFLO0FBQ2pKOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDJHQUEyRyxzRkFBc0YsYUFBYSxFQUFFO0FBQ2hOLHNCQUFzQiw4QkFBOEIsZ0RBQWdELHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsc0NBQXNDLFVBQVUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVO0FBQzlIOztBQUVPO0FBQ1AsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxT0EscUI7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDUTtBQUNaO0FBQ1I7QUFDRjtBQUNOO0FBQ1M7QUFDUztBQUNEO0FBQ0k7QUFDcUI7QUFDbkI7QUFDRDtBQUNLO0FBQ1I7QUFDdkQsNkRBQW9CLENBQUMsK0NBQVM7QUFDOUIsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBLFlBQVksZ0VBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsWUFBWSwrREFBUztBQUNyQixZQUFZLHFFQUFnQjtBQUM1QixZQUFZLHlGQUFxQjtBQUNqQyxZQUFZLHNFQUFZO0FBQ3hCLFlBQVksbUVBQVc7QUFDdkIsWUFBWSwwRUFBYztBQUMxQixZQUFZLGtFQUFVO0FBQ3RCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMERBQVU7QUFDckIsU0FBUyx1RUFBaUI7QUFDMUIsVUFBVSx5REFBUztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELG9CQUFvQixnRUFBZ0I7QUFDcEMsb0JBQW9CLGlFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdAZXZhL2V2YS5qcyc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci1pbWcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZCgpIHtcbiAgICB2YXIgYmcgPSBuZXcgR2FtZU9iamVjdCgnYmcnLCB7XG4gICAgICAgIHNpemU6IHsgd2lkdGg6IDc1MCwgaGVpZ2h0OiAxNjI0IH0sXG4gICAgICAgIG9yaWdpbjogeyB4OiAwLjUsIHk6IDEgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAxMjAsXG4gICAgICAgIH0sXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBiZy5hZGRDb21wb25lbnQobmV3IEltZyh7XG4gICAgICAgIHJlc291cmNlOiAnYmcnLFxuICAgIH0pKTtcbiAgICByZXR1cm4gYmc7XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnQGV2YS9ldmEuanMnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAnQGV2YS9wbHVnaW4tcmVuZGVyZXItaW1nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJhbGwocG9zaXRpb24pIHtcbiAgICB2YXIgYmFsbCA9IG5ldyBHYW1lT2JqZWN0KCdiYWxsJywge1xuICAgICAgICBzaXplOiB7IHdpZHRoOiA3OSwgaGVpZ2h0OiA3OSB9LFxuICAgICAgICBvcmlnaW46IHsgeDogMC41LCB5OiAwLjUgfSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGJhbGwuYWRkQ29tcG9uZW50KG5ldyBJbWcoe1xuICAgICAgICByZXNvdXJjZTogJ2Jhc2tldGJhbGwnLFxuICAgIH0pKTtcbiAgICByZXR1cm4gYmFsbDtcbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdAZXZhL2V2YS5qcyc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci1pbWcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmFja2JvYXJkKCkge1xuICAgIHZhciBiYWNrYm9hcmQgPSBuZXcgR2FtZU9iamVjdCgnYmFja2JvYXJkJywge1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMzgsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgYmFja2JvYXJkLmFkZENvbXBvbmVudChuZXcgSW1nKHtcbiAgICAgICAgcmVzb3VyY2U6ICdiYWNrYm9hcmQnLFxuICAgIH0pKTtcbiAgICByZXR1cm4gYmFja2JvYXJkO1xufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJ0BldmEvZXZhLmpzJztcbmltcG9ydCB7IEltZyB9IGZyb20gJ0BldmEvcGx1Z2luLXJlbmRlcmVyLWltZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCYXNrZXRCYWNrKCkge1xuICAgIHZhciBiYXNrZXRCYWNrID0gbmV3IEdhbWVPYmplY3QoJ2Jhc2tldEJhY2snLCB7XG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjYsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1OCxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHg6IDY1LFxuICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGJhc2tldEJhY2suYWRkQ29tcG9uZW50KG5ldyBJbWcoe1xuICAgICAgICByZXNvdXJjZTogJ2Jhc2tldEJhY2snLFxuICAgIH0pKTtcbiAgICByZXR1cm4gYmFza2V0QmFjaztcbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdAZXZhL2V2YS5qcyc7XG5pbXBvcnQgeyBTcHJpdGVBbmltYXRpb24gfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci1zcHJpdGUtYW5pbWF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJhc2tldEZyb250KCkge1xuICAgIHZhciBiYXNldEZyb250ID0gbmV3IEdhbWVPYmplY3QoJ2JvYXJkJywge1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB3aWR0aDogMTY2LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTcsXG4gICAgICAgIH0sXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgIHk6IC03NjAsXG4gICAgICAgIH0sXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgdmFyIGFuaW0gPSBiYXNldEZyb250LmFkZENvbXBvbmVudChuZXcgU3ByaXRlQW5pbWF0aW9uKHtcbiAgICAgICAgcmVzb3VyY2U6ICdib2FyZElkbGUnLFxuICAgICAgICBzcGVlZDogMTAwLFxuICAgIH0pKTtcbiAgICB2YXIgcGxheUFuaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW0ucmVzb3VyY2UgPSAnYm9hcmRHb2FsJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbmltLnJlc291cmNlID0gJ2JvYXJkSWRsZSc7XG4gICAgICAgIH0sIDkwMCk7XG4gICAgfTtcbiAgICByZXR1cm4geyBiYXNldEZyb250OiBiYXNldEZyb250LCBwbGF5QW5pbTogcGxheUFuaW0gfTtcbn1cbiIsImltcG9ydCBjcmVhdGVCYWNrYm9hcmQgZnJvbSAnLi9iYWNrYm9hcmQnO1xuaW1wb3J0IGNyZWF0ZUJhc2tldEJhY2sgZnJvbSAnLi9iYXNrZXRCYWNrJztcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdAZXZhL2V2YS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICB2YXIgYm9hcmQgPSBuZXcgR2FtZU9iamVjdCgnYm9hcmRDb250YWluZXInLCB7XG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHdpZHRoOiA3NTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDE0ODQsXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgYm9hcmRDb250YWluZXIgPSBuZXcgR2FtZU9iamVjdCgnYm9hcmRDb250YWluZXInLCB7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogLTkyMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICB2YXIgYmFja0NvbnRhaW5lciA9IG5ldyBHYW1lT2JqZWN0KCdib2FyZENvbnRhaW5lcicsIHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAtOTIwLFxuICAgICAgICB9LFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKGNyZWF0ZUJhY2tib2FyZCgpKTtcbiAgICBiYWNrQ29udGFpbmVyLmFkZENoaWxkKGNyZWF0ZUJhc2tldEJhY2soKSk7XG4gICAgYm9hcmQuYWRkQ2hpbGQoYmFja0NvbnRhaW5lcik7XG4gICAgYm9hcmQuYWRkQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIHJldHVybiBib2FyZDtcbn1cbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnQGV2YS9ldmEuanMnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci1ldmVudCc7XG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gJ0BldmEvcGx1Z2luLXJlbmRlcmVyLWdyYXBoaWNzJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci10ZXh0JztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdAZXZhL3BsdWdpbi10cmFuc2l0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJ0bihfYSkge1xuICAgIHZhciB0ZXh0ID0gX2EudGV4dCwgX2IgPSBfYS50cmFuc2Zvcm0sIHRyYW5zZm9ybSA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLmNhbGxiYWNrLCBjYWxsYmFjayA9IF9jID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7IH0gOiBfYztcbiAgICB2YXIgYm94ID0gbmV3IEdhbWVPYmplY3QoJ2JveCcsIF9fYXNzaWduKHsgc2l6ZToge1xuICAgICAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgICAgIGhlaWdodDogODAsXG4gICAgICAgIH0gfSwgdHJhbnNmb3JtKSk7XG4gICAgdmFyIGJ0bkdPID0gbmV3IEdhbWVPYmplY3QoJ2J0bicpO1xuICAgIHZhciB0ZXh0R08gPSBuZXcgR2FtZU9iamVjdCgndGV4dCcsIHtcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjUsXG4gICAgICAgIH0sXG4gICAgICAgIG9yaWdpbjoge1xuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC41LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHZhciBncmFwaGljcyA9IGJ0bkdPLmFkZENvbXBvbmVudChuZXcgR3JhcGhpY3MoKSkuZ3JhcGhpY3M7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4RkY0NTEwLCAwLjUpO1xuICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg2LCAweEE2NUEyMik7XG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIDMyMCwgODAsIDgpO1xuICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB0ZXh0R08uYWRkQ29tcG9uZW50KG5ldyBUZXh0KHtcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIGZpbGw6IDB4ZmZmZmZmLFxuICAgICAgICB9LFxuICAgIH0pKTtcbiAgICBib3guYWRkQ2hpbGQoYnRuR08pO1xuICAgIGJveC5hZGRDaGlsZCh0ZXh0R08pO1xuICAgIHZhciB0cmFuc2l0aW9uID0gYm94LmFkZENvbXBvbmVudChuZXcgVHJhbnNpdGlvbih7XG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICBpZGxlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2NhbGUueCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogYm94LnRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbjogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW46ICdlYXNlLWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NjYWxlLnknLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGJveC50cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW46ICdlYXNlLW91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMS4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuOiAnZWFzZS1pbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0pKTtcbiAgICB0cmFuc2l0aW9uLnBsYXkoJ2lkbGUnLCBJbmZpbml0eSk7XG4gICAgdmFyIGV2dCA9IGJveC5hZGRDb21wb25lbnQobmV3IEV2ZW50KTtcbiAgICBldnQub24oJ3RhcCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm94O1xufVxuIiwiaW1wb3J0IHsgUkVTT1VSQ0VfVFlQRSB9IGZyb20gJ0BldmEvZXZhLmpzJztcbmV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdiYXNrZXRiYWxsJyxcbiAgICAgICAgdHlwZTogUkVTT1VSQ0VfVFlQRS5JTUFHRSxcbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwbmcnLFxuICAgICAgICAgICAgICAgIHVybDogJy4vc3RhdGljcy9UQjFXRjFSMEV6MWdLMGpTWkxlWFhiOWtWWGEtOTktOTkucG5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByZWxvYWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdiYWNrYm9hcmQnLFxuICAgICAgICB0eXBlOiBSRVNPVVJDRV9UWVBFLklNQUdFLFxuICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BuZycsXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9zdGF0aWNzL1RCMWExMVlvUkZSNHU0alNaRlBYWGFuekZYYS0xMDktMjYzLnBuZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYmcnLFxuICAgICAgICB0eXBlOiBSRVNPVVJDRV9UWVBFLklNQUdFLFxuICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BuZycsXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9zdGF0aWNzL1RCMTVVcHhxazlsMEs0alNaRktYWFhGanBYYS03NTAtMTYyNC5qcGcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbG9hZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2Jhc2tldEJhY2snLFxuICAgICAgICB0eXBlOiBSRVNPVVJDRV9UWVBFLklNQUdFLFxuICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BuZycsXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9zdGF0aWNzL1RCMVhlcmQwQVkyZ0swalNaRmdYWGM1T0ZYYS0xODQtMTc1LnBuZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmRJZGxlJyxcbiAgICAgICAgdHlwZTogUkVTT1VSQ0VfVFlQRS5TUFJJVEVfQU5JTUFUSU9OLFxuICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BuZycsXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9zdGF0aWNzL1RCMUxZd29uU1IyNmU0alNaRkVYWGJ3dVhYYS05MjAtODc1LnBuZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAganNvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcuL3N0YXRpY3MvMzI0NjI4NDg0MTU5NmQ4N2I2MDc0OWU4OGUwZTI2Y2QuanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmRHb2FsJyxcbiAgICAgICAgdHlwZTogUkVTT1VSQ0VfVFlQRS5TUFJJVEVfQU5JTUFUSU9OLFxuICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BuZycsXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9zdGF0aWNzL1RCMW9iX2MwRVkxZ0swalNaRkNYWGN3cVhYYS01NTItNTI1LnBuZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAganNvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcuL3N0YXRpY3MvZGZlZmRkODY0NzRjZGVkNDRiZGMyMjY1NDlhZTZkODEuanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB0cnVlLFxuICAgIH0sXG5dO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gRVZBOyIsIm1vZHVsZS5leHBvcnRzID0gRVZBLnBsdWdpbi5yZW5kZXJlci5ldmVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IEVWQS5wbHVnaW4ucmVuZGVyZXIuZ3JhcGhpY3M7IiwibW9kdWxlLmV4cG9ydHMgPSBFVkEucGx1Z2luLnJlbmRlcmVyLmltZzsiLCJtb2R1bGUuZXhwb3J0cyA9IEVWQS5wbHVnaW4ucmVuZGVyZXIucmVuZGVyOyIsIm1vZHVsZS5leHBvcnRzID0gRVZBLnBsdWdpbi5yZW5kZXJlci5zcHJpdGVBbmltYXRpb247IiwibW9kdWxlLmV4cG9ydHMgPSBFVkEucGx1Z2luLnJlbmRlcmVyLnRleHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBFVkEucGx1Z2luLnJlbmRlcmVyOyIsIm1vZHVsZS5leHBvcnRzID0gRVZBLnBsdWdpbi50cmFuc2l0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlQmFja2dyb3VuZCBmcm9tICcuL2dhbWVPYmplY3RzL2JhY2tncm91bmQnO1xuaW1wb3J0IGNyZWF0ZUJhc2tldEZyb250IGZyb20gJy4vZ2FtZU9iamVjdHMvYm9hcmQvYmFza2V0RnJvbnQnO1xuaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gJy4vZ2FtZU9iamVjdHMvYm9hcmQvYm9hcmQnO1xuaW1wb3J0IGNyZWF0ZUJhbGwgZnJvbSAnLi9nYW1lT2JqZWN0cy9iYWxsJztcbmltcG9ydCBjcmVhdGVCdG4gZnJvbSAnLi9nYW1lT2JqZWN0cy9idG4nO1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHYW1lLCByZXNvdXJjZSB9IGZyb20gJ0BldmEvZXZhLmpzJztcbmltcG9ydCB7IFJlbmRlcmVyU3lzdGVtIH0gZnJvbSAnQGV2YS9wbHVnaW4tcmVuZGVyZXInO1xuaW1wb3J0IHsgSW1nU3lzdGVtIH0gZnJvbSAnQGV2YS9wbHVnaW4tcmVuZGVyZXItaW1nJztcbmltcG9ydCB7IEV2ZW50U3lzdGVtIH0gZnJvbSAnQGV2YS9wbHVnaW4tcmVuZGVyZXItZXZlbnQnO1xuaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uU3lzdGVtIH0gZnJvbSAnQGV2YS9wbHVnaW4tcmVuZGVyZXItc3ByaXRlLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBSZW5kZXJTeXN0ZW0gfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci1yZW5kZXInO1xuaW1wb3J0IHsgVHJhbnNpdGlvblN5c3RlbSB9IGZyb20gJ0BldmEvcGx1Z2luLXRyYW5zaXRpb24nO1xuaW1wb3J0IHsgR3JhcGhpY3NTeXN0ZW0gfSBmcm9tICdAZXZhL3BsdWdpbi1yZW5kZXJlci1ncmFwaGljcyc7XG5pbXBvcnQgeyBUZXh0U3lzdGVtIH0gZnJvbSAnQGV2YS9wbHVnaW4tcmVuZGVyZXItdGV4dCc7XG5yZXNvdXJjZS5hZGRSZXNvdXJjZShyZXNvdXJjZXMpO1xudmFyIGdhbWUgPSBuZXcgR2FtZSh7XG4gICAgc3lzdGVtczogW1xuICAgICAgICBuZXcgUmVuZGVyZXJTeXN0ZW0oe1xuICAgICAgICAgICAgY2FudmFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyksXG4gICAgICAgICAgICB3aWR0aDogNzUwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNDg0LFxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEltZ1N5c3RlbSgpLFxuICAgICAgICBuZXcgVHJhbnNpdGlvblN5c3RlbSgpLFxuICAgICAgICBuZXcgU3ByaXRlQW5pbWF0aW9uU3lzdGVtKCksXG4gICAgICAgIG5ldyBSZW5kZXJTeXN0ZW0oKSxcbiAgICAgICAgbmV3IEV2ZW50U3lzdGVtKCksXG4gICAgICAgIG5ldyBHcmFwaGljc1N5c3RlbSgpLFxuICAgICAgICBuZXcgVGV4dFN5c3RlbSgpLFxuICAgIF0sXG59KTtcbmdhbWUuc2NlbmUudHJhbnNmb3JtLnNpemUud2lkdGggPSA3NTA7XG5nYW1lLnNjZW5lLnRyYW5zZm9ybS5zaXplLmhlaWdodCA9IDE0ODQ7XG52YXIgcG9zID0ge1xuICAgIHg6IDUwMCxcbiAgICB5OiAxMTAwLFxufTtcbnZhciBiYWxsID0gY3JlYXRlQmFsbChwb3MpO1xudmFyIF9hID0gY3JlYXRlQmFza2V0RnJvbnQoKSwgYmFzZXRGcm9udCA9IF9hLmJhc2V0RnJvbnQsIHBsYXlBbmltID0gX2EucGxheUFuaW07XG52YXIgYnRuID0gY3JlYXRlQnRuKHtcbiAgICB0ZXh0OiAn5oqV55CDJyxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAtMTIwLFxuICAgICAgICB9LFxuICAgICAgICBvcmlnaW46IHtcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuNSxcbiAgICAgICAgfSxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWxlcnQoJ+i/mOayoeWBmuWRou+9nuS4gOi1t+adpeWujOWWhOWQpycpO1xuICAgIH0sXG59KTtcbmdhbWUuc2NlbmUuYWRkQ2hpbGQoY3JlYXRlQmFja2dyb3VuZCgpKTtcbmdhbWUuc2NlbmUuYWRkQ2hpbGQoY3JlYXRlQm9hcmQoKSk7XG5nYW1lLnNjZW5lLmFkZENoaWxkKGJhbGwpO1xuZ2FtZS5zY2VuZS5hZGRDaGlsZChiYXNldEZyb250KTtcbmdhbWUuc2NlbmUuYWRkQ2hpbGQoYnRuKTtcbndpbmRvdy5wbGF5QW5pbSA9IHBsYXlBbmltO1xud2luZG93LmdhbWUgPSBnYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==