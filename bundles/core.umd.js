(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/add/observable/throw"), require("rxjs/add/operator/catch"), require("rxjs/add/operator/map"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "@angular/common", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/operator/map"], factory);
	else if(typeof exports === 'object')
		exports["ngx-obp-core"] = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/add/observable/throw"), require("rxjs/add/operator/catch"), require("rxjs/add/operator/map"));
	else
		root["ngx-obp-core"] = factory(root["@angular/http"], root["@angular/core"], root["@angular/common"], root["rxjs/add/observable/throw"], root["rxjs/add/operator/catch"], root["rxjs/add/operator/map"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    return Configuration;
}());



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLLECTION_FORMATS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
// RxJS imports according to https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics

// Operators




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_1_2_1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(1);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_1_2_1Service = (function () {
    function Func_1_2_1Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_1_2_1Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_1_2_1Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Posts a comment about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>${authenticationRequiredMessage(false)}</p><p>Authentication is required since the comment is linked with the user.</p>
     * @summary Add comment.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCommentForViewOnTransaction = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCommentForViewOnTransactionWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add the geolocation of the counterparty's registered address</p>
     * @summary Add Corporate Location to Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyCorporateLocation = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyCorporateLocationWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a url that points to the logo of the counterparty</p>
     * @summary Add image url to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyImageUrl = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyImageUrlWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a description of the counter party from the perpestive of the account e.g. My dentist.</p>
     * @summary Add Counterparty More Info
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyMoreInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyMoreInfoWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add open corporates url to other bank account.</p>
     * @summary Add Open Corporates URL to Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyOpenCorporatesUrl = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyOpenCorporatesUrlWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add geocoordinates of the counterparty's main location</p>
     * @summary Add physical location to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyPhysicalLocation = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyPhysicalLocationWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Creates the public alias for the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p><p>Note: Public aliases are automatically generated for new 'other accounts / counterparties', so this call should only be used if the public alias was deleted.</p><p>The VIEW_ID parameter should be a view the caller is permitted to access to and that has permission to create public aliases.</p>
     * @summary Add public alias to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyPublicAlias = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyPublicAliasWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>A url which represents the counterparty (home page url etc.)</p>
     * @summary Add url to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyUrl = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddCounterpartyUrlWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Posts an image about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>Authentication is Mandatory</p><p>The image is linked with the user.</p>
     * @summary Add an image.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddImageForViewOnTransaction = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddImageForViewOnTransactionWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Creates a private alias for the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Create Other Account Private Alias
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddOtherAccountPrivateAlias = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddOtherAccountPrivateAliasWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Grants the user USER_ID at their provider PROVIDER_ID access to a list of views at BANK_ID for account ACCOUNT_ID.</p><p>All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Grant User access to a list of views.
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddPermissionForUserForBankAccountForMultipleViews = function (body, PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddPermissionForUserForBankAccountForMultipleViewsWithHttpInfo(body, PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Grants the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID. All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p><p>Granting access to a public view will return an error message, as the user already has access.</p>
     * @summary Grant User access to View.
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddPermissionForUserForBankAccountForOneView = function (body, PROVIDER_ID, USER_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddPermissionForUserForBankAccountForOneViewWithHttpInfo(body, PROVIDER_ID, USER_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Posts a tag about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>Authentication is Mandatory</p><p>Authentication is required as the tag is linked with the user.</p>
     * @summary Add a tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddTagForViewOnTransaction = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddTagForViewOnTransactionWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Creates a description of the transaction TRANSACTION_ID.</p><p>Note: Unlike other items of metadata, there is only one \"narrative\" per transaction accross all views. If you set narrative via a view e.g. view-x it will be seen via view-y (as long as view-y has permission to see the narrative).</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Add narrative.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddTransactionNarrative = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddTransactionNarrativeWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Creates a \"where\" Geo tag on a transaction TRANSACTION_ID in a <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The geo tag is linked with the user.</p>
     * @summary Add where tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddWhereTagForViewOnTransaction = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121AddWhereTagForViewOnTransactionWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the bank specified by BANK_ID Returns information about a single bank specified by BANK_ID including:</p><ul>  <li>Short and full name of bank</li>  <li>Logo URL</li>  <li>Website</li></ul>
     * @summary Get Bank
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121BankById = function (BANK_ID, extraHttpRequestParams) {
        return this.func121BankByIdWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Delete the comment COMMENT_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the comment.</p>
     * @summary Delete comment.
     * @param COMMENT_ID The comment id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCommentForViewOnTransaction = function (COMMENT_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCommentForViewOnTransactionWithHttpInfo(COMMENT_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Delete corporate location of other bank account. Delete the geolocation of the counterparty's registered address</p>
     * @summary Delete Counterparty Corporate Location.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyCorporateLocation = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyCorporateLocationWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Delete image url of other bank account.</p>
     * @summary Delete Counterparty Image URL
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyImageUrl = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyImageUrlWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete more info of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyMoreInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyMoreInfoWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Delete open corporate url of other bank account.</p>
     * @summary Delete Counterparty Open Corporates URL
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyOpenCorporatesUrl = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyOpenCorporatesUrlWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Delete physical location of other bank account.</p>
     * @summary Delete Counterparty Physical Location.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyPhysicalLocation = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyPhysicalLocationWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the private alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Delete Counterparty Private Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyPrivateAlias = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyPrivateAliasWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the public alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Delete Counterparty Public Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyPublicAlias = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyPublicAliasWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete url of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyUrl = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteCounterpartyUrlWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the image IMAGE_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the image.</p>
     * @summary Delete an image
     * @param IMAGE_ID The image id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteImageForViewOnTransaction = function (IMAGE_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteImageForViewOnTransactionWithHttpInfo(IMAGE_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the tag TAG_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the tag.</p>
     * @summary Delete a tag.
     * @param TAG_ID The tag id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteTagForViewOnTransaction = function (TAG_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteTagForViewOnTransactionWithHttpInfo(TAG_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the description of the transaction TRANSACTION_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Delete narrative.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteTransactionNarrative = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteTransactionNarrativeWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the view specified by VIEW_ID on the bank account specified by ACCOUNT_ID at bank BANK_ID.</p>
     * @summary Delete View
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteViewForBankAccount = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteViewForBankAccountWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Deletes the where tag of the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The user must either have owner privileges for this account, or must be the user that posted the geo tag.</p>
     * @summary Delete where tag.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteWhereTagForViewOnTransaction = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121DeleteWhereTagForViewOnTransactionWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get banks on this API instance Returns a list of banks supported on this server:</p><ul>  <li>ID used as parameter in URLs</li>  <li>Short and full name of bank</li>  <li>Logo URL</li>  <li>Website</li></ul>
     * @summary Get Banks
     */
    Func_1_2_1Service.prototype.func121GetBanks = function (extraHttpRequestParams) {
        return this.func121GetBanksWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the transaction TRANSACTION_ID comments made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get comments.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetCommentsForViewOnTransaction = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetCommentsForViewOnTransactionWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the public alias of the other account OTHER_ACCOUNT_ID. Authentication is Optional OAuth authentication is required if the view is not public.</p>
     * @summary Get public alias of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetCounterpartyPublicAlias = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetCounterpartyPublicAliasWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the transaction TRANSACTION_ID images made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get images.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetImagesForViewOnTransaction = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetImagesForViewOnTransactionWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns data about the Other Account that has shared at least one transaction with ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Other Account by Id.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountByIdForBankAccount = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetOtherAccountByIdForBankAccountWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get other account of a transaction. Returns details of the other party involved in the transaction, moderated by the <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get Other Account of Transaction
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountForTransaction = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetOtherAccountForTransactionWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get metadata of one other account. Returns only the metadata about one other bank account (OTHER_ACCOUNT_ID) that had shared at least one transaction with ACCOUNT_ID at BANK_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get Other Account Metadata.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountMetadata = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetOtherAccountMetadataWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the private alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Other Account Private Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountPrivateAlias = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetOtherAccountPrivateAliasWithHttpInfo(OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns data about all the other accounts that have shared at least one transaction with the ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view VIEW_ID is not public.</p>
     * @summary Get Other Accounts of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountsForBankAccount = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetOtherAccountsForBankAccountWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the transaction TRANSACTION_ID tags made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get tags.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetTagsForViewOnTransaction = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetTagsForViewOnTransactionWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns one transaction specified by TRANSACTION_ID of the account ACCOUNT_ID and <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view (VIEW_ID).</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Transaction by Id.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetTransactionByIdForBankAccount = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetTransactionByIdForBankAccountWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the account owner description of the transaction <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get narrative.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetTransactionNarrative = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetTransactionNarrativeWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the \"where\" Geo tag added to the transaction TRANSACTION_ID made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID). It represents the location where the transaction has been initiated.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get where tag.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetWhereTagForViewOnTransaction = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121GetWhereTagForViewOnTransactionWithHttpInfo(TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Revokes the user USER_ID at their provider PROVIDER_ID access to all the views at BANK_ID for account ACCOUNT_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Revoke access to all Views on Account
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121RemovePermissionForUserForBankAccountForAllViews = function (PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121RemovePermissionForUserForBankAccountForAllViewsWithHttpInfo(PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Revokes the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID.</p><p>Revoking a user access to a public view will return an error message.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Revoke access to one View.
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121RemovePermissionForUserForBankAccountForOneView = function (PROVIDER_ID, USER_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121RemovePermissionForUserForBankAccountForOneViewWithHttpInfo(PROVIDER_ID, USER_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about:</p><ul>  <li>API version</li>  <li>Hosted by information</li>  <li>Git Commit</li></ul>
     * @summary The root of the API
     */
    Func_1_2_1Service.prototype.func121Root = function (extraHttpRequestParams) {
        return this.func121RootWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update the label for the account. The label is how the account is known to the account owner e.g. 'My savings account' </p>
     * @summary Update Account Label.
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateAccountLabel = function (body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateAccountLabelWithHttpInfo(body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update the geolocation of the counterparty's registered address</p>
     * @summary Update Counterparty Corporate Location
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyCorporateLocation = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyCorporateLocationWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update the url that points to the logo of the counterparty</p>
     * @summary Update Counterparty Image Url
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyImageUrl = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyImageUrlWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update the more info description of the counter party from the perpestive of the account e.g. My dentist.</p>
     * @summary Update Counterparty More Info
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyMoreInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyMoreInfoWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update open corporate url of other bank account.</p>
     * @summary Update Open Corporates Url of Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyOpenCorporatesUrl = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyOpenCorporatesUrlWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update geocoordinates of the counterparty's main location</p>
     * @summary Update Counterparty Physical Location
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyPhysicalLocation = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyPhysicalLocationWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Updates the private alias of the counterparty (AKA other account) OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Update Counterparty Private Alias
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyPrivateAlias = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyPrivateAliasWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Updates the public alias of the other account / counterparty OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Update public alias of other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyPublicAlias = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyPublicAliasWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>A url which represents the counterparty (home page url etc.)</p>
     * @summary Update url of other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyUrl = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateCounterpartyUrlWithHttpInfo(body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Updates the description of the transaction TRANSACTION_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Update narrative.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateTransactionNarrative = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateTransactionNarrativeWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Updates the \"where\" Geo tag on a transaction TRANSACTION_ID in a <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The geo tag is linked with the user.</p>
     * @summary Update where tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateWhereTagForViewOnTransaction = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func121UpdateWhereTagForViewOnTransactionWithHttpInfo(body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Add comment.
     * &lt;p&gt;Posts a comment about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;${authenticationRequiredMessage(false)}&lt;/p&gt;&lt;p&gt;Authentication is required since the comment is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCommentForViewOnTransactionWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/comments'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCommentForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121AddCommentForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCommentForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCommentForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCommentForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add Corporate Location to Counterparty
     * &lt;p&gt;Add the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyCorporateLocationWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/corporate_location'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyCorporateLocation.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyCorporateLocation.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyCorporateLocation.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyCorporateLocation.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyCorporateLocation.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add image url to other bank account.
     * &lt;p&gt;Add a url that points to the logo of the counterparty&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyImageUrlWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/image_url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyImageUrl.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyImageUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyImageUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyImageUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyImageUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add Counterparty More Info
     * &lt;p&gt;Add a description of the counter party from the perpestive of the account e.g. My dentist.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyMoreInfoWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/more_info'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyMoreInfo.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyMoreInfo.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyMoreInfo.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyMoreInfo.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyMoreInfo.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add Open Corporates URL to Counterparty
     * &lt;p&gt;Add open corporates url to other bank account.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyOpenCorporatesUrlWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/open_corporates_url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyOpenCorporatesUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add physical location to other bank account.
     * &lt;p&gt;Add geocoordinates of the counterparty&#39;s main location&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyPhysicalLocationWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/physical_location'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyPhysicalLocation.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add public alias to other bank account.
     * &lt;p&gt;Creates the public alias for the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;&lt;p&gt;Note: Public aliases are automatically generated for new &#39;other accounts / counterparties&#39;, so this call should only be used if the public alias was deleted.&lt;/p&gt;&lt;p&gt;The VIEW_ID parameter should be a view the caller is permitted to access to and that has permission to create public aliases.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyPublicAliasWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/public_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyPublicAlias.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyPublicAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyPublicAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyPublicAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyPublicAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add url to other bank account.
     * &lt;p&gt;A url which represents the counterparty (home page url etc.)&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddCounterpartyUrlWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddCounterpartyUrl.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddCounterpartyUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddCounterpartyUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddCounterpartyUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddCounterpartyUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add an image.
     * &lt;p&gt;Posts an image about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The image is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddImageForViewOnTransactionWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/images'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddImageForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121AddImageForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddImageForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddImageForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddImageForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Other Account Private Alias
     * &lt;p&gt;Creates a private alias for the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddOtherAccountPrivateAliasWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/private_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddOtherAccountPrivateAlias.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121AddOtherAccountPrivateAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddOtherAccountPrivateAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddOtherAccountPrivateAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddOtherAccountPrivateAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Grant User access to a list of views.
     * &lt;p&gt;Grants the user USER_ID at their provider PROVIDER_ID access to a list of views at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddPermissionForUserForBankAccountForMultipleViewsWithHttpInfo = function (body, PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/permissions/${PROVIDER_ID}/${USER_ID}/views'
            .replace('${' + 'PROVIDER_ID' + '}', String(PROVIDER_ID))
            .replace('${' + 'USER_ID' + '}', String(USER_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddPermissionForUserForBankAccountForMultipleViews.');
        }
        // verify required parameter 'PROVIDER_ID' is not null or undefined
        if (PROVIDER_ID === null || PROVIDER_ID === undefined) {
            throw new Error('Required parameter PROVIDER_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForMultipleViews.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForMultipleViews.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForMultipleViews.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForMultipleViews.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Grant User access to View.
     * &lt;p&gt;Grants the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID. All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;&lt;p&gt;Granting access to a public view will return an error message, as the user already has access.&lt;/p&gt;
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddPermissionForUserForBankAccountForOneViewWithHttpInfo = function (body, PROVIDER_ID, USER_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/permissions/${PROVIDER_ID}/${USER_ID}/views/${VIEW_ID}'
            .replace('${' + 'PROVIDER_ID' + '}', String(PROVIDER_ID))
            .replace('${' + 'USER_ID' + '}', String(USER_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddPermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'PROVIDER_ID' is not null or undefined
        if (PROVIDER_ID === null || PROVIDER_ID === undefined) {
            throw new Error('Required parameter PROVIDER_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddPermissionForUserForBankAccountForOneView.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add a tag.
     * &lt;p&gt;Posts a tag about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;Authentication is required as the tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddTagForViewOnTransactionWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/tags'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddTagForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121AddTagForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddTagForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddTagForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddTagForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add narrative.
     * &lt;p&gt;Creates a description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Note: Unlike other items of metadata, there is only one \&quot;narrative\&quot; per transaction accross all views. If you set narrative via a view e.g. view-x it will be seen via view-y (as long as view-y has permission to see the narrative).&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddTransactionNarrativeWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/narrative'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddTransactionNarrative.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121AddTransactionNarrative.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddTransactionNarrative.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddTransactionNarrative.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddTransactionNarrative.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add where tag.
     * &lt;p&gt;Creates a \&quot;where\&quot; Geo tag on a transaction TRANSACTION_ID in a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The geo tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121AddWhereTagForViewOnTransactionWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/where'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121AddWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121AddWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121AddWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121AddWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121AddWhereTagForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Bank
     * &lt;p&gt;Get the bank specified by BANK_ID Returns information about a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Short and full name of bank&lt;/li&gt;  &lt;li&gt;Logo URL&lt;/li&gt;  &lt;li&gt;Website&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121BankByIdWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121BankById.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete comment.
     * &lt;p&gt;Delete the comment COMMENT_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the comment.&lt;/p&gt;
     * @param COMMENT_ID The comment id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCommentForViewOnTransactionWithHttpInfo = function (COMMENT_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/comments/${COMMENT_ID}'
            .replace('${' + 'COMMENT_ID' + '}', String(COMMENT_ID))
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'COMMENT_ID' is not null or undefined
        if (COMMENT_ID === null || COMMENT_ID === undefined) {
            throw new Error('Required parameter COMMENT_ID was null or undefined when calling func121DeleteCommentForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121DeleteCommentForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCommentForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCommentForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCommentForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Counterparty Corporate Location.
     * &lt;p&gt;Delete corporate location of other bank account. Delete the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyCorporateLocationWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/corporate_location'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyCorporateLocation.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyCorporateLocation.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyCorporateLocation.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyCorporateLocation.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Counterparty Image URL
     * &lt;p&gt;Delete image url of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyImageUrlWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/image_url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyImageUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyImageUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyImageUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyImageUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete more info of other bank account.
     *
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyMoreInfoWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/more_info'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyMoreInfo.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyMoreInfo.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyMoreInfo.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyMoreInfo.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Counterparty Open Corporates URL
     * &lt;p&gt;Delete open corporate url of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyOpenCorporatesUrlWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/open_corporates_url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyOpenCorporatesUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Counterparty Physical Location.
     * &lt;p&gt;Delete physical location of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyPhysicalLocationWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/physical_location'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyPhysicalLocation.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Counterparty Private Alias
     * &lt;p&gt;Deletes the private alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyPrivateAliasWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/private_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyPrivateAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyPrivateAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyPrivateAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyPrivateAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Counterparty Public Alias
     * &lt;p&gt;Deletes the public alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyPublicAliasWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/public_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyPublicAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyPublicAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyPublicAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyPublicAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete url of other bank account.
     *
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteCounterpartyUrlWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteCounterpartyUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteCounterpartyUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteCounterpartyUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete an image
     * &lt;p&gt;Deletes the image IMAGE_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the image.&lt;/p&gt;
     * @param IMAGE_ID The image id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteImageForViewOnTransactionWithHttpInfo = function (IMAGE_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/images/${IMAGE_ID}'
            .replace('${' + 'IMAGE_ID' + '}', String(IMAGE_ID))
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'IMAGE_ID' is not null or undefined
        if (IMAGE_ID === null || IMAGE_ID === undefined) {
            throw new Error('Required parameter IMAGE_ID was null or undefined when calling func121DeleteImageForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121DeleteImageForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteImageForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteImageForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteImageForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a tag.
     * &lt;p&gt;Deletes the tag TAG_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the tag.&lt;/p&gt;
     * @param TAG_ID The tag id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteTagForViewOnTransactionWithHttpInfo = function (TAG_ID, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/tags/${TAG_ID}'
            .replace('${' + 'TAG_ID' + '}', String(TAG_ID))
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TAG_ID' is not null or undefined
        if (TAG_ID === null || TAG_ID === undefined) {
            throw new Error('Required parameter TAG_ID was null or undefined when calling func121DeleteTagForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121DeleteTagForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteTagForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteTagForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteTagForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete narrative.
     * &lt;p&gt;Deletes the description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteTransactionNarrativeWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/narrative'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121DeleteTransactionNarrative.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteTransactionNarrative.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteTransactionNarrative.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteTransactionNarrative.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete View
     * &lt;p&gt;Deletes the view specified by VIEW_ID on the bank account specified by ACCOUNT_ID at bank BANK_ID.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteViewForBankAccountWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/views/${VIEW_ID}'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteViewForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteViewForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteViewForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete where tag.
     * &lt;p&gt;Deletes the where tag of the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The user must either have owner privileges for this account, or must be the user that posted the geo tag.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121DeleteWhereTagForViewOnTransactionWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/where'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121DeleteWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121DeleteWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121DeleteWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121DeleteWhereTagForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Banks
     * &lt;p&gt;Get banks on this API instance Returns a list of banks supported on this server:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;ID used as parameter in URLs&lt;/li&gt;  &lt;li&gt;Short and full name of bank&lt;/li&gt;  &lt;li&gt;Logo URL&lt;/li&gt;  &lt;li&gt;Website&lt;/li&gt;&lt;/ul&gt;
     */
    Func_1_2_1Service.prototype.func121GetBanksWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/banks';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get comments.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID comments made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetCommentsForViewOnTransactionWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/comments'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetCommentsForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetCommentsForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetCommentsForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetCommentsForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get public alias of other bank account.
     * &lt;p&gt;Returns the public alias of the other account OTHER_ACCOUNT_ID. Authentication is Optional OAuth authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetCounterpartyPublicAliasWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/public_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121GetCounterpartyPublicAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetCounterpartyPublicAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetCounterpartyPublicAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetCounterpartyPublicAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get images.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID images made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetImagesForViewOnTransactionWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/images'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetImagesForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetImagesForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetImagesForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetImagesForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Other Account by Id.
     * &lt;p&gt;Returns data about the Other Account that has shared at least one transaction with ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountByIdForBankAccountWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121GetOtherAccountByIdForBankAccount.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetOtherAccountByIdForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetOtherAccountByIdForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetOtherAccountByIdForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Other Account of Transaction
     * &lt;p&gt;Get other account of a transaction. Returns details of the other party involved in the transaction, moderated by the &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountForTransactionWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/other_account'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetOtherAccountForTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetOtherAccountForTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetOtherAccountForTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetOtherAccountForTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Other Account Metadata.
     * &lt;p&gt;Get metadata of one other account. Returns only the metadata about one other bank account (OTHER_ACCOUNT_ID) that had shared at least one transaction with ACCOUNT_ID at BANK_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountMetadataWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121GetOtherAccountMetadata.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetOtherAccountMetadata.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetOtherAccountMetadata.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetOtherAccountMetadata.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Other Account Private Alias
     * &lt;p&gt;Returns the private alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountPrivateAliasWithHttpInfo = function (OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/private_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121GetOtherAccountPrivateAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetOtherAccountPrivateAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetOtherAccountPrivateAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetOtherAccountPrivateAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Other Accounts of one Account.
     * &lt;p&gt;Returns data about all the other accounts that have shared at least one transaction with the ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view VIEW_ID is not public.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetOtherAccountsForBankAccountWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetOtherAccountsForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetOtherAccountsForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetOtherAccountsForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get tags.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID tags made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetTagsForViewOnTransactionWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/tags'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetTagsForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetTagsForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetTagsForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetTagsForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Transaction by Id.
     * &lt;p&gt;Returns one transaction specified by TRANSACTION_ID of the account ACCOUNT_ID and &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetTransactionByIdForBankAccountWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/transaction'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetTransactionByIdForBankAccount.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetTransactionByIdForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetTransactionByIdForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetTransactionByIdForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get narrative.
     * &lt;p&gt;Returns the account owner description of the transaction &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetTransactionNarrativeWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/narrative'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetTransactionNarrative.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetTransactionNarrative.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetTransactionNarrative.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetTransactionNarrative.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get where tag.
     * &lt;p&gt;Returns the \&quot;where\&quot; Geo tag added to the transaction TRANSACTION_ID made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID). It represents the location where the transaction has been initiated.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121GetWhereTagForViewOnTransactionWithHttpInfo = function (TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/where'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121GetWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121GetWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121GetWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121GetWhereTagForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Revoke access to all Views on Account
     * &lt;p&gt;Revokes the user USER_ID at their provider PROVIDER_ID access to all the views at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121RemovePermissionForUserForBankAccountForAllViewsWithHttpInfo = function (PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/permissions/${PROVIDER_ID}/${USER_ID}/views'
            .replace('${' + 'PROVIDER_ID' + '}', String(PROVIDER_ID))
            .replace('${' + 'USER_ID' + '}', String(USER_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'PROVIDER_ID' is not null or undefined
        if (PROVIDER_ID === null || PROVIDER_ID === undefined) {
            throw new Error('Required parameter PROVIDER_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForAllViews.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForAllViews.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForAllViews.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForAllViews.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Revoke access to one View.
     * &lt;p&gt;Revokes the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Revoking a user access to a public view will return an error message.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121RemovePermissionForUserForBankAccountForOneViewWithHttpInfo = function (PROVIDER_ID, USER_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/permissions/${PROVIDER_ID}/${USER_ID}/views/${VIEW_ID}'
            .replace('${' + 'PROVIDER_ID' + '}', String(PROVIDER_ID))
            .replace('${' + 'USER_ID' + '}', String(USER_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'PROVIDER_ID' is not null or undefined
        if (PROVIDER_ID === null || PROVIDER_ID === undefined) {
            throw new Error('Required parameter PROVIDER_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForOneView.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121RemovePermissionForUserForBankAccountForOneView.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * The root of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;API version&lt;/li&gt;  &lt;li&gt;Hosted by information&lt;/li&gt;  &lt;li&gt;Git Commit&lt;/li&gt;&lt;/ul&gt;
     */
    Func_1_2_1Service.prototype.func121RootWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/root';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Account Label.
     * &lt;p&gt;Update the label for the account. The label is how the account is known to the account owner e.g. &#39;My savings account&#39; &lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateAccountLabelWithHttpInfo = function (body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateAccountLabel.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateAccountLabel.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateAccountLabel.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Counterparty Corporate Location
     * &lt;p&gt;Update the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyCorporateLocationWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/corporate_location'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyCorporateLocation.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyCorporateLocation.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyCorporateLocation.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyCorporateLocation.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyCorporateLocation.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Counterparty Image Url
     * &lt;p&gt;Update the url that points to the logo of the counterparty&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyImageUrlWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/image_url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyImageUrl.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyImageUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyImageUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyImageUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyImageUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Counterparty More Info
     * &lt;p&gt;Update the more info description of the counter party from the perpestive of the account e.g. My dentist.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyMoreInfoWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/more_info'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyMoreInfo.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyMoreInfo.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyMoreInfo.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyMoreInfo.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyMoreInfo.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Open Corporates Url of Counterparty
     * &lt;p&gt;Update open corporate url of other bank account.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyOpenCorporatesUrlWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/open_corporates_url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyOpenCorporatesUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyOpenCorporatesUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Counterparty Physical Location
     * &lt;p&gt;Update geocoordinates of the counterparty&#39;s main location&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyPhysicalLocationWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/physical_location'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyPhysicalLocation.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyPhysicalLocation.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Counterparty Private Alias
     * &lt;p&gt;Updates the private alias of the counterparty (AKA other account) OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyPrivateAliasWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/private_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyPrivateAlias.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyPrivateAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyPrivateAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyPrivateAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyPrivateAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update public alias of other bank account.
     * &lt;p&gt;Updates the public alias of the other account / counterparty OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyPublicAliasWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/public_alias'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyPublicAlias.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyPublicAlias.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyPublicAlias.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyPublicAlias.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyPublicAlias.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update url of other bank account.
     * &lt;p&gt;A url which represents the counterparty (home page url etc.)&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateCounterpartyUrlWithHttpInfo = function (body, OTHER_ACCOUNT_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/other_accounts/${OTHER_ACCOUNT_ID}/metadata/url'
            .replace('${' + 'OTHER_ACCOUNT_ID' + '}', String(OTHER_ACCOUNT_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateCounterpartyUrl.');
        }
        // verify required parameter 'OTHER_ACCOUNT_ID' is not null or undefined
        if (OTHER_ACCOUNT_ID === null || OTHER_ACCOUNT_ID === undefined) {
            throw new Error('Required parameter OTHER_ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyUrl.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateCounterpartyUrl.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateCounterpartyUrl.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateCounterpartyUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update narrative.
     * &lt;p&gt;Updates the description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateTransactionNarrativeWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/narrative'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateTransactionNarrative.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121UpdateTransactionNarrative.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateTransactionNarrative.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateTransactionNarrative.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateTransactionNarrative.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update where tag.
     * &lt;p&gt;Updates the \&quot;where\&quot; Geo tag on a transaction TRANSACTION_ID in a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The geo tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_2_1Service.prototype.func121UpdateWhereTagForViewOnTransactionWithHttpInfo = function (body, TRANSACTION_ID, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions/${TRANSACTION_ID}/metadata/where'
            .replace('${' + 'TRANSACTION_ID' + '}', String(TRANSACTION_ID))
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func121UpdateWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'TRANSACTION_ID' is not null or undefined
        if (TRANSACTION_ID === null || TRANSACTION_ID === undefined) {
            throw new Error('Required parameter TRANSACTION_ID was null or undefined when calling func121UpdateWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func121UpdateWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func121UpdateWhereTagForViewOnTransaction.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func121UpdateWhereTagForViewOnTransaction.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_1_2_1Service;
}());
Func_1_2_1Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], Func_1_2_1Service);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_1_3_0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(1);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_1_3_0Service = (function () {
    function Func_1_3_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_1_3_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_1_3_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.</p>
     * @summary Get cards for the current user
     */
    Func_1_3_0Service.prototype.func130GetCards = function (extraHttpRequestParams) {
        return this.func130GetCardsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get cards for the specified bank
     * @param BANK_ID The bank id
     */
    Func_1_3_0Service.prototype.func130GetCardsForBank = function (BANK_ID, extraHttpRequestParams) {
        return this.func130GetCardsForBankWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get cards for the current user
     * &lt;p&gt;Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.&lt;/p&gt;
     */
    Func_1_3_0Service.prototype.func130GetCardsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/cards';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get cards for the specified bank
     *
     * @param BANK_ID The bank id
     */
    Func_1_3_0Service.prototype.func130GetCardsForBankWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/cards'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func130GetCardsForBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_1_3_0Service;
}());
Func_1_3_0Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], Func_1_3_0Service);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_1_4_0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(1);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_1_4_0Service = (function () {
    function Func_1_4_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_1_4_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_1_4_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Add a message for the customer specified by CUSTOMER_ID</p>
     * @summary Add Customer Message.
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140AddCustomerMessage = function (body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func140AddCustomerMessageWithHttpInfo(body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get CRM Events for the logged in user
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140GetCrmEvents = function (BANK_ID, extraHttpRequestParams) {
        return this.func140GetCrmEventsWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get messages for the logged in customer Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p>
     * @summary Get Customer Messages (current)
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140GetCustomerMessages = function (BANK_ID, extraHttpRequestParams) {
        return this.func140GetCustomerMessagesWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the Transation Request Types that the account specified by ACCOUNT_ID and view specified by VIEW_ID has access to.</p><p>These are the ways this API Server can create a Transaction via a Transaction Request (as opposed to Transaction Types which include external types too e.g. for Transactions created by core banking etc.)</p><p>A Transaction Request Type internally determines:</p><ul>  <li>the required Transaction Request 'body' i.e. fields that define the 'what' and 'to' of a Transaction Request,</li>  <li>the type of security challenge that may be be raised before the Transaction Request proceeds, and</li>  <li>the threshold of that challenge.</li></ul><p>For instance in a 'SANDBOX_TAN' Transaction Request, for amounts over 1000 currency units, the user must supply a positive integer to complete the Transaction Request and create a Transaction.</p><p>This approach aims to provide only one endpoint for initiating transactions, and one that handles challenges, whilst still allowing flexibility with the payload and internal logic.</p>
     * @summary Get Transaction Request Types for Account
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140GetTransactionRequestTypes = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func140GetTransactionRequestTypesWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Add Customer Message.
     * &lt;p&gt;Add a message for the customer specified by CUSTOMER_ID&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140AddCustomerMessageWithHttpInfo = function (body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customer/${CUSTOMER_ID}/messages'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func140AddCustomerMessage.');
        }
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func140AddCustomerMessage.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func140AddCustomerMessage.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get CRM Events for the logged in user
     *
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140GetCrmEventsWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/crm-events'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func140GetCrmEvents.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Customer Messages (current)
     * &lt;p&gt;Get messages for the logged in customer Messages sent to the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140GetCustomerMessagesWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customer/messages'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func140GetCustomerMessages.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Transaction Request Types for Account
     * &lt;p&gt;Returns the Transation Request Types that the account specified by ACCOUNT_ID and view specified by VIEW_ID has access to.&lt;/p&gt;&lt;p&gt;These are the ways this API Server can create a Transaction via a Transaction Request (as opposed to Transaction Types which include external types too e.g. for Transactions created by core banking etc.)&lt;/p&gt;&lt;p&gt;A Transaction Request Type internally determines:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;the required Transaction Request &#39;body&#39; i.e. fields that define the &#39;what&#39; and &#39;to&#39; of a Transaction Request,&lt;/li&gt;  &lt;li&gt;the type of security challenge that may be be raised before the Transaction Request proceeds, and&lt;/li&gt;  &lt;li&gt;the threshold of that challenge.&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;For instance in a &#39;SANDBOX_TAN&#39; Transaction Request, for amounts over 1000 currency units, the user must supply a positive integer to complete the Transaction Request and create a Transaction.&lt;/p&gt;&lt;p&gt;This approach aims to provide only one endpoint for initiating transactions, and one that handles challenges, whilst still allowing flexibility with the payload and internal logic.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_1_4_0Service.prototype.func140GetTransactionRequestTypesWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transaction-request-types'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func140GetTransactionRequestTypes.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func140GetTransactionRequestTypes.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func140GetTransactionRequestTypes.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_1_4_0Service;
}());
Func_1_4_0Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], Func_1_4_0Service);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_2_0_0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(1);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_2_0_0Service = (function () {
    function Func_2_0_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_2_0_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_2_0_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Create Entitlement. Grant Role to User.</p><p>Entitlements are used to grant System or Bank level roles to Users. (For Account level privileges, see Views)</p><p>For a System level Role (.e.g CanGetAnyUser), set bank_id to an empty string i.e. \"bank_id\":\"\"</p><p>For a Bank level Role (e.g. CanCreateAccount), set bank_id to a valid value e.g. \"bank_id\":\"my-bank-id\"</p><p>Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.</p>
     * @summary Add Entitlement for a User.
     * @param body BANK_BODY
     * @param USER_ID The user id
     */
    Func_2_0_0Service.prototype.func200AddEntitlement = function (body, USER_ID, extraHttpRequestParams) {
        return this.func200AddEntitlementWithHttpInfo(body, USER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a KYC check for the customer specified by CUSTOMER_ID. KYC Checks store details of checks on a customer made by the KYC team, their comments and a satisfied status.</p>
     * @summary Add KYC Check
     * @param body BANK_BODY
     * @param KYC_CHECK_ID The kyc check id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycCheck = function (body, KYC_CHECK_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200AddKycCheckWithHttpInfo(body, KYC_CHECK_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a KYC document for the customer specified by CUSTOMER_ID. KYC Documents contain the document type (e.g. passport), place of issue, expiry etc. </p>
     * @summary Add KYC Document.
     * @param body BANK_BODY
     * @param KYC_DOCUMENT_ID The kyc document id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycDocument = function (body, KYC_DOCUMENT_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200AddKycDocumentWithHttpInfo(body, KYC_DOCUMENT_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add some KYC media for the customer specified by CUSTOMER_ID. KYC Media resources relate to KYC Documents and KYC Checks and contain media urls for scans of passports, utility bills etc.</p>
     * @summary Add KYC Media.
     * @param body BANK_BODY
     * @param KYC_MEDIA_ID The kyc media id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycMedia = function (body, KYC_MEDIA_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200AddKycMediaWithHttpInfo(body, KYC_MEDIA_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a kyc_status for the customer specified by CUSTOMER_ID. KYC Status is a timeline of the KYC status of the customer</p>
     * @summary Add KYC Status
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycStatus = function (body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200AddKycStatusWithHttpInfo(body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a social media handle for the customer specified by CUSTOMER_ID.</p>
     * @summary Add Social Media Handle
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddSocialMediaHandle = function (body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200AddSocialMediaHandleWithHttpInfo(body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get accounts at one bank that the user has access to (Authenticated + Anonymous access). Returns the list of accounts at BANK_ID that the user has access to. For each account the API returns the account ID and the available views.</p><p>If the user is not authenticated, the list will contain only the accounts providing public views. Authentication is Optional</p>
     * @summary Get Accounts at one Bank (Public and Private).
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AllAccountsAtOneBank = function (BANK_ID, extraHttpRequestParams) {
        return this.func200AllAccountsAtOneBankWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create Meeting: Initiate a video conference/call with the bank.</p><p>The Meetings resource contains meta data about video/other conference sessions, not the video/audio/chat itself.</p><p>The actual conferencing is handled by external providers. Currently OBP supports tokbox video conferences (WIP).</p><p>This is not a recomendation of tokbox per se.</p><p>provider_id determines the provider of the meeting / video chat service. MUST be url friendly (no spaces).</p><p>purpose_id explains the purpose of the chat. onboarding | mortgage | complaint etc. MUST be url friendly (no spaces).</p><p>Login is required.</p><p>This call is <strong>experimental</strong>. Currently staff_user_id is not set. Further calls will be needed to correctly set this.</p>
     * @summary Create Meeting (video conference/call)
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200CreateMeeting = function (body, BANK_ID, extraHttpRequestParams) {
        return this.func200CreateMeetingWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Creates OBP user.  No authorisation (currently) required.</p><p>Mimics current webform to Register.</p><p>Requires username(email) and password.</p><p>Returns 409 error if username not unique.</p><p>May require validation of email address.</p>
     * @summary Create User.
     * @param body BANK_BODY
     */
    Func_2_0_0Service.prototype.func200CreateUser = function (body, extraHttpRequestParams) {
        return this.func200CreateUserWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Link a User to a Customer</p><p>Authentication is Mandatory</p><p>CanCreateUserCustomerLink OR CanCreateUserCustomerLinkAtAnyBank entitlements are required.</p>
     * @summary Create User Customer Link.
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200CreateUserCustomerLinks = function (body, BANK_ID, extraHttpRequestParams) {
        return this.func200CreateUserCustomerLinksWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Delete Entitlement specified by ENTITLEMENT_ID for an user specified by USER_ID</p><p>Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.</p>
     * @summary Delete Entitlement
     * @param ENTITLEMENT_ID The entitblement id
     * @param USER_ID The user id
     */
    Func_2_0_0Service.prototype.func200DeleteEntitlement = function (ENTITLEMENT_ID, USER_ID, extraHttpRequestParams) {
        return this.func200DeleteEntitlementWithHttpInfo(ENTITLEMENT_ID, USER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Login is required.</p>
     * @summary Get all Entitlements
     */
    Func_2_0_0Service.prototype.func200GetAllEntitlements = function (extraHttpRequestParams) {
        return this.func200GetAllEntitlementsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the logged in user</p><p>Login is required.</p>
     * @summary Get User (Current)
     */
    Func_2_0_0Service.prototype.func200GetCurrentUser = function (extraHttpRequestParams) {
        return this.func200GetCurrentUserWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Login is required.</p>
     * @summary Get Entitlements specified by USER_ID
     * @param USER_ID The user id
     */
    Func_2_0_0Service.prototype.func200GetEntitlements = function (USER_ID, extraHttpRequestParams) {
        return this.func200GetEntitlementsWithHttpInfo(USER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get KYC checks for the logged in customer Messages sent to the currently authenticated user.</p><p>Authentication is Mandatory</p>
     * @summary Get KYC Checks for current Customer
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycChecks = function (CUSTOMER_ID, extraHttpRequestParams) {
        return this.func200GetKycChecksWithHttpInfo(CUSTOMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get KYC (know your customer) documents for a customer Get a list of documents that affirm the identity of the customer Passport, driving licence etc. Authentication is Optional</p>
     * @summary Get KYC Documents for Customer
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycDocuments = function (CUSTOMER_ID, extraHttpRequestParams) {
        return this.func200GetKycDocumentsWithHttpInfo(CUSTOMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get KYC media (scans, pictures, videos) that affirms the identity of the customer.</p><p>Authentication is Mandatory</p>
     * @summary Get KYC Media for a customer
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycMedia = function (CUSTOMER_ID, extraHttpRequestParams) {
        return this.func200GetKycMediaWithHttpInfo(CUSTOMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the KYC statuses for a customer over time</p><p>Authentication is Mandatory</p>
     * @summary Get the KYC statuses for a customer
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycStatuses = function (CUSTOMER_ID, extraHttpRequestParams) {
        return this.func200GetKycStatusesWithHttpInfo(CUSTOMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get Meeting specified by BANK_ID / MEETING_ID Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.</p><p>The actual conference/chats are handled by external services.</p><p>Login is required.</p><p>This call is <strong>experimental</strong> and will require further authorisation in the future.</p>
     * @summary Get Meeting
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetMeeting = function (BANK_ID, extraHttpRequestParams) {
        return this.func200GetMeetingWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.</p><p>The actual conference/chats are handled by external services.</p><p>Login is required.</p><p>This call is <strong>experimental</strong> and will require further authorisation in the future.</p>
     * @summary Get Meetings
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetMeetings = function (BANK_ID, extraHttpRequestParams) {
        return this.func200GetMeetingsWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the list of the views at BANK_ID for account ACCOUNT_ID that a USER_ID at their provider PROVIDER_ID has access to. All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get access for specific user.
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetPermissionForUserForBankAccount = function (PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200GetPermissionForUserForBankAccountWithHttpInfo(PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the list of the permissions at BANK_ID for account ACCOUNT_ID, with each time a pair composed of the user and the views that he has access to.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get access.
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetPermissionsForBankAccount = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200GetPermissionsForBankAccountWithHttpInfo(ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get social media handles for a customer.</p><p>Authentication is Mandatory</p>
     * @summary Get social media handles for a customer
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetSocialMediaHandles = function (CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        return this.func200GetSocialMediaHandlesWithHttpInfo(CUSTOMER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get Transaction Types for the bank specified by BANK_ID:</p><p>Lists the possible Transaction Types available at the bank (as opposed to Transaction Request Types which are the possible ways Transactions can be created by this API Server).</p><ul>  <li>id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.</li>  <li>bank_id : The bank that supports this TransactionType</li>  <li>short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here</li>  <li>summary : A succinct summary</li>  <li>description : A longer description</li>  <li>charge : The charge to the customer for each one of these</li></ul><p>Authentication is Optional</p>
     * @summary Get Transaction Types offered by the bank
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetTransactionTypes = function (BANK_ID, extraHttpRequestParams) {
        return this.func200GetTransactionTypesWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns the list of private (non-public) accounts at BANK_ID that the user has access to. For each account the API returns the ID and the available views.</p><p>If you want to see more information on the Views, use the Account Detail call. If you want less information about the account, use the /my accounts call</p><p>Authentication is Mandatory</p>
     * @summary Get private accounts at one bank (Authenticated access).
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200PrivateAccountsAtOneBank = function (BANK_ID, extraHttpRequestParams) {
        return this.func200PrivateAccountsAtOneBankWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get public accounts at all banks (Anonymous access). Returns accounts that contain at least one public view (a view where is_public is true) For each account the API returns the ID and the available views.</p><p>Authentication is Optional</p>
     * @summary Get Public Accounts at all Banks.
     */
    Func_2_0_0Service.prototype.func200PublicAccountsAllBanks = function (extraHttpRequestParams) {
        return this.func200PublicAccountsAllBanksWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns a list of the public accounts (Anonymous access) at BANK_ID. For each account the API returns the ID and the available views.</p><p>Authentication via OAuth is not required.</p>
     * @summary Get Accounts at Bank (Public)
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200PublicAccountsAtOneBank = function (BANK_ID, extraHttpRequestParams) {
        return this.func200PublicAccountsAtOneBankWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Add Entitlement for a User.
     * &lt;p&gt;Create Entitlement. Grant Role to User.&lt;/p&gt;&lt;p&gt;Entitlements are used to grant System or Bank level roles to Users. (For Account level privileges, see Views)&lt;/p&gt;&lt;p&gt;For a System level Role (.e.g CanGetAnyUser), set bank_id to an empty string i.e. \&quot;bank_id\&quot;:\&quot;\&quot;&lt;/p&gt;&lt;p&gt;For a Bank level Role (e.g. CanCreateAccount), set bank_id to a valid value e.g. \&quot;bank_id\&quot;:\&quot;my-bank-id\&quot;&lt;/p&gt;&lt;p&gt;Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.&lt;/p&gt;
     * @param body BANK_BODY
     * @param USER_ID The user id
     */
    Func_2_0_0Service.prototype.func200AddEntitlementWithHttpInfo = function (body, USER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/users/${USER_ID}/entitlements'
            .replace('${' + 'USER_ID' + '}', String(USER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200AddEntitlement.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func200AddEntitlement.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add KYC Check
     * &lt;p&gt;Add a KYC check for the customer specified by CUSTOMER_ID. KYC Checks store details of checks on a customer made by the KYC team, their comments and a satisfied status.&lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_CHECK_ID The kyc check id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycCheckWithHttpInfo = function (body, KYC_CHECK_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customers/${CUSTOMER_ID}/kyc_check/${KYC_CHECK_ID}'
            .replace('${' + 'KYC_CHECK_ID' + '}', String(KYC_CHECK_ID))
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200AddKycCheck.');
        }
        // verify required parameter 'KYC_CHECK_ID' is not null or undefined
        if (KYC_CHECK_ID === null || KYC_CHECK_ID === undefined) {
            throw new Error('Required parameter KYC_CHECK_ID was null or undefined when calling func200AddKycCheck.');
        }
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200AddKycCheck.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200AddKycCheck.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add KYC Document.
     * &lt;p&gt;Add a KYC document for the customer specified by CUSTOMER_ID. KYC Documents contain the document type (e.g. passport), place of issue, expiry etc. &lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_DOCUMENT_ID The kyc document id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycDocumentWithHttpInfo = function (body, KYC_DOCUMENT_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customers/${CUSTOMER_ID}/kyc_documents/${KYC_DOCUMENT_ID}'
            .replace('${' + 'KYC_DOCUMENT_ID' + '}', String(KYC_DOCUMENT_ID))
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200AddKycDocument.');
        }
        // verify required parameter 'KYC_DOCUMENT_ID' is not null or undefined
        if (KYC_DOCUMENT_ID === null || KYC_DOCUMENT_ID === undefined) {
            throw new Error('Required parameter KYC_DOCUMENT_ID was null or undefined when calling func200AddKycDocument.');
        }
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200AddKycDocument.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200AddKycDocument.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add KYC Media.
     * &lt;p&gt;Add some KYC media for the customer specified by CUSTOMER_ID. KYC Media resources relate to KYC Documents and KYC Checks and contain media urls for scans of passports, utility bills etc.&lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_MEDIA_ID The kyc media id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycMediaWithHttpInfo = function (body, KYC_MEDIA_ID, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customers/${CUSTOMER_ID}/kyc_media/${KYC_MEDIA_ID}'
            .replace('${' + 'KYC_MEDIA_ID' + '}', String(KYC_MEDIA_ID))
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200AddKycMedia.');
        }
        // verify required parameter 'KYC_MEDIA_ID' is not null or undefined
        if (KYC_MEDIA_ID === null || KYC_MEDIA_ID === undefined) {
            throw new Error('Required parameter KYC_MEDIA_ID was null or undefined when calling func200AddKycMedia.');
        }
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200AddKycMedia.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200AddKycMedia.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add KYC Status
     * &lt;p&gt;Add a kyc_status for the customer specified by CUSTOMER_ID. KYC Status is a timeline of the KYC status of the customer&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddKycStatusWithHttpInfo = function (body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customers/${CUSTOMER_ID}/kyc_statuses'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200AddKycStatus.');
        }
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200AddKycStatus.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200AddKycStatus.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Add Social Media Handle
     * &lt;p&gt;Add a social media handle for the customer specified by CUSTOMER_ID.&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AddSocialMediaHandleWithHttpInfo = function (body, CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customers/${CUSTOMER_ID}/social_media_handles'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200AddSocialMediaHandle.');
        }
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200AddSocialMediaHandle.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200AddSocialMediaHandle.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Accounts at one Bank (Public and Private).
     * &lt;p&gt;Get accounts at one bank that the user has access to (Authenticated + Anonymous access). Returns the list of accounts at BANK_ID that the user has access to. For each account the API returns the account ID and the available views.&lt;/p&gt;&lt;p&gt;If the user is not authenticated, the list will contain only the accounts providing public views. Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200AllAccountsAtOneBankWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200AllAccountsAtOneBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Meeting (video conference/call)
     * &lt;p&gt;Create Meeting: Initiate a video conference/call with the bank.&lt;/p&gt;&lt;p&gt;The Meetings resource contains meta data about video/other conference sessions, not the video/audio/chat itself.&lt;/p&gt;&lt;p&gt;The actual conferencing is handled by external providers. Currently OBP supports tokbox video conferences (WIP).&lt;/p&gt;&lt;p&gt;This is not a recomendation of tokbox per se.&lt;/p&gt;&lt;p&gt;provider_id determines the provider of the meeting / video chat service. MUST be url friendly (no spaces).&lt;/p&gt;&lt;p&gt;purpose_id explains the purpose of the chat. onboarding | mortgage | complaint etc. MUST be url friendly (no spaces).&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt;. Currently staff_user_id is not set. Further calls will be needed to correctly set this.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200CreateMeetingWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/meetings'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200CreateMeeting.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200CreateMeeting.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create User.
     * &lt;p&gt;Creates OBP user.  No authorisation (currently) required.&lt;/p&gt;&lt;p&gt;Mimics current webform to Register.&lt;/p&gt;&lt;p&gt;Requires username(email) and password.&lt;/p&gt;&lt;p&gt;Returns 409 error if username not unique.&lt;/p&gt;&lt;p&gt;May require validation of email address.&lt;/p&gt;
     * @param body BANK_BODY
     */
    Func_2_0_0Service.prototype.func200CreateUserWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + '/users';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200CreateUser.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create User Customer Link.
     * &lt;p&gt;Link a User to a Customer&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;CanCreateUserCustomerLink OR CanCreateUserCustomerLinkAtAnyBank entitlements are required.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200CreateUserCustomerLinksWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/user_customer_links'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func200CreateUserCustomerLinks.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200CreateUserCustomerLinks.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete Entitlement
     * &lt;p&gt;Delete Entitlement specified by ENTITLEMENT_ID for an user specified by USER_ID&lt;/p&gt;&lt;p&gt;Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.&lt;/p&gt;
     * @param ENTITLEMENT_ID The entitblement id
     * @param USER_ID The user id
     */
    Func_2_0_0Service.prototype.func200DeleteEntitlementWithHttpInfo = function (ENTITLEMENT_ID, USER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/users/${USER_ID}/entitlement/${ENTITLEMENT_ID}'
            .replace('${' + 'ENTITLEMENT_ID' + '}', String(ENTITLEMENT_ID))
            .replace('${' + 'USER_ID' + '}', String(USER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'ENTITLEMENT_ID' is not null or undefined
        if (ENTITLEMENT_ID === null || ENTITLEMENT_ID === undefined) {
            throw new Error('Required parameter ENTITLEMENT_ID was null or undefined when calling func200DeleteEntitlement.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func200DeleteEntitlement.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get all Entitlements
     * &lt;p&gt;Login is required.&lt;/p&gt;
     */
    Func_2_0_0Service.prototype.func200GetAllEntitlementsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/entitlements';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get User (Current)
     * &lt;p&gt;Get the logged in user&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     */
    Func_2_0_0Service.prototype.func200GetCurrentUserWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/users/current';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Entitlements specified by USER_ID
     * &lt;p&gt;Login is required.&lt;/p&gt;
     * @param USER_ID The user id
     */
    Func_2_0_0Service.prototype.func200GetEntitlementsWithHttpInfo = function (USER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/users/${USER_ID}/entitlements'
            .replace('${' + 'USER_ID' + '}', String(USER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func200GetEntitlements.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get KYC Checks for current Customer
     * &lt;p&gt;Get KYC checks for the logged in customer Messages sent to the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycChecksWithHttpInfo = function (CUSTOMER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/customers/${CUSTOMER_ID}/kyc_checks'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200GetKycChecks.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get KYC Documents for Customer
     * &lt;p&gt;Get KYC (know your customer) documents for a customer Get a list of documents that affirm the identity of the customer Passport, driving licence etc. Authentication is Optional&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycDocumentsWithHttpInfo = function (CUSTOMER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/customers/${CUSTOMER_ID}/kyc_documents'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200GetKycDocuments.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get KYC Media for a customer
     * &lt;p&gt;Get KYC media (scans, pictures, videos) that affirms the identity of the customer.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycMediaWithHttpInfo = function (CUSTOMER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/customers/${CUSTOMER_ID}/kyc_media'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200GetKycMedia.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get the KYC statuses for a customer
     * &lt;p&gt;Get the KYC statuses for a customer over time&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    Func_2_0_0Service.prototype.func200GetKycStatusesWithHttpInfo = function (CUSTOMER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/customers/${CUSTOMER_ID}/kyc_statuses'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200GetKycStatuses.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Meeting
     * &lt;p&gt;Get Meeting specified by BANK_ID / MEETING_ID Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.&lt;/p&gt;&lt;p&gt;The actual conference/chats are handled by external services.&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt; and will require further authorisation in the future.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetMeetingWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/meetings/MEETING_ID'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200GetMeeting.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Meetings
     * &lt;p&gt;Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.&lt;/p&gt;&lt;p&gt;The actual conference/chats are handled by external services.&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt; and will require further authorisation in the future.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetMeetingsWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/meetings'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200GetMeetings.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get access for specific user.
     * &lt;p&gt;Returns the list of the views at BANK_ID for account ACCOUNT_ID that a USER_ID at their provider PROVIDER_ID has access to. All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetPermissionForUserForBankAccountWithHttpInfo = function (PROVIDER_ID, USER_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/permissions/${PROVIDER_ID}/${USER_ID}'
            .replace('${' + 'PROVIDER_ID' + '}', String(PROVIDER_ID))
            .replace('${' + 'USER_ID' + '}', String(USER_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'PROVIDER_ID' is not null or undefined
        if (PROVIDER_ID === null || PROVIDER_ID === undefined) {
            throw new Error('Required parameter PROVIDER_ID was null or undefined when calling func200GetPermissionForUserForBankAccount.');
        }
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func200GetPermissionForUserForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func200GetPermissionForUserForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200GetPermissionForUserForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get access.
     * &lt;p&gt;Returns the list of the permissions at BANK_ID for account ACCOUNT_ID, with each time a pair composed of the user and the views that he has access to.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetPermissionsForBankAccountWithHttpInfo = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/permissions'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func200GetPermissionsForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200GetPermissionsForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get social media handles for a customer
     * &lt;p&gt;Get social media handles for a customer.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetSocialMediaHandlesWithHttpInfo = function (CUSTOMER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/customers/${CUSTOMER_ID}/social_media_handles'
            .replace('${' + 'CUSTOMER_ID' + '}', String(CUSTOMER_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'CUSTOMER_ID' is not null or undefined
        if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
            throw new Error('Required parameter CUSTOMER_ID was null or undefined when calling func200GetSocialMediaHandles.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200GetSocialMediaHandles.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Transaction Types offered by the bank
     * &lt;p&gt;Get Transaction Types for the bank specified by BANK_ID:&lt;/p&gt;&lt;p&gt;Lists the possible Transaction Types available at the bank (as opposed to Transaction Request Types which are the possible ways Transactions can be created by this API Server).&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.&lt;/li&gt;  &lt;li&gt;bank_id : The bank that supports this TransactionType&lt;/li&gt;  &lt;li&gt;short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here&lt;/li&gt;  &lt;li&gt;summary : A succinct summary&lt;/li&gt;  &lt;li&gt;description : A longer description&lt;/li&gt;  &lt;li&gt;charge : The charge to the customer for each one of these&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200GetTransactionTypesWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/transaction-types'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200GetTransactionTypes.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get private accounts at one bank (Authenticated access).
     * &lt;p&gt;Returns the list of private (non-public) accounts at BANK_ID that the user has access to. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;If you want to see more information on the Views, use the Account Detail call. If you want less information about the account, use the /my accounts call&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200PrivateAccountsAtOneBankWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/private'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200PrivateAccountsAtOneBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Public Accounts at all Banks.
     * &lt;p&gt;Get public accounts at all banks (Anonymous access). Returns accounts that contain at least one public view (a view where is_public is true) For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     */
    Func_2_0_0Service.prototype.func200PublicAccountsAllBanksWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/accounts/public';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Accounts at Bank (Public)
     * &lt;p&gt;Returns a list of the public accounts (Anonymous access) at BANK_ID. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is not required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_0_0Service.prototype.func200PublicAccountsAtOneBankWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/public'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func200PublicAccountsAtOneBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_2_0_0Service;
}());
Func_2_0_0Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], Func_2_0_0Service);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_2_1_0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variables__ = __webpack_require__(3);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the
 * AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_2_1_0Service = (function () {
    function Func_2_1_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_2_1_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_2_1_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This is
     * can be used to create cards which are stored in the local RDBMS.
     * Authentication is Mandatory</p>
     * @summary Add cards for a bank
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210AddCardsForBank = function (body, BANK_ID, extraHttpRequestParams) {
        return this
            .func210AddCardsForBankWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create counterparty.</p><p>Counterparties are created for the account /
     * view They are how the user of the view (e.g. account owner) refers to the
     * other side of the transaction</p><p>name is the human readable name (e.g.
     * Piano teacher, Miss Nipa)</p><p>other_bank_id is an (internal) ID for the
     * bank of the bank of the counterparty (if known)</p><p>other_account_id is
     * an (internal) ID for the bank account of the counterparty (if
     * known)</p><p>other_account_provider is a code that tells the system where
     * that bank is hosted. Will be OBP if its known to the API. Usage of this
     * flag (in API / connectors) is work in
     * progress.</p><p>account_routing_scheme is a code that dictates the nature
     * of the account_routing_address e.g. IBAN</p><p>account_routing_address is
     * an instance of account_routing_scheme that can be used to route payments to
     * external systems. e.g. an IBAN number</p><p>bank_routing_scheme is a code
     * that dictates the nature of the bank_routing_address e.g.
     * \"BIC\",</p><p>bank_routing_address is an instance of
     * bank_routing_scheme</p><p>is_beneficiary must be set to true in order to
     * send payments to this counterparty</p><p>The view specified by VIEW_ID must
     * have the canAddCounterparty permission</p><p>Authentication is
     * Mandatory</p>
     * @summary Create counterparty for an account
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210CreateCounterparty = function (body, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this
            .func210CreateCounterpartyWithHttpInfo(body, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Add a customer linked to the user specified by user_id The Customer
     * resource stores the customer number, legal name, email, phone number, their
     * date of birth, relationship status, education attained, a url for a profile
     * image, KYC status etc. Dates need to be in the format
     * 2013-01-21T23:08:00Z</p><p>Authentication is
     * Mandatory</p><p>CanCreateCustomer and CanCreateUserCustomerLink OR
     * CanCreateCustomerAtAnyBank and CanCreateUserCustomerLinkAtAnyBank
     * entitlements required.</p>
     * @summary Create Customer.
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210CreateCustomer = function (body, BANK_ID, extraHttpRequestParams) {
        return this
            .func210CreateCustomerWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create Transaction Types for the bank specified by BANK_ID:</p><ul>
     * <li>id : Unique transaction type id across the API instance. SHOULD be a
     * UUID. MUST be unique.</li>  <li>bank_id : The bank that supports this
     * TransactionType</li>  <li>short_code : A short code (SHOULD have no-spaces)
     * which MUST be unique across the bank. May be stored with Transactions to
     * link here</li>  <li>summary : A succinct summary</li>  <li>description : A
     * longer description</li>  <li>charge : The charge to the customer for each
     * one of these</li></ul><p>Authentication is Mandatory</p>
     * @summary Create Transaction Type offered by the bank
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210CreateTransactionType = function (body, BANK_ID, extraHttpRequestParams) {
        return this
            .func210CreateTransactionTypeWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Enable/Disable a Consumer specified by CONSUMER_ID.</p>
     * @summary Enable or Disable Consumers
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    Func_2_1_0Service.prototype.func210EnableDisableConsumers = function (body, CONSUMER_ID, extraHttpRequestParams) {
        return this
            .func210EnableDisableConsumersWithHttpInfo(body, CONSUMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the Consumer specified by CONSUMER_ID.</p>
     * @summary Get Consumer
     * @param CONSUMER_ID new consumer id
     */
    Func_2_1_0Service.prototype.func210GetConsumer = function (CONSUMER_ID, extraHttpRequestParams) {
        return this
            .func210GetConsumerWithHttpInfo(CONSUMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the all Consumers.</p>
     * @summary Get Consumers
     */
    Func_2_1_0Service.prototype.func210GetConsumers = function (extraHttpRequestParams) {
        return this.func210GetConsumersWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Information about the currently authenticated user.</p><p>Authentication
     * via OAuth is required.</p>
     * @summary Get customer for logged in user
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetCustomer = function (BANK_ID, extraHttpRequestParams) {
        return this.func210GetCustomerWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Information about the currently authenticated user.</p><p>Authentication
     * via OAuth is required.</p>
     * @summary Get all customers for logged in user
     */
    Func_2_1_0Service.prototype.func210GetCustomers = function (extraHttpRequestParams) {
        return this.func210GetCustomersWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Login is required.</p>
     * @summary Get Entitlements specified by BANK_ID and USER_ID
     * @param USER_ID The user id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetEntitlementsByBankAndUser = function (USER_ID, BANK_ID, extraHttpRequestParams) {
        return this
            .func210GetEntitlementsByBankAndUserWithHttpInfo(USER_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the all metrics</p><p>require CanReadMetrics role</p><p>Filters Part
     * 1.*filtering* (no wilde cards etc.) parameters to GET
     * /management/metrics</p><p>Should be able to filter on the following metrics
     * fields</p><p>eg:
     * /management/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1
     * start_date (defaults to one week before current date):
     * eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date)
     * eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 200)
     * eg:limit=200</p><p>4 offset (for pagination: zero index, defaults to 0) eg:
     * offset=10</p><p>eg:
     * /management/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=10000&amp;offset=0&amp;anon=false&amp;app_name=hognwei&amp;implemented_in_version=v2.1.0&amp;verb=POST&amp;user_id=c7b6cb47-cb96-4441-8801-35b57456753a&amp;user_name=susan.uk.29@example.com&amp;consumer_id=78</p><p>Other
     * filters:</p><p>5 consumer_id (if null ignore)</p><p>6 user_id (if null
     * ignore)</p><p>7 anon (if null ignore) only support two value : true (return
     * where user_id is null.) or false (return where user_id is not
     * null.)</p><p>8 url (if null ignore), note: can not contain '&amp;'.
     * </p><p>9 app_name (if null ignore)</p><p>10 implemented_by_partial_function
     * (if null ignore),</p><p>11 implemented_in_version (if null ignore)</p><p>12
     * verb (if null ignore)</p>
     * @summary Get Metrics
     */
    Func_2_1_0Service.prototype.func210GetMetrics = function (extraHttpRequestParams) {
        return this.func210GetMetricsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about the financial products offered by a bank
     * specified by BANK_ID and PRODUCT_CODE including:</p><ul>  <li>Name</li>
     * <li>Code</li>  <li>Category</li>  <li>Family</li>  <li>Super Family</li>
     * <li>More info URL</li>  <li>Description</li>  <li>Terms and Conditions</li>
     * <li>License the data under this endpoint is released under Authentication
     * is Optional</li></ul>
     * @summary Get Bank Product
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetProduct = function (BANK_ID, extraHttpRequestParams) {
        return this.func210GetProductWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about the financial products offered by a bank
     * specified by BANK_ID including:</p><ul>  <li>Name</li>  <li>Code</li>
     * <li>Category</li>  <li>Family</li>  <li>Super Family</li>  <li>More info
     * URL</li>  <li>Description</li>  <li>Terms and Conditions</li>  <li>License
     * the data under this endpoint is released under Authentication is
     * Optional</li></ul>
     * @summary Get Bank Products
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetProducts = function (BANK_ID, extraHttpRequestParams) {
        return this.func210GetProductsWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns all available roles</p><p>Login is required.</p>
     * @summary Get Roles
     */
    Func_2_1_0Service.prototype.func210GetRoles = function (extraHttpRequestParams) {
        return this.func210GetRolesWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the list of the Transaction Request Types supported by the
     * bank.</p><p>Authentication is Optional</p>
     * @summary Get the Transaction Request Types supported by the bank
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetTransactionRequestTypesSupportedByBank = function (BANK_ID, extraHttpRequestParams) {
        return this
            .func210GetTransactionRequestTypesSupportedByBankWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns transaction requests for account specified by ACCOUNT_ID at bank
     * specified by BANK_ID.</p><p>The VIEW_ID specified must be 'owner' and the
     * user must have access to this view.</p><p>Version 2.0.0 now returns charge
     * information.</p><p>Transaction Requests serve to initiate transactions that
     * may or may not proceed. They contain information including:</p><ul>
     * <li>Transaction Request Id</li>  <li>Type</li>  <li>Status (INITIATED,
     * COMPLETED)</li>  <li>Challenge (in order to confirm the request)</li>
     * <li>From Bank / Account</li>  <li>Details including Currency, Value,
     * Description and other initiation information specific to each type. (Could
     * potentialy include a list of future transactions.)</li>  <li>Related
     * Transactions</li></ul><p>PSD2 Context: PSD2 requires transparency of
     * charges to the customer. This endpoint provides the charge that would be
     * applied if the Transaction Request proceeds - and a record of that charge
     * there after. The customer can proceed with the Transaction by answering the
     * security challenge.</p>
     * @summary Get Transaction Requests.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetTransactionRequests = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this
            .func210GetTransactionRequestsWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get all users</p><p>Login is required. CanGetAnyUser entitlement is
     * required,</p>
     * @summary Get all Users
     */
    Func_2_1_0Service.prototype.func210GetUsers = function (extraHttpRequestParams) {
        return this.func210GetUsersWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This
     * call can be used to create banks, users, accounts and transactions which
     * are stored in the local RDBMS.</p><p>The user needs to have
     * CanCreateSandbox entitlement.</p><p>An example of an import set of data
     * (json) can be found <a
     * href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a>
     * Authentication is Mandatory</p>
     * @summary Create sandbox
     * @param body BANK_BODY
     */
    Func_2_1_0Service.prototype.func210SandboxDataImport = function (body, extraHttpRequestParams) {
        return this
            .func210SandboxDataImportWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update an existing branch for a bank account (Authenticated access).
     * Authentication is Mandatory</p>
     * @summary Update Branch
     * @param body BANK_BODY
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210UpdateBranch = function (body, BRANCH_ID, BANK_ID, extraHttpRequestParams) {
        return this
            .func210UpdateBranchWithHttpInfo(body, BRANCH_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update an existing redirectUrl for a Consumer specified by
     * CONSUMER_ID.</p><p>CONSUMER_ID can be obtained after you register the
     * application. </p><p>Or use the endpoint 'Get Consumers' to get it </p>
     * @summary Update Consumer RedirectUrl
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    Func_2_1_0Service.prototype.func210UpdateConsumerRedirectUrl = function (body, CONSUMER_ID, extraHttpRequestParams) {
        return this
            .func210UpdateConsumerRedirectUrlWithHttpInfo(body, CONSUMER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Add cards for a bank
     * &lt;p&gt;Import bulk data into the sandbox (Authenticated
     * access).&lt;/p&gt;&lt;p&gt;This is can be used to create cards which are
     * stored in the local RDBMS. Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210AddCardsForBankWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/cards'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210AddCardsForBank.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210AddCardsForBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create counterparty for an account
     * &lt;p&gt;Create counterparty.&lt;/p&gt;&lt;p&gt;Counterparties are created
     * for the account / view They are how the user of the view (e.g. account
     * owner) refers to the other side of the transaction&lt;/p&gt;&lt;p&gt;name
     * is the human readable name (e.g. Piano teacher, Miss
     * Nipa)&lt;/p&gt;&lt;p&gt;other_bank_id is an (internal) ID for the bank of
     * the bank of the counterparty (if known)&lt;/p&gt;&lt;p&gt;other_account_id
     * is an (internal) ID for the bank account of the counterparty (if
     * known)&lt;/p&gt;&lt;p&gt;other_account_provider is a code that tells the
     * system where that bank is hosted. Will be OBP if its known to the API.
     * Usage of this flag (in API / connectors) is work in
     * progress.&lt;/p&gt;&lt;p&gt;account_routing_scheme is a code that dictates
     * the nature of the account_routing_address e.g.
     * IBAN&lt;/p&gt;&lt;p&gt;account_routing_address is an instance of
     * account_routing_scheme that can be used to route payments to external
     * systems. e.g. an IBAN number&lt;/p&gt;&lt;p&gt;bank_routing_scheme is a
     * code that dictates the nature of the bank_routing_address e.g.
     * \&quot;BIC\&quot;,&lt;/p&gt;&lt;p&gt;bank_routing_address is an instance of
     * bank_routing_scheme&lt;/p&gt;&lt;p&gt;is_beneficiary must be set to true in
     * order to send payments to this counterparty&lt;/p&gt;&lt;p&gt;The view
     * specified by VIEW_ID must have the canAddCounterparty
     * permission&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210CreateCounterpartyWithHttpInfo = function (body, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/counterparties'
                .replace('${' +
                'VIEW_ID' +
                '}', String(VIEW_ID))
                .replace('${' +
                'ACCOUNT_ID' +
                '}', String(ACCOUNT_ID))
                .replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210CreateCounterparty.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func210CreateCounterparty.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func210CreateCounterparty.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210CreateCounterparty.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Customer.
     * &lt;p&gt;Add a customer linked to the user specified by user_id The
     * Customer resource stores the customer number, legal name, email, phone
     * number, their date of birth, relationship status, education attained, a url
     * for a profile image, KYC status etc. Dates need to be in the format
     * 2013-01-21T23:08:00Z&lt;/p&gt;&lt;p&gt;Authentication is
     * Mandatory&lt;/p&gt;&lt;p&gt;CanCreateCustomer and CanCreateUserCustomerLink
     * OR CanCreateCustomerAtAnyBank and CanCreateUserCustomerLinkAtAnyBank
     * entitlements required.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210CreateCustomerWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/customers'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210CreateCustomer.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210CreateCustomer.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Transaction Type offered by the bank
     * &lt;p&gt;Create Transaction Types for the bank specified by
     * BANK_ID:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;id : Unique transaction type id
     * across the API instance. SHOULD be a UUID. MUST be unique.&lt;/li&gt;
     * &lt;li&gt;bank_id : The bank that supports this TransactionType&lt;/li&gt;
     * &lt;li&gt;short_code : A short code (SHOULD have no-spaces) which MUST be
     * unique across the bank. May be stored with Transactions to link
     * here&lt;/li&gt;  &lt;li&gt;summary : A succinct summary&lt;/li&gt;
     * &lt;li&gt;description : A longer description&lt;/li&gt;  &lt;li&gt;charge :
     * The charge to the customer for each one of
     * these&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210CreateTransactionTypeWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/transaction-types'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210CreateTransactionType.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210CreateTransactionType.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Enable or Disable Consumers
     * &lt;p&gt;Enable/Disable a Consumer specified by CONSUMER_ID.&lt;/p&gt;
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    Func_2_1_0Service.prototype.func210EnableDisableConsumersWithHttpInfo = function (body, CONSUMER_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/management/consumers/${CONSUMER_ID}'.replace('${' +
                'CONSUMER_ID' +
                '}', String(CONSUMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210EnableDisableConsumers.');
        }
        // verify required parameter 'CONSUMER_ID' is not null or undefined
        if (CONSUMER_ID === null || CONSUMER_ID === undefined) {
            throw new Error('Required parameter CONSUMER_ID was null or undefined when calling func210EnableDisableConsumers.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Consumer
     * &lt;p&gt;Get the Consumer specified by CONSUMER_ID.&lt;/p&gt;
     * @param CONSUMER_ID new consumer id
     */
    Func_2_1_0Service.prototype.func210GetConsumerWithHttpInfo = function (CONSUMER_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/management/consumers/${CONSUMER_ID}'.replace('${' +
                'CONSUMER_ID' +
                '}', String(CONSUMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'CONSUMER_ID' is not null or undefined
        if (CONSUMER_ID === null || CONSUMER_ID === undefined) {
            throw new Error('Required parameter CONSUMER_ID was null or undefined when calling func210GetConsumer.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Consumers
     * &lt;p&gt;Get the all Consumers.&lt;/p&gt;
     */
    Func_2_1_0Service.prototype.func210GetConsumersWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/management/consumers';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get customer for logged in user
     * &lt;p&gt;Information about the currently authenticated
     * user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetCustomerWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/customer'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210GetCustomer.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get all customers for logged in user
     * &lt;p&gt;Information about the currently authenticated
     * user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     */
    Func_2_1_0Service.prototype.func210GetCustomersWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/users/current/customers';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Entitlements specified by BANK_ID and USER_ID
     * &lt;p&gt;Login is required.&lt;/p&gt;
     * @param USER_ID The user id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetEntitlementsByBankAndUserWithHttpInfo = function (USER_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/users/${USER_ID}/entitlements'
                .replace('${' +
                'USER_ID' +
                '}', String(USER_ID))
                .replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func210GetEntitlementsByBankAndUser.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210GetEntitlementsByBankAndUser.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require CanReadMetrics
     * role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.)
     * parameters to GET /management/metrics&lt;/p&gt;&lt;p&gt;Should be able to
     * filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg:
     * /management/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1
     * start_date (defaults to one week before current date):
     * eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to
     * current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for
     * pagination: defaults to 200) eg:limit&#x3D;200&lt;/p&gt;&lt;p&gt;4 offset
     * (for pagination: zero index, defaults to 0) eg:
     * offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg:
     * /management/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;10000&amp;amp;offset&#x3D;0&amp;amp;anon&#x3D;false&amp;amp;app_name&#x3D;hognwei&amp;amp;implemented_in_version&#x3D;v2.1.0&amp;amp;verb&#x3D;POST&amp;amp;user_id&#x3D;c7b6cb47-cb96-4441-8801-35b57456753a&amp;amp;user_name&#x3D;susan.uk.29@example.com&amp;amp;consumer_id&#x3D;78&lt;/p&gt;&lt;p&gt;Other
     * filters:&lt;/p&gt;&lt;p&gt;5 consumer_id (if null
     * ignore)&lt;/p&gt;&lt;p&gt;6 user_id (if null ignore)&lt;/p&gt;&lt;p&gt;7
     * anon (if null ignore) only support two value : true (return where user_id
     * is null.) or false (return where user_id is not null.)&lt;/p&gt;&lt;p&gt;8
     * url (if null ignore), note: can not contain &#39;&amp;amp;&#39;.
     * &lt;/p&gt;&lt;p&gt;9 app_name (if null ignore)&lt;/p&gt;&lt;p&gt;10
     * implemented_by_partial_function (if null ignore),&lt;/p&gt;&lt;p&gt;11
     * implemented_in_version (if null ignore)&lt;/p&gt;&lt;p&gt;12 verb (if null
     * ignore)&lt;/p&gt;
     */
    Func_2_1_0Service.prototype.func210GetMetricsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/management/metrics';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Bank Product
     * &lt;p&gt;Returns information about the financial products offered by a bank
     * specified by BANK_ID and PRODUCT_CODE including:&lt;/p&gt;&lt;ul&gt;
     * &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Code&lt;/li&gt;
     * &lt;li&gt;Category&lt;/li&gt;  &lt;li&gt;Family&lt;/li&gt;  &lt;li&gt;Super
     * Family&lt;/li&gt;  &lt;li&gt;More info URL&lt;/li&gt;
     * &lt;li&gt;Description&lt;/li&gt;  &lt;li&gt;Terms and Conditions&lt;/li&gt;
     * &lt;li&gt;License the data under this endpoint is released under
     * Authentication is Optional&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetProductWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/products/PRODUCT_CODE'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210GetProduct.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Bank Products
     * &lt;p&gt;Returns information about the financial products offered by a bank
     * specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;
     * &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Code&lt;/li&gt;
     * &lt;li&gt;Category&lt;/li&gt;  &lt;li&gt;Family&lt;/li&gt;  &lt;li&gt;Super
     * Family&lt;/li&gt;  &lt;li&gt;More info URL&lt;/li&gt;
     * &lt;li&gt;Description&lt;/li&gt;  &lt;li&gt;Terms and Conditions&lt;/li&gt;
     * &lt;li&gt;License the data under this endpoint is released under
     * Authentication is Optional&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetProductsWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/products'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210GetProducts.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Roles
     * &lt;p&gt;Returns all available roles&lt;/p&gt;&lt;p&gt;Login is
     * required.&lt;/p&gt;
     */
    Func_2_1_0Service.prototype.func210GetRolesWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/roles';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get the Transaction Request Types supported by the bank
     * &lt;p&gt;Get the list of the Transaction Request Types supported by the
     * bank.&lt;/p&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetTransactionRequestTypesSupportedByBankWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/transaction-request-types'.replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210GetTransactionRequestTypesSupportedByBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Transaction Requests.
     * &lt;p&gt;Returns transaction requests for account specified by ACCOUNT_ID
     * at bank specified by BANK_ID.&lt;/p&gt;&lt;p&gt;The VIEW_ID specified must
     * be &#39;owner&#39; and the user must have access to this
     * view.&lt;/p&gt;&lt;p&gt;Version 2.0.0 now returns charge
     * information.&lt;/p&gt;&lt;p&gt;Transaction Requests serve to initiate
     * transactions that may or may not proceed. They contain information
     * including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Transaction Request Id&lt;/li&gt;
     * &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Status (INITIATED,
     * COMPLETED)&lt;/li&gt;  &lt;li&gt;Challenge (in order to confirm the
     * request)&lt;/li&gt;  &lt;li&gt;From Bank / Account&lt;/li&gt;
     * &lt;li&gt;Details including Currency, Value, Description and other
     * initiation information specific to each type. (Could potentialy include a
     * list of future transactions.)&lt;/li&gt;  &lt;li&gt;Related
     * Transactions&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;PSD2 Context: PSD2 requires
     * transparency of charges to the customer. This endpoint provides the charge
     * that would be applied if the Transaction Request proceeds - and a record of
     * that charge there after. The customer can proceed with the Transaction by
     * answering the security challenge.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210GetTransactionRequestsWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transaction-requests'
                .replace('${' +
                'VIEW_ID' +
                '}', String(VIEW_ID))
                .replace('${' +
                'ACCOUNT_ID' +
                '}', String(ACCOUNT_ID))
                .replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func210GetTransactionRequests.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func210GetTransactionRequests.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210GetTransactionRequests.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get all Users
     * &lt;p&gt;Get all users&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser
     * entitlement is required,&lt;/p&gt;
     */
    Func_2_1_0Service.prototype.func210GetUsersWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/users';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create sandbox
     * &lt;p&gt;Import bulk data into the sandbox (Authenticated
     * access).&lt;/p&gt;&lt;p&gt;This call can be used to create banks, users,
     * accounts and transactions which are stored in the local
     * RDBMS.&lt;/p&gt;&lt;p&gt;The user needs to have CanCreateSandbox
     * entitlement.&lt;/p&gt;&lt;p&gt;An example of an import set of data (json)
     * can be found &lt;a
     * href&#x3D;\&quot;https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\&quot;&gt;here&lt;/a&gt;
     * Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    Func_2_1_0Service.prototype.func210SandboxDataImportWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + '/sandbox/data-import';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210SandboxDataImport.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Branch
     * &lt;p&gt;Update an existing branch for a bank account (Authenticated
     * access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    Func_2_1_0Service.prototype.func210UpdateBranchWithHttpInfo = function (body, BRANCH_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/banks/${BANK_ID}/branches/${BRANCH_ID}'
                .replace('${' +
                'BRANCH_ID' +
                '}', String(BRANCH_ID))
                .replace('${' +
                'BANK_ID' +
                '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210UpdateBranch.');
        }
        // verify required parameter 'BRANCH_ID' is not null or undefined
        if (BRANCH_ID === null || BRANCH_ID === undefined) {
            throw new Error('Required parameter BRANCH_ID was null or undefined when calling func210UpdateBranch.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func210UpdateBranch.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update Consumer RedirectUrl
     * &lt;p&gt;Update an existing redirectUrl for a Consumer specified by
     * CONSUMER_ID.&lt;/p&gt;&lt;p&gt;CONSUMER_ID can be obtained after you
     * register the application. &lt;/p&gt;&lt;p&gt;Or use the endpoint &#39;Get
     * Consumers&#39; to get it &lt;/p&gt;
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    Func_2_1_0Service.prototype.func210UpdateConsumerRedirectUrlWithHttpInfo = function (body, CONSUMER_ID, extraHttpRequestParams) {
        var path = this.basePath +
            '/management/consumers/${CONSUMER_ID}/consumer/redirect_url'.replace('${' +
                'CONSUMER_ID' +
                '}', String(CONSUMER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.defaultHeaders
            .toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func210UpdateConsumerRedirectUrl.');
        }
        // verify required parameter 'CONSUMER_ID' is not null or undefined
        if (CONSUMER_ID === null || CONSUMER_ID === undefined) {
            throw new Error('Required parameter CONSUMER_ID was null or undefined when calling func210UpdateConsumerRedirectUrl.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys['Authorization']) {
            headers.set('Authorization', this.configuration.apiKeys['Authorization']);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ?
                '' :
                JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions =
                Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_2_1_0Service;
}());
Func_2_1_0Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__variables__["a" /* BASE_PATH */])),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], Func_2_1_0Service);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_2_2_0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(1);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_2_2_0Service = (function () {
    function Func_2_2_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_2_2_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_2_2_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Returns information about:</p><ul>  <li>Akka ports</li>  <li>Elastic search ports</li>  <li>Cached function</li></ul>
     * @summary The configuration of the API
     */
    Func_2_2_0Service.prototype.func220Config = function (extraHttpRequestParams) {
        return this.func220ConfigWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.</p><p>The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.</p><p>If USER_ID is not specified the account will be owned by the logged in User.</p><p>Note: The Amount must be zero.</p>
     * @summary Create Account
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220CreateAccount = function (body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func220CreateAccountWithHttpInfo(body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create a new bank (Authenticated access). Authentication is Mandatory</p>
     * @summary Create Bank
     * @param body BANK_BODY
     */
    Func_2_2_0Service.prototype.func220CreateBank = function (body, extraHttpRequestParams) {
        return this.func220CreateBankWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create or Update Product for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank</p>
     * @summary Create Product
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220CreateProduct = function (body, BANK_ID, extraHttpRequestParams) {
        return this.func220CreateProductWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the all metrics</p><p>require $CanGetConnectorMetrics role</p><p>Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics</p><p>Should be able to filter on the following metrics fields</p><p>eg: /management/connector/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1 start_date (defaults to one week before current date): eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date) eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 1000) eg:limit=2000</p><p>4 offset (for pagination: zero index, defaults to 0) eg: offset=10</p><p>eg: /management/connector/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=100&amp;offset=300</p><p>Other filters:</p><p>5 connector_name (if null ignore)</p><p>6 function_name (if null ignore)</p><p>7 correlation_id (if null ignore)</p>
     * @summary Get Connector Metrics
     */
    Func_2_2_0Service.prototype.func220GetConnectorMetrics = function (extraHttpRequestParams) {
        return this.func220GetConnectorMetricsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the counterparties for the account / view.</p><p>Authentication is Mandatory</p>
     * @summary Get Counterparties of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220GetCounterpartiesForAccount = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func220GetCounterpartiesForAccountWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE </p>
     * @summary Get Current FxRate
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220GetCurrentFxRate = function (TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, extraHttpRequestParams) {
        return this.func220GetCurrentFxRateWithHttpInfo(TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor=kafka_vMar2017 in your Props</p>
     * @summary Get Message Docs
     */
    Func_2_2_0Service.prototype.func220GetMessageDocs = function (extraHttpRequestParams) {
        return this.func220GetMessageDocsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * The configuration of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Akka ports&lt;/li&gt;  &lt;li&gt;Elastic search ports&lt;/li&gt;  &lt;li&gt;Cached function&lt;/li&gt;&lt;/ul&gt;
     */
    Func_2_2_0Service.prototype.func220ConfigWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/config';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Account
     * &lt;p&gt;Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.&lt;/p&gt;&lt;p&gt;If USER_ID is not specified the account will be owned by the logged in User.&lt;/p&gt;&lt;p&gt;Note: The Amount must be zero.&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220CreateAccountWithHttpInfo = function (body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func220CreateAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func220CreateAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220CreateAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Bank
     * &lt;p&gt;Create a new bank (Authenticated access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    Func_2_2_0Service.prototype.func220CreateBankWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + '/banks';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func220CreateBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Product
     * &lt;p&gt;Create or Update Product for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220CreateProductWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/products'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func220CreateProduct.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220CreateProduct.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Connector Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require $CanGetConnectorMetrics role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics&lt;/p&gt;&lt;p&gt;Should be able to filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1 start_date (defaults to one week before current date): eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for pagination: defaults to 1000) eg:limit&#x3D;2000&lt;/p&gt;&lt;p&gt;4 offset (for pagination: zero index, defaults to 0) eg: offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;100&amp;amp;offset&#x3D;300&lt;/p&gt;&lt;p&gt;Other filters:&lt;/p&gt;&lt;p&gt;5 connector_name (if null ignore)&lt;/p&gt;&lt;p&gt;6 function_name (if null ignore)&lt;/p&gt;&lt;p&gt;7 correlation_id (if null ignore)&lt;/p&gt;
     */
    Func_2_2_0Service.prototype.func220GetConnectorMetricsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/management/connector/metrics';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Counterparties of one Account.
     * &lt;p&gt;Get the counterparties for the account / view.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220GetCounterpartiesForAccountWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/counterparties'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func220GetCounterpartiesForAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func220GetCounterpartiesForAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220GetCounterpartiesForAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Current FxRate
     * &lt;p&gt;Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE &lt;/p&gt;
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    Func_2_2_0Service.prototype.func220GetCurrentFxRateWithHttpInfo = function (TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/fx/${FROM_CURRENCY_CODE}/${TO_CURRENCY_CODE}'
            .replace('${' + 'TO_CURRENCY_CODE' + '}', String(TO_CURRENCY_CODE))
            .replace('${' + 'FROM_CURRENCY_CODE' + '}', String(FROM_CURRENCY_CODE))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'TO_CURRENCY_CODE' is not null or undefined
        if (TO_CURRENCY_CODE === null || TO_CURRENCY_CODE === undefined) {
            throw new Error('Required parameter TO_CURRENCY_CODE was null or undefined when calling func220GetCurrentFxRate.');
        }
        // verify required parameter 'FROM_CURRENCY_CODE' is not null or undefined
        if (FROM_CURRENCY_CODE === null || FROM_CURRENCY_CODE === undefined) {
            throw new Error('Required parameter FROM_CURRENCY_CODE was null or undefined when calling func220GetCurrentFxRate.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220GetCurrentFxRate.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Message Docs
     * &lt;p&gt;These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor&#x3D;kafka_vMar2017 in your Props&lt;/p&gt;
     */
    Func_2_2_0Service.prototype.func220GetMessageDocsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/message-docs/mar2017';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_2_2_0Service;
}());
Func_2_2_0Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], Func_2_2_0Service);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func_3_0_0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(1);
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var Func_3_0_0Service = (function () {
    function Func_3_0_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_3_0_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_3_0_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Information returned about an account specified by ACCOUNT_ID as moderated by the view (VIEW_ID):</p><ul>  <li>Number</li>  <li>Owners</li>  <li>Type</li>  <li>Balance</li>  <li>IBAN</li>  <li>Available views (sorted by short_name)</li></ul><p>More details about the data moderation by the view <a href=\"#1_2_1-getViewsForBankAccount\">here</a>.</p><p>PSD2 Context: PSD2 requires customers to have access to their account information via third party applications. This call provides balance and other account information via delegated authenticaiton using OAuth.</p><p>OAuth authentication is required if the 'is_public' field in view (VIEW_ID) is not set to <code>true</code>.</p>
     * @summary Get Account by Id (Full)
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300AccountById = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300AccountByIdWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get private accounts at all banks (Authenticated access) Returns the list of accounts containing private views for the user at all banks. For each account the API returns the ID and the available views.</p><p>Authentication is Mandatory</p>
     * @summary Get Accounts at all Banks (Private)
     */
    Func_3_0_0Service.prototype.func300CorePrivateAccountsAllBanks = function (extraHttpRequestParams) {
        return this.func300CorePrivateAccountsAllBanksWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create ATM for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateAtm OR CanCreateAtmAtAnyBank</p>
     * @summary Create ATM
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300CreateAtm = function (body, BANK_ID, extraHttpRequestParams) {
        return this.func300CreateAtmWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create Branch for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateBranch entitlements are required OR CanCreateBranchAtAnyBank</p>
     * @summary Create Branch
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300CreateBranch = function (body, BANK_ID, extraHttpRequestParams) {
        return this.func300CreateBranchWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Create a view on bank account</p><p>OAuth authentication is required and the user needs to have access to the owner view.  The 'alias' field in the JSON can take one of three values:</p><ul>  <li><em>public</em>: to use the public alias if there is one specified for the other account.</li>  <li><em>private</em>: to use the public alias if there is one specified for the other account.</li>  <li>  <p><em>''(empty string)</em>: to use no alias; the view shows the real name of the other account.</p></li></ul><p>The 'hide_metadata_if_alias_used' field in the JSON can take boolean values. If it is set to <code>true</code> and there is an alias on the other account then the other accounts' metadata (like more_info, url, image_url, open_corporates_url, etc.) will be hidden. Otherwise the metadata will be shown.</p><p>The 'allowed_actions' field is a list containing the name of the actions allowed on this view, all the actions contained will be set to <code>true</code> on the view creation, the rest will be set to <code>false</code>.</p><p>You should use a leading _ (underscore) for the view name because other view names may become reserved by OBP internally</p>
     * @summary Create View.
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300CreateViewForBankAccount = function (body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300CreateViewForBankAccountWithHttpInfo(body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get a basic Adapter info</p><p>Login is required.</p>
     * @summary Get Info Of Adapter
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetAdapter = function (BANK_ID, extraHttpRequestParams) {
        return this.func300GetAdapterWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about ATM for a single bank specified by BANK_ID and ATM_ID including:</p><ul>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank ATM
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetAtm = function (BANK_ID, extraHttpRequestParams) {
        return this.func300GetAtmWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about ATMs for a single bank specified by BANK_ID including:</p><ul>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank ATMS
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetAtms = function (BANK_ID, extraHttpRequestParams) {
        return this.func300GetAtmsWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about branches for a single bank specified by BANK_ID and BRANCH_ID including:  meta.license.id and eta.license.name fields must not be empty.</p><ul>  <li>Name</li>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank Branch
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetBranch = function (BRANCH_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300GetBranchWithHttpInfo(BRANCH_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns information about branches for a single bank specified by BANK_ID including:</p><ul>  <li>Name</li>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li>  <li>Structured opening hours</li>  <li>Accessible flag</li>  <li>Branch Type</li>  <li>More Info</li></ul><p>Authentication is Optional</p>
     * @summary Get Branches for a Bank
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetBranches = function (BANK_ID, extraHttpRequestParams) {
        return this.func300GetBranchesWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Information returned about the account specified by ACCOUNT_ID:</p><ul>  <li>Number</li>  <li>Owners</li>  <li>Type</li>  <li>Balance</li>  <li>IBAN</li></ul><p>This call returns the owner view and requires access to that view.</p><p>OAuth authentication is required</p>
     * @summary Get Account by Id (Core)
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetCoreAccountById = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300GetCoreAccountByIdWithHttpInfo(ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns transactions list (Core info) of the account specified by ACCOUNT_ID.</p><p>Authentication is required.</p><p>Possible custom headers for pagination:</p><ul>  <li>obp_sort_by=CRITERIA ==&gt; default value: \"completed\" field</li>  <li>obp_sort_direction=ASC/DESC ==&gt; default value: DESC</li>  <li>obp_limit=NUMBER ==&gt; default value: 50</li>  <li>obp_offset=NUMBER ==&gt; default value: 0</li>  <li>obp_from_date=DATE =&gt; default value: date of the oldest transaction registered (format below)</li>  <li>obp_to_date=DATE =&gt; default value: date of the newest transaction registered (format below)</li></ul><p><strong>Date format parameter</strong>: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\" (2014-07-01T00:00:00.000Z) ==&gt; time zone is UTC.</p>
     * @summary Get Transactions for Account (Core)
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetCoreTransactionsForBankAccount = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300GetCoreTransactionsForBankAccountWithHttpInfo(ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Returns transactions list of the account specified by ACCOUNT_ID and <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view (VIEW_ID).</p><p>Authentication via OAuth is required if the view is not public.</p><p>Possible custom headers for pagination:</p><ul>  <li>obp_sort_by=CRITERIA ==&gt; default value: \"completed\" field</li>  <li>obp_sort_direction=ASC/DESC ==&gt; default value: DESC</li>  <li>obp_limit=NUMBER ==&gt; default value: 50</li>  <li>obp_offset=NUMBER ==&gt; default value: 0</li>  <li>obp_from_date=DATE =&gt; default value: date of the oldest transaction registered (format below)</li>  <li>obp_to_date=DATE =&gt; default value: date of the newest transaction registered (format below)</li></ul><p><strong>Date format parameter</strong>: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\" (2014-07-01T00:00:00.000Z) ==&gt; time zone is UTC.</p>
     * @summary Get Transactions for Account (Full)
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetTransactionsForBankAccount = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300GetTransactionsForBankAccountWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get users by email address</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get Users by Email Address
     */
    Func_3_0_0Service.prototype.func300GetUser = function (extraHttpRequestParams) {
        return this.func300GetUserWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get user by USER_ID</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get User by USER_ID
     * @param USER_ID The user id
     */
    Func_3_0_0Service.prototype.func300GetUserByUserId = function (USER_ID, extraHttpRequestParams) {
        return this.func300GetUserByUserIdWithHttpInfo(USER_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Get user by USERNAME</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get User by USERNAME
     */
    Func_3_0_0Service.prototype.func300GetUserByUsername = function (extraHttpRequestParams) {
        return this.func300GetUserByUsernameWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <h1>Views</h1><p>Views in Open Bank Project provide a mechanism for fine grained access control and delegation to Accounts and Transactions. Account holders use the 'owner' view by default. Delegated access is made through other views for example 'accountants', 'share-holders' or 'tagging-application'. Views can be created via the API and each view has a list of entitlements.</p><p>Views on accounts and transactions filter the underlying data to redact certain fields for certain users. For instance the balance on an account may be hidden from the public. The way to know what is possible on a view is determined in the following JSON.</p><p><strong>Data:</strong> When a view moderates a set of data, some fields my contain the value <code>null</code> rather than the original value. This indicates either that the user is not allowed to see the original data or the field is empty.</p><p>There is currently one exception to this rule; the 'holder' field in the JSON contains always a value which is either an alias or the real name - indicated by the 'is_alias' field.</p><p><strong>Action:</strong> When a user performs an action like trying to post a comment (with POST API call), if he is not allowed, the body response will contain an error message.</p><p><strong>Metadata:</strong> Transaction metadata (like images, tags, comments, etc.) will appears <em>ONLY</em> on the view where they have been created e.g. comments posted to the public view only appear on the public view.</p><p>The other account metadata fields (like image_URL, more_info, etc.) are unique through all the views. Example, if a user edits the 'more_info' field in the 'team' view, then the view 'authorities' will show the new value (if it is allowed to do it).</p><h1>All</h1><p><em>Optional</em></p><p>Returns the list of the views created for account ACCOUNT_ID at BANK_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get Views for Account.
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetViewsForBankAccount = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300GetViewsForBankAccountWithHttpInfo(ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * <p>Update an existing view on a bank account</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p><p>The json sent is the same as during view creation (above), with one difference: the 'name' field of a view is not editable (it is only set when a view is created)</p>
     * @summary Update View.
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300UpdateViewForBankAccount = function (body, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        return this.func300UpdateViewForBankAccountWithHttpInfo(body, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get Account by Id (Full)
     * &lt;p&gt;Information returned about an account specified by ACCOUNT_ID as moderated by the view (VIEW_ID):&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Number&lt;/li&gt;  &lt;li&gt;Owners&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Balance&lt;/li&gt;  &lt;li&gt;IBAN&lt;/li&gt;  &lt;li&gt;Available views (sorted by short_name)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;More details about the data moderation by the view &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;here&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;PSD2 Context: PSD2 requires customers to have access to their account information via third party applications. This call provides balance and other account information via delegated authenticaiton using OAuth.&lt;/p&gt;&lt;p&gt;OAuth authentication is required if the &#39;is_public&#39; field in view (VIEW_ID) is not set to &lt;code&gt;true&lt;/code&gt;.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300AccountByIdWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/account'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func300AccountById.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300AccountById.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300AccountById.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Accounts at all Banks (Private)
     * &lt;p&gt;Get private accounts at all banks (Authenticated access) Returns the list of accounts containing private views for the user at all banks. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     */
    Func_3_0_0Service.prototype.func300CorePrivateAccountsAllBanksWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/my/accounts';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create ATM
     * &lt;p&gt;Create ATM for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateAtm OR CanCreateAtmAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300CreateAtmWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/atms'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func300CreateAtm.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300CreateAtm.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create Branch
     * &lt;p&gt;Create Branch for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateBranch entitlements are required OR CanCreateBranchAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300CreateBranchWithHttpInfo = function (body, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/branches'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func300CreateBranch.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300CreateBranch.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create View.
     * &lt;p&gt;Create a view on bank account&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.  The &#39;alias&#39; field in the JSON can take one of three values:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;&lt;em&gt;public&lt;/em&gt;: to use the public alias if there is one specified for the other account.&lt;/li&gt;  &lt;li&gt;&lt;em&gt;private&lt;/em&gt;: to use the public alias if there is one specified for the other account.&lt;/li&gt;  &lt;li&gt;  &lt;p&gt;&lt;em&gt;&#39;&#39;(empty string)&lt;/em&gt;: to use no alias; the view shows the real name of the other account.&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The &#39;hide_metadata_if_alias_used&#39; field in the JSON can take boolean values. If it is set to &lt;code&gt;true&lt;/code&gt; and there is an alias on the other account then the other accounts&#39; metadata (like more_info, url, image_url, open_corporates_url, etc.) will be hidden. Otherwise the metadata will be shown.&lt;/p&gt;&lt;p&gt;The &#39;allowed_actions&#39; field is a list containing the name of the actions allowed on this view, all the actions contained will be set to &lt;code&gt;true&lt;/code&gt; on the view creation, the rest will be set to &lt;code&gt;false&lt;/code&gt;.&lt;/p&gt;&lt;p&gt;You should use a leading _ (underscore) for the view name because other view names may become reserved by OBP internally&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300CreateViewForBankAccountWithHttpInfo = function (body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/views'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func300CreateViewForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300CreateViewForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300CreateViewForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Info Of Adapter
     * &lt;p&gt;Get a basic Adapter info&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetAdapterWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/adapter'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetAdapter.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Bank ATM
     * &lt;p&gt;Returns information about ATM for a single bank specified by BANK_ID and ATM_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetAtmWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/atms/ATM_ID'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetAtm.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Bank ATMS
     * &lt;p&gt;Returns information about ATMs for a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetAtmsWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/atms'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetAtms.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Bank Branch
     * &lt;p&gt;Returns information about branches for a single bank specified by BANK_ID and BRANCH_ID including:  meta.license.id and eta.license.name fields must not be empty.&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetBranchWithHttpInfo = function (BRANCH_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/branches/${BRANCH_ID}'
            .replace('${' + 'BRANCH_ID' + '}', String(BRANCH_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BRANCH_ID' is not null or undefined
        if (BRANCH_ID === null || BRANCH_ID === undefined) {
            throw new Error('Required parameter BRANCH_ID was null or undefined when calling func300GetBranch.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetBranch.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Branches for a Bank
     * &lt;p&gt;Returns information about branches for a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;  &lt;li&gt;Structured opening hours&lt;/li&gt;  &lt;li&gt;Accessible flag&lt;/li&gt;  &lt;li&gt;Branch Type&lt;/li&gt;  &lt;li&gt;More Info&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetBranchesWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/branches'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetBranches.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Account by Id (Core)
     * &lt;p&gt;Information returned about the account specified by ACCOUNT_ID:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Number&lt;/li&gt;  &lt;li&gt;Owners&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Balance&lt;/li&gt;  &lt;li&gt;IBAN&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;This call returns the owner view and requires access to that view.&lt;/p&gt;&lt;p&gt;OAuth authentication is required&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetCoreAccountByIdWithHttpInfo = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/my/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/account'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300GetCoreAccountById.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetCoreAccountById.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Transactions for Account (Core)
     * &lt;p&gt;Returns transactions list (Core info) of the account specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is required.&lt;/p&gt;&lt;p&gt;Possible custom headers for pagination:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;obp_sort_by&#x3D;CRITERIA &#x3D;&#x3D;&amp;gt; default value: \&quot;completed\&quot; field&lt;/li&gt;  &lt;li&gt;obp_sort_direction&#x3D;ASC/DESC &#x3D;&#x3D;&amp;gt; default value: DESC&lt;/li&gt;  &lt;li&gt;obp_limit&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 50&lt;/li&gt;  &lt;li&gt;obp_offset&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 0&lt;/li&gt;  &lt;li&gt;obp_from_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the oldest transaction registered (format below)&lt;/li&gt;  &lt;li&gt;obp_to_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the newest transaction registered (format below)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Date format parameter&lt;/strong&gt;: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;\&quot; (2014-07-01T00:00:00.000Z) &#x3D;&#x3D;&amp;gt; time zone is UTC.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetCoreTransactionsForBankAccountWithHttpInfo = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/my/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/transactions'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300GetCoreTransactionsForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetCoreTransactionsForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Transactions for Account (Full)
     * &lt;p&gt;Returns transactions list of the account specified by ACCOUNT_ID and &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;&lt;p&gt;Possible custom headers for pagination:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;obp_sort_by&#x3D;CRITERIA &#x3D;&#x3D;&amp;gt; default value: \&quot;completed\&quot; field&lt;/li&gt;  &lt;li&gt;obp_sort_direction&#x3D;ASC/DESC &#x3D;&#x3D;&amp;gt; default value: DESC&lt;/li&gt;  &lt;li&gt;obp_limit&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 50&lt;/li&gt;  &lt;li&gt;obp_offset&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 0&lt;/li&gt;  &lt;li&gt;obp_from_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the oldest transaction registered (format below)&lt;/li&gt;  &lt;li&gt;obp_to_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the newest transaction registered (format below)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Date format parameter&lt;/strong&gt;: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;\&quot; (2014-07-01T00:00:00.000Z) &#x3D;&#x3D;&amp;gt; time zone is UTC.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetTransactionsForBankAccountWithHttpInfo = function (VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/transactions'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func300GetTransactionsForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300GetTransactionsForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetTransactionsForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Users by Email Address
     * &lt;p&gt;Get users by email address&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    Func_3_0_0Service.prototype.func300GetUserWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/users/email/EMAIL/terminator';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get User by USER_ID
     * &lt;p&gt;Get user by USER_ID&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     * @param USER_ID The user id
     */
    Func_3_0_0Service.prototype.func300GetUserByUserIdWithHttpInfo = function (USER_ID, extraHttpRequestParams) {
        var path = this.basePath + '/users/user_id/${USER_ID}'
            .replace('${' + 'USER_ID' + '}', String(USER_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'USER_ID' is not null or undefined
        if (USER_ID === null || USER_ID === undefined) {
            throw new Error('Required parameter USER_ID was null or undefined when calling func300GetUserByUserId.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get User by USERNAME
     * &lt;p&gt;Get user by USERNAME&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    Func_3_0_0Service.prototype.func300GetUserByUsernameWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/users/username/USERNAME';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Views for Account.
     * &lt;h1&gt;Views&lt;/h1&gt;&lt;p&gt;Views in Open Bank Project provide a mechanism for fine grained access control and delegation to Accounts and Transactions. Account holders use the &#39;owner&#39; view by default. Delegated access is made through other views for example &#39;accountants&#39;, &#39;share-holders&#39; or &#39;tagging-application&#39;. Views can be created via the API and each view has a list of entitlements.&lt;/p&gt;&lt;p&gt;Views on accounts and transactions filter the underlying data to redact certain fields for certain users. For instance the balance on an account may be hidden from the public. The way to know what is possible on a view is determined in the following JSON.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Data:&lt;/strong&gt; When a view moderates a set of data, some fields my contain the value &lt;code&gt;null&lt;/code&gt; rather than the original value. This indicates either that the user is not allowed to see the original data or the field is empty.&lt;/p&gt;&lt;p&gt;There is currently one exception to this rule; the &#39;holder&#39; field in the JSON contains always a value which is either an alias or the real name - indicated by the &#39;is_alias&#39; field.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Action:&lt;/strong&gt; When a user performs an action like trying to post a comment (with POST API call), if he is not allowed, the body response will contain an error message.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Metadata:&lt;/strong&gt; Transaction metadata (like images, tags, comments, etc.) will appears &lt;em&gt;ONLY&lt;/em&gt; on the view where they have been created e.g. comments posted to the public view only appear on the public view.&lt;/p&gt;&lt;p&gt;The other account metadata fields (like image_URL, more_info, etc.) are unique through all the views. Example, if a user edits the &#39;more_info&#39; field in the &#39;team&#39; view, then the view &#39;authorities&#39; will show the new value (if it is allowed to do it).&lt;/p&gt;&lt;h1&gt;All&lt;/h1&gt;&lt;p&gt;&lt;em&gt;Optional&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Returns the list of the views created for account ACCOUNT_ID at BANK_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300GetViewsForBankAccountWithHttpInfo = function (ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/views'
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300GetViewsForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300GetViewsForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update View.
     * &lt;p&gt;Update an existing view on a bank account&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;&lt;p&gt;The json sent is the same as during view creation (above), with one difference: the &#39;name&#39; field of a view is not editable (it is only set when a view is created)&lt;/p&gt;
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    Func_3_0_0Service.prototype.func300UpdateViewForBankAccountWithHttpInfo = function (body, VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/views/${VIEW_ID}'
            .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
            .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func300UpdateViewForBankAccount.');
        }
        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func300UpdateViewForBankAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func300UpdateViewForBankAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func300UpdateViewForBankAccount.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_3_0_0Service;
}());
Func_3_0_0Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], Func_3_0_0Service);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_func121_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_func130_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_func140_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_func200_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_func210_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_func220_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_func300_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ApiModule = ApiModule_1 = (function () {
    function ApiModule() {
    }
    ApiModule.forConfig = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */], useFactory: configurationFactory }]
        };
    };
    return ApiModule;
}());
ApiModule = ApiModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]],
        declarations: [],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_4__api_func121_service__["a" /* Func_1_2_1Service */], __WEBPACK_IMPORTED_MODULE_5__api_func130_service__["a" /* Func_1_3_0Service */], __WEBPACK_IMPORTED_MODULE_6__api_func140_service__["a" /* Func_1_4_0Service */], __WEBPACK_IMPORTED_MODULE_7__api_func200_service__["a" /* Func_2_0_0Service */], __WEBPACK_IMPORTED_MODULE_8__api_func210_service__["a" /* Func_2_1_0Service */], __WEBPACK_IMPORTED_MODULE_9__api_func220_service__["a" /* Func_2_2_0Service */], __WEBPACK_IMPORTED_MODULE_10__api_func300_service__["a" /* Func_3_0_0Service */]]
    })
], ApiModule);

var ApiModule_1;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__func121_service__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__func121_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__func130_service__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__func130_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func140_service__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__func140_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__func200_service__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__func200_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__func210_service__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__func210_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__func220_service__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__func220_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__func300_service__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__func300_service__["a"]; });














var APIS = [__WEBPACK_IMPORTED_MODULE_0__func121_service__["a" /* Func_1_2_1Service */], __WEBPACK_IMPORTED_MODULE_1__func130_service__["a" /* Func_1_3_0Service */], __WEBPACK_IMPORTED_MODULE_2__func140_service__["a" /* Func_1_4_0Service */], __WEBPACK_IMPORTED_MODULE_3__func200_service__["a" /* Func_2_0_0Service */], __WEBPACK_IMPORTED_MODULE_4__func210_service__["a" /* Func_2_1_0Service */], __WEBPACK_IMPORTED_MODULE_5__func220_service__["a" /* Func_2_2_0Service */], __WEBPACK_IMPORTED_MODULE_6__func300_service__["a" /* Func_3_0_0Service */]];


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_1_2_1Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_1_3_0Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_1_4_0Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_2_0_0Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_2_1_0Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_2_2_0Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Func_3_0_0Service", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_1__variables__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return __WEBPACK_IMPORTED_MODULE_1__variables__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return __WEBPACK_IMPORTED_MODULE_2__configuration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_module__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return __WEBPACK_IMPORTED_MODULE_3__api_module__["a"]; });






/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ })
/******/ ]);
});