angular.module('FashionModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('category.fashion',{
		url:'/fashion',
		templateUrl:'component/category/fashion/fashion.html',
		controller:'FashionCtrl',
		css:'component/category/fashion/fashion.css'
	})
})

.service('fashionData',['$http',function($http){
	this.get = function(){
		return $http.get('component/category/json/fashion.json')
	}
}])

//.directive("scroll",function($window){
//	return function(scope,element,attrs){
//		angular.element($window).bind("scroll",function(){
//			console.log(this.pageYOffset);
//			scope.$apply();
//		})
//	}
//})
.controller('FashionCtrl',['$scope','$location','$anchorScroll','fashionData',function($scope,$location,$anchorScroll,fashionData){
	fashionData.get().success(function(res){
		console.log(res.result)
		$scope.arr = res.result
	})
	$scope.flag = false
	$scope.toggle = function(){
		$scope.flag = !$scope.flag;
	}
	$scope.goto = function(id){
		$location.hash(id);
		$anchorScroll();
	}
}])