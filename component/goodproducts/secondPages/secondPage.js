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
		
		//店铺详情数据
		$scope.shopDetailMsg=res.result.shopInfo;
		
		//图文详情数据
		$scope.detailInfo=res.result.detailInfo;
		
		//商品参数
		//表格参数
		$scope.tableData=res.result.itemParams.rule.tables;
//		console.log($scope.tableData);
		//列表参数
		$scope.listData=res.result.itemParams.info.set;
		
	});
	
	$scope.flag=true;
	
	
	$(document).scroll(function(){
	if($(document).scrollTop()>1800){
		console.log($(document).scrollTop());
		$(document).scrollTop(0);
	}
	})
	
	
}])
