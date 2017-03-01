angular.module('FashionModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('category.fashion',{
		url:'/fashion',
		templateUrl:'component/category/fashion/fashion.html'
	})
})