(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nav_comps_db_wrapper_db_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-comps/db-wrapper/db-wrapper.component */ "./src/app/nav-comps/db-wrapper/db-wrapper.component.ts");
/* harmony import */ var _nav_comps_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-comps/persons-list/persons-list.component */ "./src/app/nav-comps/persons-list/persons-list.component.ts");
/* harmony import */ var _nav_comps_star_list_star_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-comps/star-list/star-list.component */ "./src/app/nav-comps/star-list/star-list.component.ts");
/* harmony import */ var _nav_comps_other_c1_other_c1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-comps/other-c1/other-c1.component */ "./src/app/nav-comps/other-c1/other-c1.component.ts");
/* harmony import */ var _nav_comps_other_c2_other_c2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-comps/other-c2/other-c2.component */ "./src/app/nav-comps/other-c2/other-c2.component.ts");
/* harmony import */ var _nav_comps_other_c3_other_c3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-comps/other-c3/other-c3.component */ "./src/app/nav-comps/other-c3/other-c3.component.ts");
/* harmony import */ var _nav_comps_other_wrapper_other_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-comps/other-wrapper/other-wrapper.component */ "./src/app/nav-comps/other-wrapper/other-wrapper.component.ts");
/* harmony import */ var _fix_img_comps_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fix-img-comps/home/home.component */ "./src/app/fix-img-comps/home/home.component.ts");
/* harmony import */ var _fix_img_comps_a_a_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fix-img-comps/a/a.component */ "./src/app/fix-img-comps/a/a.component.ts");
/* harmony import */ var _fix_img_comps_b_b_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fix-img-comps/b/b.component */ "./src/app/fix-img-comps/b/b.component.ts");
/* harmony import */ var _fix_img_comps_c_c_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fix-img-comps/c/c.component */ "./src/app/fix-img-comps/c/c.component.ts");
/* harmony import */ var _life_cycle_c1_show_interfaces_c1_show_interfaces_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./life-cycle/c1-show-interfaces/c1-show-interfaces.component */ "./src/app/life-cycle/c1-show-interfaces/c1-show-interfaces.component.ts");
/* harmony import */ var _life_cycle_c2_show_child_ref_c2_show_child_ref_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./life-cycle/c2-show-child-ref/c2-show-child-ref.component */ "./src/app/life-cycle/c2-show-child-ref/c2-show-child-ref.component.ts");
/* harmony import */ var _life_cycle_c3_value_changes_c3_value_changes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./life-cycle/c3-value-changes/c3-value-changes.component */ "./src/app/life-cycle/c3-value-changes/c3-value-changes.component.ts");
/* harmony import */ var _life_cycle_c4_parent_c4_parent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./life-cycle/c4-parent/c4-parent.component */ "./src/app/life-cycle/c4-parent/c4-parent.component.ts");
/* harmony import */ var _pipes_pipe_comp_pipe_comp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/pipe-comp/pipe-comp.component */ "./src/app/pipes/pipe-comp/pipe-comp.component.ts");




















