angular.module('shopcarModule',['ui.router'])
.config(function($stateProvider){
	$stateProvider
	.state('mine.shopcar',{
		url:'/shopcar',
		templateUrl:'component/mine/shopcar/shopcar.html',
		css:'component/mine/shopcar/shopcar.css',
		controller:'shopcarCtrl'
	});
})

.controller('shopcarCtrl',['$scope','$state',function($scope,$state){
	$scope.toHome = function(){
		$state.go('home');
	}
}])