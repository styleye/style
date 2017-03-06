angular.module("FenzhiModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/fenzhi/loce');
	$stateProvider
	.state('home.fenzhi', {
        url: '/fenzhi',
        templateUrl: 'component/home/fenzhi/fenzhi.html',
        controller:'FenzhiCtrl',
        css:'component/home/fenzhi/fenzhi.css'
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

.controller('FenzhiCtrl',['$scope','fenzhiData','fenzhitData','swipe',function($scope,fenzhiData,fenzhitData,$http,swipe){
	fenzhiData.get().success(function(res){
		$scope.naveearr=res.data[6877].list;
		$scope.navetarr=res.data[23163].list;
		$scope.navharr=res.data[6876].list;
	})
	fenzhitData.get().success(function(res){
		console.log(res.result.wall)
	})
	
	
	
}])