const routes = [
    { path: 'db', component: _nav_comps_db_wrapper_db_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DbWrapperComponent"],
        children: [
            { path: 'persons', component: _nav_comps_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonsListComponent"] },
            { path: 'stars', component: _nav_comps_star_list_star_list_component__WEBPACK_IMPORTED_MODULE_4__["StarListComponent"] },
            { path: '', redirectTo: 'persons', pathMatch: 'full' },
            { path: '**', redirectTo: 'persons', pathMatch: 'full' },
        ],
    },
    { path: 'fix-img', component: _fix_img_comps_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        children: [
            { path: 'a', component: _fix_img_comps_a_a_component__WEBPACK_IMPORTED_MODULE_10__["AComponent"], data: { pcontent: 'contnet of a', shuki: 'muki' } },
            { path: 'b', component: _fix_img_comps_b_b_component__WEBPACK_IMPORTED_MODULE_11__["BComponent"], data: { pcontent: '' } },
            { path: 'c', component: _fix_img_comps_c_c_component__WEBPACK_IMPORTED_MODULE_12__["CComponent"], data: { pcontent: 'contnet of c' } },
        ],
    },
    { path: 'other', component: _nav_comps_other_wrapper_other_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["OtherWrapperComponent"],
        children: [
            { path: 'c1', component: _nav_comps_other_c1_other_c1_component__WEBPACK_IMPORTED_MODULE_5__["OtherC1Component"] },
            { path: 'c2', component: _nav_comps_other_c2_other_c2_component__WEBPACK_IMPORTED_MODULE_6__["OtherC2Component"] },
            { path: 'c3', component: _nav_comps_other_c3_other_c3_component__WEBPACK_IMPORTED_MODULE_7__["OtherC3Component"] },
            { path: '', redirectTo: 'c1', pathMatch: 'full' },
        ],
    },
    { path: 'life-cycle', component: _nav_comps_other_wrapper_other_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["OtherWrapperComponent"],
        children: [
            { path: 'interfaces', component: _life_cycle_c1_show_interfaces_c1_show_interfaces_component__WEBPACK_IMPORTED_MODULE_13__["C1ShowInterfacesComponent"] },
            { path: 'child-ref', component: _life_cycle_c2_show_child_ref_c2_show_child_ref_component__WEBPACK_IMPORTED_MODULE_14__["C2ShowChildRefComponent"] },
            { path: 'change-value', component: _life_cycle_c3_value_changes_c3_value_changes_component__WEBPACK_IMPORTED_MODULE_15__["C3ValueChangesComponent"] },
            { path: 'parent-child-GS', component: _life_cycle_c4_parent_c4_parent_component__WEBPACK_IMPORTED_MODULE_16__["C4ParentComponent"] },
            { path: '', redirectTo: 'interfaces', pathMatch: 'full' },
        ],
    },
    { path: 'pipes', component: _pipes_pipe_comp_pipe_comp_component__WEBPACK_IMPORTED_MODULE_17__["PipeCompComponent"] },
    { path: '', redirectTo: 'db', pathMatch: 'full' },
    { path: '**', redirectTo: 'db', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'router-avra7';
        this.nonNav = 'c1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 8, consts: [[3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "db");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fix-img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "life-cycle interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "life-cycle child-ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "life-cycle change-value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "life-cycle parent-child-grandson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "db");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "fix-img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "life-cycle/interfaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "life-cycle/child-ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "life-cycle/change-value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "life-cycle/parent-child-GS");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _non_nav_comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./non-nav-comps/c1/c1.component */ "./src/app/non-nav-comps/c1/c1.component.ts");
/* harmony import */ var _non_nav_comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-nav-comps/c2/c2.component */ "./src/app/non-nav-comps/c2/c2.component.ts");
/* harmony import */ var _non_nav_comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./non-nav-comps/c3/c3.component */ "./src/app/non-nav-comps/c3/c3.component.ts");
/* harmony import */ var _nav_comps_star_list_star_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-comps/star-list/star-list.component */ "./src/app/nav-comps/star-list/star-list.component.ts");
/* harmony import */ var _nav_comps_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-comps/persons-list/persons-list.component */ "./src/app/nav-comps/persons-list/persons-list.component.ts");
/* harmony import */ var _nav_comps_db_wrapper_db_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-comps/db-wrapper/db-wrapper.component */ "./src/app/nav-comps/db-wrapper/db-wrapper.component.ts");
/* harmony import */ var _nav_comps_other_wrapper_other_wrapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-comps/other-wrapper/other-wrapper.component */ "./src/app/nav-comps/other-wrapper/other-wrapper.component.ts");
/* harmony import */ var _nav_comps_other_c1_other_c1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-comps/other-c1/other-c1.component */ "./src/app/nav-comps/other-c1/other-c1.component.ts");
/* harmony import */ var _nav_comps_other_c2_other_c2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-comps/other-c2/other-c2.component */ "./src/app/nav-comps/other-c2/other-c2.component.ts");
/* harmony import */ var _nav_comps_other_c3_other_c3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-comps/other-c3/other-c3.component */ "./src/app/nav-comps/other-c3/other-c3.component.ts");
/* harmony import */ var _fix_img_comps_a_a_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fix-img-comps/a/a.component */ "./src/app/fix-img-comps/a/a.component.ts");
/* harmony import */ var _fix_img_comps_b_b_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fix-img-comps/b/b.component */ "./src/app/fix-img-comps/b/b.component.ts");
/* harmony import */ var _fix_img_comps_c_c_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fix-img-comps/c/c.component */ "./src/app/fix-img-comps/c/c.component.ts");
/* harmony import */ var _fix_img_comps_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fix-img-comps/home/home.component */ "./src/app/fix-img-comps/home/home.component.ts");
/* harmony import */ var _life_cycle_c1_show_interfaces_c1_show_interfaces_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./life-cycle/c1-show-interfaces/c1-show-interfaces.component */ "./src/app/life-cycle/c1-show-interfaces/c1-show-interfaces.component.ts");
/* harmony import */ var _life_cycle_c2_show_child_ref_c2_show_child_ref_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./life-cycle/c2-show-child-ref/c2-show-child-ref.component */ "./src/app/life-cycle/c2-show-child-ref/c2-show-child-ref.component.ts");
/* harmony import */ var _life_cycle_c3_value_changes_c3_value_changes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./life-cycle/c3-value-changes/c3-value-changes.component */ "./src/app/life-cycle/c3-value-changes/c3-value-changes.component.ts");
/* harmony import */ var _life_cycle_c4_parent_c4_parent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./life-cycle/c4-parent/c4-parent.component */ "./src/app/life-cycle/c4-parent/c4-parent.component.ts");
/* harmony import */ var _life_cycle_c5_child_c5_child_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./life-cycle/c5-child/c5-child.component */ "./src/app/life-cycle/c5-child/c5-child.component.ts");
/* harmony import */ var _life_cycle_c6_grandson_c6_grandson_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./life-cycle/c6-grandson/c6-grandson.component */ "./src/app/life-cycle/c6-grandson/c6-grandson.component.ts");
/* harmony import */ var _pipes_pipe_comp_pipe_comp_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/pipe-comp/pipe-comp.component */ "./src/app/pipes/pipe-comp/pipe-comp.component.ts");
/* harmony import */ var _pipes_to_int_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/to-int.pipe */ "./src/app/pipes/to-int.pipe.ts");
/* harmony import */ var _pipes_date_to_age_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/date-to-age.pipe */ "./src/app/pipes/date-to-age.pipe.ts");
/* harmony import */ var _pipes_from_service_and_params_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/from-service-and-params.pipe */ "./src/app/pipes/from-service-and-params.pipe.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _non_nav_comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_5__["C1Component"],
        _non_nav_comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_6__["C2Component"],
        _non_nav_comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_7__["C3Component"],
        _nav_comps_star_list_star_list_component__WEBPACK_IMPORTED_MODULE_8__["StarListComponent"],
        _nav_comps_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_9__["PersonsListComponent"],
        _nav_comps_db_wrapper_db_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["DbWrapperComponent"],
        _nav_comps_other_wrapper_other_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["OtherWrapperComponent"],
        _nav_comps_other_c1_other_c1_component__WEBPACK_IMPORTED_MODULE_12__["OtherC1Component"],
        _nav_comps_other_c2_other_c2_component__WEBPACK_IMPORTED_MODULE_13__["OtherC2Component"],
        _nav_comps_other_c3_other_c3_component__WEBPACK_IMPORTED_MODULE_14__["OtherC3Component"],
        _fix_img_comps_a_a_component__WEBPACK_IMPORTED_MODULE_15__["AComponent"],
        _fix_img_comps_b_b_component__WEBPACK_IMPORTED_MODULE_16__["BComponent"],
        _fix_img_comps_c_c_component__WEBPACK_IMPORTED_MODULE_17__["CComponent"],
        _fix_img_comps_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _life_cycle_c1_show_interfaces_c1_show_interfaces_component__WEBPACK_IMPORTED_MODULE_19__["C1ShowInterfacesComponent"],
        _life_cycle_c2_show_child_ref_c2_show_child_ref_component__WEBPACK_IMPORTED_MODULE_20__["C2ShowChildRefComponent"],
        _life_cycle_c3_value_changes_c3_value_changes_component__WEBPACK_IMPORTED_MODULE_21__["C3ValueChangesComponent"],
        _life_cycle_c4_parent_c4_parent_component__WEBPACK_IMPORTED_MODULE_22__["C4ParentComponent"],
        _life_cycle_c5_child_c5_child_component__WEBPACK_IMPORTED_MODULE_23__["C5ChildComponent"],
        _life_cycle_c6_grandson_c6_grandson_component__WEBPACK_IMPORTED_MODULE_24__["C6GrandsonComponent"],
        _pipes_pipe_comp_pipe_comp_component__WEBPACK_IMPORTED_MODULE_25__["PipeCompComponent"],
        _pipes_to_int_pipe__WEBPACK_IMPORTED_MODULE_26__["ToIntPipe"],
        _pipes_date_to_age_pipe__WEBPACK_IMPORTED_MODULE_27__["DateToAgePipe"],
        _pipes_from_service_and_params_pipe__WEBPACK_IMPORTED_MODULE_28__["FromServiceAndParamsPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _non_nav_comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_5__["C1Component"],
                    _non_nav_comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_6__["C2Component"],
                    _non_nav_comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_7__["C3Component"],
                    _nav_comps_star_list_star_list_component__WEBPACK_IMPORTED_MODULE_8__["StarListComponent"],
                    _nav_comps_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_9__["PersonsListComponent"],
                    _nav_comps_db_wrapper_db_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["DbWrapperComponent"],
                    _nav_comps_other_wrapper_other_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["OtherWrapperComponent"],
                    _nav_comps_other_c1_other_c1_component__WEBPACK_IMPORTED_MODULE_12__["OtherC1Component"],
                    _nav_comps_other_c2_other_c2_component__WEBPACK_IMPORTED_MODULE_13__["OtherC2Component"],
                    _nav_comps_other_c3_other_c3_component__WEBPACK_IMPORTED_MODULE_14__["OtherC3Component"],
                    _fix_img_comps_a_a_component__WEBPACK_IMPORTED_MODULE_15__["AComponent"],
                    _fix_img_comps_b_b_component__WEBPACK_IMPORTED_MODULE_16__["BComponent"],
                    _fix_img_comps_c_c_component__WEBPACK_IMPORTED_MODULE_17__["CComponent"],
                    _fix_img_comps_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _life_cycle_c1_show_interfaces_c1_show_interfaces_component__WEBPACK_IMPORTED_MODULE_19__["C1ShowInterfacesComponent"],
                    _life_cycle_c2_show_child_ref_c2_show_child_ref_component__WEBPACK_IMPORTED_MODULE_20__["C2ShowChildRefComponent"],
                    _life_cycle_c3_value_changes_c3_value_changes_component__WEBPACK_IMPORTED_MODULE_21__["C3ValueChangesComponent"],
                    _life_cycle_c4_parent_c4_parent_component__WEBPACK_IMPORTED_MODULE_22__["C4ParentComponent"],
                    _life_cycle_c5_child_c5_child_component__WEBPACK_IMPORTED_MODULE_23__["C5ChildComponent"],
                    _life_cycle_c6_grandson_c6_grandson_component__WEBPACK_IMPORTED_MODULE_24__["C6GrandsonComponent"],
                    _pipes_pipe_comp_pipe_comp_component__WEBPACK_IMPORTED_MODULE_25__["PipeCompComponent"],
                    _pipes_to_int_pipe__WEBPACK_IMPORTED_MODULE_26__["ToIntPipe"],
                    _pipes_date_to_age_pipe__WEBPACK_IMPORTED_MODULE_27__["DateToAgePipe"],
                    _pipes_from_service_and_params_pipe__WEBPACK_IMPORTED_MODULE_28__["FromServiceAndParamsPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fix-img-comps/a/a.component.ts":
/*!************************************************!*\
  !*** ./src/app/fix-img-comps/a/a.component.ts ***!
  \************************************************/
/*! exports provided: AComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AComponent", function() { return AComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AComponent {
    constructor() { }
    ngOnInit() {
    }
}
AComponent.ɵfac = function AComponent_Factory(t) { return new (t || AComponent)(); };
AComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AComponent, selectors: [["app-a"]], decls: 2, vars: 0, template: function AComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "a works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpeC1pbWctY29tcHMvYS9hLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-a',
                templateUrl: './a.component.html',
                styleUrls: ['./a.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fix-img-comps/b/b.component.ts":
/*!************************************************!*\
  !*** ./src/app/fix-img-comps/b/b.component.ts ***!
  \************************************************/
/*! exports provided: BComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BComponent", function() { return BComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BComponent {
    constructor() { }
    ngOnInit() {
    }
}
BComponent.ɵfac = function BComponent_Factory(t) { return new (t || BComponent)(); };
BComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BComponent, selectors: [["app-b"]], decls: 2, vars: 0, template: function BComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "b works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpeC1pbWctY29tcHMvYi9iLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-b',
                templateUrl: './b.component.html',
                styleUrls: ['./b.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fix-img-comps/c/c.component.ts":
/*!************************************************!*\
  !*** ./src/app/fix-img-comps/c/c.component.ts ***!
  \************************************************/
/*! exports provided: CComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CComponent", function() { return CComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CComponent {
    constructor() { }
    ngOnInit() {
    }
}
CComponent.ɵfac = function CComponent_Factory(t) { return new (t || CComponent)(); };
CComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CComponent, selectors: [["app-c"]], decls: 2, vars: 0, template: function CComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpeC1pbWctY29tcHMvYy9jLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c',
                templateUrl: './c.component.html',
                styleUrls: ['./c.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fix-img-comps/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fix-img-comps/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.paragraphContent, "\n");
} }
class HomeComponent {
    constructor(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;
    }
    ngOnInit() {
        /*this.activeRoute.data.subscribe(data =>{
          console.log(data);
          this.paragraphContent = data.data
          
        })*/
        this.router.events.subscribe(ev => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                console.log(this.activeRoute);
                console.log(this.activeRoute.firstChild.snapshot.data);
                this.paragraphContent = this.activeRoute.firstChild.snapshot.data.pcontent;
            }
        });
        //this.outlet.activatedRouteData['data']
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 1, consts: [["routerLink", "a"], ["routerLink", "b"], ["routerLink", "c"], ["class", "pc", 4, "ngIf"], [1, "pc"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I R BANNER!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_p_14_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paragraphContent);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".pc[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 15px;\r\n    background-color: darkblue;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZml4LWltZy1jb21wcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9maXgtaW1nLWNvbXBzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBje1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/life-cycle/c1-show-interfaces/c1-show-interfaces.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/life-cycle/c1-show-interfaces/c1-show-interfaces.component.ts ***!
  \*******************************************************************************/
/*! exports provided: C1ShowInterfacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C1ShowInterfacesComponent", function() { return C1ShowInterfacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class C1ShowInterfacesComponent {
    constructor() {
        console.log('C1ShowInterfacesComponent - constructor');
    }
    ngOnDestroy() {
        console.log('C1ShowInterfacesComponent - ngOnDestroy');
    }
    ngOnChanges(changes) {
        console.log('C1ShowInterfacesComponent - ngOnChanges');
    }
    ngDoCheck() {
        console.log('C1ShowInterfacesComponent - ngDoCheck');
    }
    ngAfterViewInit() {
        console.log('C1ShowInterfacesComponent - ngAfterViewInit');
    }
    ngAfterContentChecked() {
        console.log('C1ShowInterfacesComponent - ngAfterContentChecked');
    }
    ngAfterContentInit() {
        console.log('C1ShowInterfacesComponent - ngAfterContentInit');
    }
    ngAfterViewChecked() {
        console.log('C1ShowInterfacesComponent - ngAfterViewChecked');
    }
    ngOnInit() {
        console.log('C1ShowInterfacesComponent - ngOnInit');
    }
}
C1ShowInterfacesComponent.ɵfac = function C1ShowInterfacesComponent_Factory(t) { return new (t || C1ShowInterfacesComponent)(); };
C1ShowInterfacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C1ShowInterfacesComponent, selectors: [["app-c1-show-interfaces"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, template: function C1ShowInterfacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c1-show-interfaces works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUvYzEtc2hvdy1pbnRlcmZhY2VzL2MxLXNob3ctaW50ZXJmYWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C1ShowInterfacesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c1-show-interfaces',
                templateUrl: './c1-show-interfaces.component.html',
                styleUrls: ['./c1-show-interfaces.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/life-cycle/c2-show-child-ref/c2-show-child-ref.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/life-cycle/c2-show-child-ref/c2-show-child-ref.component.ts ***!
  \*****************************************************************************/
/*! exports provided: C2ShowChildRefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C2ShowChildRefComponent", function() { return C2ShowChildRefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["muDiv"];
class C2ShowChildRefComponent {
    constructor() {
        this.someValue = 0;
        console.log('C2ShowChildRefComponent - constructor', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngOnInit() {
        console.log('C2ShowChildRefComponent - ngOnInit', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngOnChanges(changes) {
        console.log('C2ShowChildRefComponent - ngOnChanges', ++this.someValue, this.muDiv.nativeElement.innerHTML);
    }
    ngDoCheck() {
        console.log('C2ShowChildRefComponent - ngDoCheck', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngAfterContentInit() {
        console.log('C2ShowChildRefComponent - ngAfterContentInit', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngAfterContentChecked() {
        console.log('C2ShowChildRefComponent - ngAfterContentChecked', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngAfterViewInit() {
        //causes error
        //console.log('C2ShowChildRefComponent - ngAfterViewInit',/* ++this.someValue*/);
        console.log('C2ShowChildRefComponent - ngAfterViewInit', 'this.someValue:: ' + this.someValue, 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
    }
    ngAfterViewChecked() {
        //causes error
        //console.log('C2ShowChildRefComponent - ngAfterViewChecked', /*++this.someValue*/);
        console.log('C2ShowChildRefComponent - ngAfterViewChecked', 'this.someValue:: ' + this.someValue, 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
    }
    ngOnDestroy() {
        console.log('C2ShowChildRefComponent - ngOnDestroy', ++this.someValue, this.muDiv.nativeElement.innerHTML);
    }
}
C2ShowChildRefComponent.ɵfac = function C2ShowChildRefComponent_Factory(t) { return new (t || C2ShowChildRefComponent)(); };
C2ShowChildRefComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C2ShowChildRefComponent, selectors: [["app-c2-show-child-ref"]], viewQuery: function C2ShowChildRefComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.muDiv = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 1, consts: [["muDiv", ""]], template: function C2ShowChildRefComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c2-show-child-ref works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("my value ", ctx.someValue, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUvYzItc2hvdy1jaGlsZC1yZWYvYzItc2hvdy1jaGlsZC1yZWYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C2ShowChildRefComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c2-show-child-ref',
                templateUrl: './c2-show-child-ref.component.html',
                styleUrls: ['./c2-show-child-ref.component.css']
            }]
    }], function () { return []; }, { muDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["muDiv"]
        }] }); })();


