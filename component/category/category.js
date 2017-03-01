angular.module("categoryModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('category', {
        url: '/category',
        templateUrl: 'component/category/category.html',
        controller:'categoryCtrl',
        css:'component/category/category.css'
    })
	
})

.service('categoryData',['$http',function($http){
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
.controller('categoryCtrl',['$scope','categoryData','swipe',function($scope,categoryData,swipe){
	categoryData.get().success(function(res){
		$scope.arr = res.product;
		console.log(res.product)
		swipe.swipe();
	})
}])