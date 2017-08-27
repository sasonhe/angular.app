import angular from 'angular';
import angularRoute from 'angular-route';
// import route from './route.config.js';
// 'imports?$=angular!./apps/route'
var app = angular.module('myApp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .state('/',
        {
            templateUrl:require("./components/home.html"),
            controller:"homeCtrol"
        }
    )
    .state('/list',
        {
            templateUrl:require("./components/list.html"),
            controller:"listCtrol"
        }
    );
}]);
app.controller("homeCtrol",function($scope){
	$scope.title = "哈哈，这是首页内容";
});
app.controller("listCtrol",function($scope){
	$scope.title = "哈哈，这是list内容";
});
