angular.module("FenzhiModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/fenzhi/loce');
	$stateProvider
	.state('home.fenzhi', {
        url: '/fenzhi',
        templateUrl: 'component/home/fenzhi/fenzhi.html',
        controller:'FenzhiCtrl',
        css:['component/home/fenzhi/fenzhi.css','css/swipe-3.4.1.min.css']
    })
	
})
.service('fenzhiData',['$http',function($http){
	this.get=function(){
		return $http.get('component/home/fenzhi/josn/lunbo.json');
	}
}])
.service('fenzhitData',['$http',function($http){
	this.get=function(){
		return $http.get('component/home/fenzhi/josn/two.json');
	}
}])
.service('swipe_fz',['$timeout',function($timeout){
	
	this.swiperr=function(){
		console.log(111)
		$timeout(function(){
			 mySwiper = new Swiper ('.fz_swiper-container', {
			    loop: true,
			    autoplay:1000,
			    autoplayDisableOnInteraction : false,
			    paginationClickable :true,
			    pagination: '.swiper-pagination',
	 	 })
		},50);
	}
}])

.controller('FenzhiCtrl',['$scope','fenzhiData','fenzhitData','swipe_fz',function($scope,fenzhiData,fenzhitData,$http,swipe_fz){
	fenzhiData.get().success(function(res){
		$scope.naveearr=res.data[6877].list;
		$scope.navetarr=res.data[23163].list;
		$scope.navharr=res.data[6876].list;
	})
	fenzhitData.get().success(function(res){
		console.log(res.result.wall)
	})
	swipe_fz.swiperr();
	
	
}])