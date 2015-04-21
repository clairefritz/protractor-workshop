"use strict";
var __cov_wrUTz87eBZY5qtFXrJFDnQ = (Function('return this'))();
if (!__cov_wrUTz87eBZY5qtFXrJFDnQ.__coverage__) { __cov_wrUTz87eBZY5qtFXrJFDnQ.__coverage__ = {}; }
__cov_wrUTz87eBZY5qtFXrJFDnQ = __cov_wrUTz87eBZY5qtFXrJFDnQ.__coverage__;
if (!(__cov_wrUTz87eBZY5qtFXrJFDnQ['src/js/workshop.js'])) {
   __cov_wrUTz87eBZY5qtFXrJFDnQ['src/js/workshop.js'] = {"path":"src/js/workshop.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":15,"loc":{"start":{"line":15,"column":33},"end":{"line":15,"column":59}}}},"statementMap":{"1":{"start":{"line":3,"column":4},"end":{"line":35,"column":8}},"2":{"start":{"line":16,"column":8},"end":{"line":34,"column":15}}},"branchMap":{}};
}
__cov_wrUTz87eBZY5qtFXrJFDnQ = __cov_wrUTz87eBZY5qtFXrJFDnQ['src/js/workshop.js'];
__cov_wrUTz87eBZY5qtFXrJFDnQ.s['1']++;angular.module('workshop',['ngAnimate','ngAria','ngCookies','ngMessages','ngResource','ngRoute','ngSanitize','ngTouch','grandfatherOfAllKnowledge','repeatAfterMe','releases']).config(['$routeProvider',function($routeProvider){__cov_wrUTz87eBZY5qtFXrJFDnQ.f['1']++;__cov_wrUTz87eBZY5qtFXrJFDnQ.s['2']++;$routeProvider.when('/grandfather-of-all-knowledge',{templateUrl:'partials/grandfather.html',controller:'GrandfatherCtrl',controllerAs:'gf'}).when('/repeat-after-me',{templateUrl:'partials/afterMe.html',controller:'AfterMeCtrl',controllerAs:'af'}).when('/releases',{templateUrl:'partials/releases.html',controller:'ReleasesCtrl',controllerAs:'rel'}).otherwise({redirectTo:'/'});}]);
