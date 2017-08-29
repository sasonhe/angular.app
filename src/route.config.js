var app = angular.module('myApp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',
        {
            templateUrl:"./src/components/home.html",
            controller:"homeCtrol"
        }
    )
    .when('/list',
        {
            templateUrl:"./src/components/list.html",
            controller:"listCtrol"
        }
    )
}]);
app.controller("homeCtrol",function($scope){
	$scope.title = "这是首页内容";
});
app.controller("listCtrol",function($scope){
	$scope.title = "哈哈，这是list内容";
});
