angular.module("goodproductsModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('goodproducts', {
        url: '/goodproducts',
        templateUrl: 'component/goodproducts/goodproducts.html',
        controller:'goodproductsCtrl',
        css:'component/goodproducts/goodproducts.css'
    })
	
})

.service('goodproductsData',['$http',function($http){
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
.controller('goodproductsCtrl',['$scope','goodproductsData','swipe',function($scope,goodproductsData,swipe){
	goodproductsData.get().success(function(res){
		$scope.arr = res.product;
		console.log(res.product)
		swipe.swipe();
	})
}])