/***/ }),

/***/ "./src/app/life-cycle/c3-value-changes/c3-value-changes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/life-cycle/c3-value-changes/c3-value-changes.component.ts ***!
  \***************************************************************************/
/*! exports provided: C3ValueChangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3ValueChangesComponent", function() { return C3ValueChangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["muDiv"];
class C3ValueChangesComponent {
    constructor() {
        this.someValue = 0;
        console.log('C3ValueChangesComponent - constructor', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngOnInit() {
        console.log('C3ValueChangesComponent - ngOnInit', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngOnChanges(changes) {
        console.log('C3ValueChangesComponent - ngOnChanges', ++this.someValue, this.muDiv.nativeElement.innerHTML);
    }
    ngDoCheck() {
        console.log('C3ValueChangesComponent - ngDoCheck', ++this.someValue, 'this.muDiv : ', this.muDiv);
        if (this.muDiv) {
            console.log('C3ValueChangesComponent - ngDoCheck', 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
        }
    }
    ngAfterContentInit() {
        console.log('C3ValueChangesComponent - ngAfterContentInit', ++this.someValue, 'this.muDiv : ', this.muDiv);
    }
    ngAfterContentChecked() {
        console.log('C3ValueChangesComponent - ngAfterContentChecked', ++this.someValue, 'this.muDiv : ', this.muDiv);
        if (this.muDiv) {
            console.log('C3ValueChangesComponent - ngAfterContentChecked', 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
        }
    }
    ngAfterViewInit() {
        //causes error
        //console.log('C3ValueChangesComponent - ngAfterViewInit',/* ++this.someValue*/);
        console.log('C3ValueChangesComponent - ngAfterViewInit', 'this.someValue:: ' + this.someValue, 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
    }
    ngAfterViewChecked() {
        //causes error
        //console.log('C3ValueChangesComponent - ngAfterViewChecked', /*++this.someValue*/);
        console.log('C3ValueChangesComponent - ngAfterViewChecked', 'this.someValue:: ' + this.someValue, 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
        if (this.muDiv) {
            console.log('C3ValueChangesComponent - ngAfterViewChecked', 'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
        }
    }
    ngOnDestroy() {
        console.log('C3ValueChangesComponent - ngOnDestroy', ++this.someValue, this.muDiv.nativeElement.innerHTML);
    }
}
C3ValueChangesComponent.ɵfac = function C3ValueChangesComponent_Factory(t) { return new (t || C3ValueChangesComponent)(); };
C3ValueChangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C3ValueChangesComponent, selectors: [["app-c3-value-changes"]], viewQuery: function C3ValueChangesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.muDiv = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 1, consts: [["muDiv", ""], [3, "click"]], template: function C3ValueChangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c3-value-changes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C3ValueChangesComponent_Template_button_click_6_listener() { return ctx.someValue = ctx.someValue + 12; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("my value ", ctx.someValue, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUvYzMtdmFsdWUtY2hhbmdlcy9jMy12YWx1ZS1jaGFuZ2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C3ValueChangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c3-value-changes',
                templateUrl: './c3-value-changes.component.html',
                styleUrls: ['./c3-value-changes.component.css']
            }]
    }], function () { return []; }, { muDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["muDiv"]
        }] }); })();


