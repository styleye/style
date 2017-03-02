angular.module('secondModule',['ui.router'])
.config(function($stateProvider){
	$stateProvider
	.state('goodproducts.secondPage',{
		url: '/secondPage',
        templateUrl: 'component/goodproducts/secondPages/secondPage.html',
        controller:'secondPageCtrl',
        css:'component/goodproducts/secondPages/secondPage.css'
	})
})

//轮播图
.service('swiper_sec',['$timeout',function($timeout){
	this.swiper=function(){
		$timeout(function(){
			 mySwiper = new Swiper ('.sec_swiper-container', {
			    pagination : '.swiper-pagination',
				paginationType : 'fraction',
	 	 })
		},50);
	}
}])







.service('secondPageData',['$http',function($http){
	this.get=function(){
		return $http.get('component/goodproducts/secondPages/json/detailInfo.json');
	}
}])



.controller('secondPageCtrl',['$scope','secondPageData','swiper_sec',function($scope,secondPageData,swiper_sec){
	
	secondPageData.get().success(function(res){
		$scope.data=res.result;
		console.log($scope.data)
		//轮播图数据
		$scope.rundata=res.result.itemInfo.topImages;
		swiper_sec.swiper();
		
		//商品基本信息数据
		$scope.spIntro=res.result.itemInfo;
		
		//评论数据
		$scope.commentInfo=res.result.rate.list;
		console.log($scope.commentInfo);
		
		
		
	});
	
	
}])
