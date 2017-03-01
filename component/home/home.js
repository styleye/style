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
.service('swipe',['$timeout',function($timeout){
	this.swipe=function(){
		$timeout(function(){
			 mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:1000,
			    autoplayDisableOnInteraction : false,
			    paginationClickable :true,
			    pagination: '.swiper-pagination',
	 	 })
		},50);

	}
}])
.controller('HomeCtrl',['$scope','homeData','swipe',function($scope,homeData,swipe){
	homeData.get().success(function(res){
		$scope.arr = res.product;
		console.log(res.product)
		swipe.swipe();
	})
}])