/***/ }),

/***/ "./src/app/life-cycle/c4-parent/c4-parent.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/life-cycle/c4-parent/c4-parent.component.ts ***!
  \*************************************************************/
/*! exports provided: C4ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4ParentComponent", function() { return C4ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _c5_child_c5_child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../c5-child/c5-child.component */ "./src/app/life-cycle/c5-child/c5-child.component.ts");



class C4ParentComponent {
    constructor() {
        console.log('C4ParentComponent - constructor');
    }
    ngOnDestroy() {
        console.log('C4ParentComponent - ngOnDestroy');
    }
    ngOnChanges(changes) {
        console.log('C4ParentComponent - ngOnChanges');
    }
    ngDoCheck() {
        console.log('C4ParentComponent - ngDoCheck');
    }
    ngAfterViewInit() {
        console.log('C4ParentComponent - ngAfterViewInit');
    }
    ngAfterContentChecked() {
        console.log('C4ParentComponent - ngAfterContentChecked');
    }
    ngAfterContentInit() {
        console.log('C4ParentComponent - ngAfterContentInit');
    }
    ngAfterViewChecked() {
        console.log('C4ParentComponent - ngAfterViewChecked');
    }
    ngOnInit() {
        console.log('C4ParentComponent - ngOnInit');
    }
}
C4ParentComponent.ɵfac = function C4ParentComponent_Factory(t) { return new (t || C4ParentComponent)(); };
C4ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C4ParentComponent, selectors: [["app-c4-parent"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 0, template: function C4ParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c4-parent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-c5-child");
    } }, directives: [_c5_child_c5_child_component__WEBPACK_IMPORTED_MODULE_1__["C5ChildComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUvYzQtcGFyZW50L2M0LXBhcmVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C4ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c4-parent',
                templateUrl: './c4-parent.component.html',
                styleUrls: ['./c4-parent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/life-cycle/c5-child/c5-child.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/life-cycle/c5-child/c5-child.component.ts ***!
  \***********************************************************/
/*! exports provided: C5ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C5ChildComponent", function() { return C5ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _c6_grandson_c6_grandson_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../c6-grandson/c6-grandson.component */ "./src/app/life-cycle/c6-grandson/c6-grandson.component.ts");



class C5ChildComponent {
    constructor() {
        console.log('C5ChildComponent - constructor');
    }
    ngOnDestroy() {
        console.log('C5ChildComponent - ngOnDestroy');
    }
    ngOnChanges(changes) {
        console.log('C5ChildComponent - ngOnChanges');
    }
    ngDoCheck() {
        console.log('C5ChildComponent - ngDoCheck');
    }
    ngAfterViewInit() {
        console.log('C5ChildComponent - ngAfterViewInit');
    }
    ngAfterContentChecked() {
        console.log('C5ChildComponent - ngAfterContentChecked');
    }
    ngAfterContentInit() {
        console.log('C5ChildComponent - ngAfterContentInit');
    }
    ngAfterViewChecked() {
        console.log('C5ChildComponent - ngAfterViewChecked');
    }
    ngOnInit() {
        console.log('C5ChildComponent - ngOnInit');
    }
}
C5ChildComponent.ɵfac = function C5ChildComponent_Factory(t) { return new (t || C5ChildComponent)(); };
C5ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C5ChildComponent, selectors: [["app-c5-child"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 0, template: function C5ChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c5-child works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-c6-grandson");
    } }, directives: [_c6_grandson_c6_grandson_component__WEBPACK_IMPORTED_MODULE_1__["C6GrandsonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUvYzUtY2hpbGQvYzUtY2hpbGQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C5ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c5-child',
                templateUrl: './c5-child.component.html',
                styleUrls: ['./c5-child.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/life-cycle/c6-grandson/c6-grandson.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/life-cycle/c6-grandson/c6-grandson.component.ts ***!
  \*****************************************************************/
/*! exports provided: C6GrandsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C6GrandsonComponent", function() { return C6GrandsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class C6GrandsonComponent {
    constructor() {
        this.counter = 5;
        console.log('C6GrandsonComponent - constructor');
    }
    ngOnDestroy() {
        console.log('C6GrandsonComponent - ngOnDestroy');
    }
    ngOnChanges(changes) {
        console.log('C6GrandsonComponent - ngOnChanges');
    }
    ngDoCheck() {
        console.log('C6GrandsonComponent - ngDoCheck');
    }
    ngAfterViewInit() {
        console.log('C6GrandsonComponent - ngAfterViewInit');
    }
    ngAfterContentChecked() {
        console.log('C6GrandsonComponent - ngAfterContentChecked');
    }
    ngAfterContentInit() {
        console.log('C6GrandsonComponent - ngAfterContentInit');
    }
    ngAfterViewChecked() {
        console.log('C6GrandsonComponent - ngAfterViewChecked');
    }
    ngOnInit() {
        console.log('C6GrandsonComponent - ngOnInit');
    }
}
C6GrandsonComponent.ɵfac = function C6GrandsonComponent_Factory(t) { return new (t || C6GrandsonComponent)(); };
C6GrandsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C6GrandsonComponent, selectors: [["app-c6-grandson"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 1, consts: [[3, "click"]], template: function C6GrandsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c6-grandson works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C6GrandsonComponent_Template_button_click_4_listener() { return ctx.counter = ctx.counter + 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counter);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUvYzYtZ3JhbmRzb24vYzYtZ3JhbmRzb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C6GrandsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c6-grandson',
                templateUrl: './c6-grandson.component.html',
                styleUrls: ['./c6-grandson.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/model/simple-items.ts":
/*!***************************************!*\
  !*** ./src/app/model/simple-items.ts ***!
  \***************************************/
/*! exports provided: Star, Person, DbAjaxResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return Star; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbAjaxResponse", function() { return DbAjaxResponse; });
class Star {
}
class Person {
}
class DbAjaxResponse {
}


/***/ }),

/***/ "./src/app/nav-comps/db-wrapper/db-wrapper.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/nav-comps/db-wrapper/db-wrapper.component.ts ***!
  \**************************************************************/
/*! exports provided: DbWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbWrapperComponent", function() { return DbWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/db-json.service */ "./src/app/services/db-json.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DbWrapperComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
    }
}
DbWrapperComponent.ɵfac = function DbWrapperComponent_Factory(t) { return new (t || DbWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"])); };
DbWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DbWrapperComponent, selectors: [["app-db-wrapper"]], decls: 10, vars: 0, consts: [["routerLink", "persons"], ["routerLink", "stars"]], template: function DbWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "db-wrapper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "persons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9kYi13cmFwcGVyL2RiLXdyYXBwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-db-wrapper',
                templateUrl: './db-wrapper.component.html',
                styleUrls: ['./db-wrapper.component.css']
            }]
    }], function () { return [{ type: src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav-comps/other-c1/other-c1.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/nav-comps/other-c1/other-c1.component.ts ***!
  \**********************************************************/
/*! exports provided: OtherC1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherC1Component", function() { return OtherC1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OtherC1Component {
    constructor() { }
    ngOnInit() {
    }
}
OtherC1Component.ɵfac = function OtherC1Component_Factory(t) { return new (t || OtherC1Component)(); };
OtherC1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherC1Component, selectors: [["app-other-c1"]], decls: 2, vars: 0, template: function OtherC1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "other-c1 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9vdGhlci1jMS9vdGhlci1jMS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherC1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-c1',
                templateUrl: './other-c1.component.html',
                styleUrls: ['./other-c1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-comps/other-c2/other-c2.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/nav-comps/other-c2/other-c2.component.ts ***!
  \**********************************************************/
/*! exports provided: OtherC2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherC2Component", function() { return OtherC2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OtherC2Component {
    constructor() { }
    ngOnInit() {
    }
}
OtherC2Component.ɵfac = function OtherC2Component_Factory(t) { return new (t || OtherC2Component)(); };
OtherC2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherC2Component, selectors: [["app-other-c2"]], decls: 2, vars: 0, template: function OtherC2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "other-c2 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9vdGhlci1jMi9vdGhlci1jMi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherC2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-c2',
                templateUrl: './other-c2.component.html',
                styleUrls: ['./other-c2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-comps/other-c3/other-c3.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/nav-comps/other-c3/other-c3.component.ts ***!
  \**********************************************************/
/*! exports provided: OtherC3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherC3Component", function() { return OtherC3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OtherC3Component {
    constructor() { }
    ngOnInit() {
    }
}
OtherC3Component.ɵfac = function OtherC3Component_Factory(t) { return new (t || OtherC3Component)(); };
OtherC3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherC3Component, selectors: [["app-other-c3"]], decls: 2, vars: 0, template: function OtherC3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "other-c3 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9vdGhlci1jMy9vdGhlci1jMy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherC3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-c3',
                templateUrl: './other-c3.component.html',
                styleUrls: ['./other-c3.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-comps/other-wrapper/other-wrapper.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/nav-comps/other-wrapper/other-wrapper.component.ts ***!
  \********************************************************************/
/*! exports provided: OtherWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherWrapperComponent", function() { return OtherWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class OtherWrapperComponent {
    constructor() { }
    ngOnInit() {
    }
}
OtherWrapperComponent.ɵfac = function OtherWrapperComponent_Factory(t) { return new (t || OtherWrapperComponent)(); };
OtherWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherWrapperComponent, selectors: [["app-other-wrapper"]], decls: 13, vars: 0, consts: [["routerLink", "c1"], ["routerLink", "c2"], ["routerLink", "c3"]], template: function OtherWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "other-wrapper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "c1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "c2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "c3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9vdGhlci13cmFwcGVyL290aGVyLXdyYXBwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-wrapper',
                templateUrl: './other-wrapper.component.html',
                styleUrls: ['./other-wrapper.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-comps/persons-list/persons-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/nav-comps/persons-list/persons-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PersonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsListComponent", function() { return PersonsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/db-json.service */ "./src/app/services/db-json.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PersonsListComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", s_r3.name, " - ", s_r3.age, "");
} }
function PersonsListComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonsListComponent_ul_4_li_1_Template, 2, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.db.db.students);
} }
function PersonsListComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", s_r5.name, " - ", s_r5.age, "");
} }
function PersonsListComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonsListComponent_ul_5_li_1_Template, 2, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.db.db.jiraffs);
} }
class PersonsListComponent {
    constructor(db) {
        this.db = db;
        //students:Person[]
        this.showJirrafs = false;
    }
    ngOnInit() {
        //this.students = this.db.db.students
    }
}
PersonsListComponent.ɵfac = function PersonsListComponent_Factory(t) { return new (t || PersonsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"])); };
PersonsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonsListComponent, selectors: [["app-persons-list"]], decls: 6, vars: 2, consts: [[3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function PersonsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "persons-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonsListComponent_Template_button_click_2_listener() { return ctx.showJirrafs = !ctx.showJirrafs; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "change to jirrafs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PersonsListComponent_ul_4_Template, 2, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PersonsListComponent_ul_5_Template, 2, 1, "ul", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showJirrafs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showJirrafs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9wZXJzb25zLWxpc3QvcGVyc29ucy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-persons-list',
                templateUrl: './persons-list.component.html',
                styleUrls: ['./persons-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav-comps/star-list/star-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nav-comps/star-list/star-list.component.ts ***!
  \************************************************************/
/*! exports provided: StarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListComponent", function() { return StarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/db-json.service */ "./src/app/services/db-json.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function StarListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", s_r1.StarName, " - ", s_r1.StarWeight, "");
} }
class StarListComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
    }
}
StarListComponent.ɵfac = function StarListComponent_Factory(t) { return new (t || StarListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"])); };
StarListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarListComponent, selectors: [["app-star-list"]], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function StarListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StarListComponent_li_3_Template, 2, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.db.db.startInSky);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jb21wcy9zdGFyLWxpc3Qvc3Rhci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-star-list',
                templateUrl: './star-list.component.html',
                styleUrls: ['./star-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/non-nav-comps/c1/c1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/non-nav-comps/c1/c1.component.ts ***!
  \**************************************************/
/*! exports provided: C1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C1Component", function() { return C1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class C1Component {
    constructor() {
        this.counter = 0;
    }
    ngOnInit() {
    }
    incCounter() {
        console.log(++this.counter);
    }
}
C1Component.ɵfac = function C1Component_Factory(t) { return new (t || C1Component)(); };
C1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C1Component, selectors: [["app-c1"]], decls: 4, vars: 0, consts: [[3, "click"]], template: function C1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c1 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1Component_Template_button_click_2_listener() { return ctx.incCounter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "click counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1uYXYtY29tcHMvYzEvYzEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c1',
                templateUrl: './c1.component.html',
                styleUrls: ['./c1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/non-nav-comps/c2/c2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/non-nav-comps/c2/c2.component.ts ***!
  \**************************************************/
/*! exports provided: C2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C2Component", function() { return C2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class C2Component {
    constructor() { }
    ngOnInit() {
    }
}
C2Component.ɵfac = function C2Component_Factory(t) { return new (t || C2Component)(); };
C2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C2Component, selectors: [["app-c2"]], decls: 2, vars: 0, template: function C2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c2 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1uYXYtY29tcHMvYzIvYzIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c2',
                templateUrl: './c2.component.html',
                styleUrls: ['./c2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/non-nav-comps/c3/c3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/non-nav-comps/c3/c3.component.ts ***!
  \**************************************************/
/*! exports provided: C3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3Component", function() { return C3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class C3Component {
    constructor() { }
    ngOnInit() {
    }
}
C3Component.ɵfac = function C3Component_Factory(t) { return new (t || C3Component)(); };
C3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C3Component, selectors: [["app-c3"]], decls: 2, vars: 0, template: function C3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "c3 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1uYXYtY29tcHMvYzMvYzMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c3',
                templateUrl: './c3.component.html',
                styleUrls: ['./c3.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/date-to-age.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/date-to-age.pipe.ts ***!
  \*******************************************/
/*! exports provided: DateToAgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateToAgePipe", function() { return DateToAgePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateToAgePipe {
    transform(value) {
        let y = new Date().getFullYear();
        return y - value.getFullYear();
    }
}
DateToAgePipe.ɵfac = function DateToAgePipe_Factory(t) { return new (t || DateToAgePipe)(); };
DateToAgePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateToAge", type: DateToAgePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateToAgePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateToAge'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/from-service-and-params.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/pipes/from-service-and-params.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FromServiceAndParamsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromServiceAndParamsPipe", function() { return FromServiceAndParamsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_db_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db-json.service */ "./src/app/services/db-json.service.ts");



class FromServiceAndParamsPipe {
    /*"students":[
      { "name":"ariel", "age" : 35},*/
    constructor(svc) {
        this.svc = svc;
        console.log('FromServiceAndParamsPipe constructor');
    }
    //transform(tableName: string, ...args: unknown[]): unknown {
    transform(tableName, index) {
        console.log('FromServiceAndParamsPipe transform');
        //args[0]
        let x = this.svc.db[tableName][index];
        return `<span class="fromSvcPipe">${x.name} - ${x.age}</span>`;
    }
}
FromServiceAndParamsPipe.ɵfac = function FromServiceAndParamsPipe_Factory(t) { return new (t || FromServiceAndParamsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"])); };
FromServiceAndParamsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fromServiceAndParams", type: FromServiceAndParamsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromServiceAndParamsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fromServiceAndParams'
            }]
    }], function () { return [{ type: _services_db_json_service__WEBPACK_IMPORTED_MODULE_1__["DbJsonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/pipe-comp/pipe-comp.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/pipe-comp/pipe-comp.component.ts ***!
  \********************************************************/
/*! exports provided: PipeCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeCompComponent", function() { return PipeCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _to_int_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../to-int.pipe */ "./src/app/pipes/to-int.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _date_to_age_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date-to-age.pipe */ "./src/app/pipes/date-to-age.pipe.ts");
/* harmony import */ var _from_service_and_params_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../from-service-and-params.pipe */ "./src/app/pipes/from-service-and-params.pipe.ts");






class PipeCompComponent {
    constructor() {
        this.today = new Date();
        let d = new Date();
        d.setFullYear(1984);
        this.someBD = d;
    }
    ngOnInit() {
    }
}
PipeCompComponent.ɵfac = function PipeCompComponent_Factory(t) { return new (t || PipeCompComponent)(); };
PipeCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipeCompComponent, selectors: [["app-pipe-comp"]], decls: 31, vars: 32, consts: [[3, "input"], [3, "innerHTML"]], template: function PipeCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pipe-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "toInt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PipeCompComponent_Template_input_input_6_listener($event) { return ctx.ipt1Val = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "toInt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "dateToAge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "fromServiceAndParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "fromServiceAndParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "55"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" toint: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.ipt1Val), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" currency: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, ctx.ipt1Val), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" currency ILS: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 15, ctx.ipt1Val, "ILS"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" date short: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 18, ctx.today, "short"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" date dd/MM/yy: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 21, ctx.today, "dd/MM/yy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" toAge: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, ctx.someBD), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fromServiceAndParams: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 26, "jiraffs", 2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 29, "jiraffs", 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_to_int_pipe__WEBPACK_IMPORTED_MODULE_1__["ToIntPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _date_to_age_pipe__WEBPACK_IMPORTED_MODULE_3__["DateToAgePipe"], _from_service_and_params_pipe__WEBPACK_IMPORTED_MODULE_4__["FromServiceAndParamsPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpcGVzL3BpcGUtY29tcC9waXBlLWNvbXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipeCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pipe-comp',
                templateUrl: './pipe-comp.component.html',
                styleUrls: ['./pipe-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/to-int.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/to-int.pipe.ts ***!
  \**************************************/
/*! exports provided: ToIntPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToIntPipe", function() { return ToIntPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToIntPipe {
    transform(value) {
        let x = parseInt(value);
        console.log('ToIntPipe - ' + value, x);
        if (isNaN(x)) {
            return -1;
        }
        else {
            return x;
        }
    }
}
ToIntPipe.ɵfac = function ToIntPipe_Factory(t) { return new (t || ToIntPipe)(); };
ToIntPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toInt", type: ToIntPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToIntPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toInt'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/ajax.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/ajax.service.ts ***!
  \******************************************/
/*! exports provided: AjaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxService", function() { return AjaxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AjaxService {
    constructor(http) {
        this.http = http;
    }
    ajaxGet(url) {
        return this.http.get(url);
    }
}
AjaxService.ɵfac = function AjaxService_Factory(t) { return new (t || AjaxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AjaxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AjaxService, factory: AjaxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjaxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/db-json.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/db-json.service.ts ***!
  \*********************************************/
/*! exports provided: DbJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbJsonService", function() { return DbJsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_simple_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/simple-items */ "./src/app/model/simple-items.ts");
/* harmony import */ var _ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax.service */ "./src/app/services/ajax.service.ts");




class DbJsonService {
    constructor(ajax) {
        this.ajax = ajax;
        this.db = new _model_simple_items__WEBPACK_IMPORTED_MODULE_1__["DbAjaxResponse"]();
        this.ajax.ajaxGet("https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
            .subscribe(res => {
            this.db = res;
            console.log("DbJsonService", res);
        });
    }
}
DbJsonService.ɵfac = function DbJsonService_Factory(t) { return new (t || DbJsonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"])); };
DbJsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DbJsonService, factory: DbJsonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbJsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu\Desktop\ariel\angular\router-avra7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map