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
		return $http.get('component/goodproducts/json/nondefective.json');
	};
	this.getpart_1=function(){
		return $http.get('component/goodproducts/json/nondefective_1.json');
	};
	this.getpart_2=function(){
		return $http.get('component/goodproducts/json/nondefective_2.json');
	};
	this.getpart_3=function(){
		return $http.get('component/goodproducts/json/nondefective_3.json');
	};
	this.getpart_4=function(){
		return $http.get('component/goodproducts/json/nondefective_4.json');
	};
	this.getpart_5=function(){
		return $http.get('component/goodproducts/json/nondefective_5.json');
	};
	this.getpart_6=function(){
		return $http.get('component/goodproducts/json/nondefective_6.json');
	};
	this.getpart_7=function(){
		return $http.get('component/goodproducts/json/nondefective_7.json');
	};
	this.getpart_8=function(){
		return $http.get('component/goodproducts/json/nondefective_8.json');
	};
	
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
		$scope.obj = res.data;
		//轮播图数据
		$scope.swipeData=res.data[7290].list;
		swipe.swipe();

		//限时抢购数据
		$scope.limitedData=res.data[8927].list;
		//蘑菇优选数据
		$scope.good_introduceData=res.data[7286].list;

		//良品推荐数据
		$scope.lp_goodsData=res.data[11303].list;

	});
	
	
	//	良品精选数据_part1
	goodproductsData.getpart_1().success(function(res){
		$scope.part_1=res.result.wall.docs;
		console.log($scope.part_1);
//		console.log($scope.part_1[0].leftbottom_taglist[0].bgColor);
	});
	
	//	良品精选数据_part2
	goodproductsData.getpart_2().success(function(res){
		$scope.part_2=res.result.wall.docs;
//		console.log($scope.part_2);
	});
	
}])