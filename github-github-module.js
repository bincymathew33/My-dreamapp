(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["github-github-module"],{

/***/ "./src/app/github/github.module.ts":
/*!*****************************************!*\
  !*** ./src/app/github/github.module.ts ***!
  \*****************************************/
/*! exports provided: GithubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubModule", function() { return GithubModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _githubcomponent_githubcomponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./githubcomponent/githubcomponent.component */ "./src/app/github/githubcomponent/githubcomponent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [{
        path: '',
        component: _githubcomponent_githubcomponent_component__WEBPACK_IMPORTED_MODULE_2__["GithubcomponentComponent"]
    }];
var GithubModule = /** @class */ (function () {
    function GithubModule() {
    }
    GithubModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], GithubModule);
    return GithubModule;
}());



/***/ }),

/***/ "./src/app/github/githubcomponent/githubcomponent.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/github/githubcomponent/githubcomponent.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/github/githubcomponent/githubcomponent.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/github/githubcomponent/githubcomponent.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  githubcomponent works!\n</p>\n"

/***/ }),

/***/ "./src/app/github/githubcomponent/githubcomponent.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/github/githubcomponent/githubcomponent.component.ts ***!
  \*********************************************************************/
/*! exports provided: GithubcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubcomponentComponent", function() { return GithubcomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GithubcomponentComponent = /** @class */ (function () {
    function GithubcomponentComponent() {
    }
    GithubcomponentComponent.prototype.ngOnInit = function () {
    };
    GithubcomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-githubcomponent',
            template: __webpack_require__(/*! ./githubcomponent.component.html */ "./src/app/github/githubcomponent/githubcomponent.component.html"),
            styles: [__webpack_require__(/*! ./githubcomponent.component.css */ "./src/app/github/githubcomponent/githubcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GithubcomponentComponent);
    return GithubcomponentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=github-github-module.js.map