angular.module("homeModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/local');
	$stateProvider
	.state('home', {
        url: '/home',
        templateUrl: 'component/home/home.html',
        controller:'HomeCtrl',
        css:'component/home/home.css'
    })
	
})

.service('homeData',['$http',function($http){
	this.get=function(){
		return $http.get('json/5.json');
	}
}])
.controller('HomeCtrl',['$scope','homeData',function($scope,homeData){
	homeData.get().success(function(res){
		$scope.arr = res.product;
		console.log(res.product)
	})
}])