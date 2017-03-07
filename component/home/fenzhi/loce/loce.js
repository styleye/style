angular.module("loceModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home.fenzhi.loce', {
        url: '/loce',
        templateUrl: 'component/home/fenzhi/loce/loce.html',
        css:['component/home/fenzhi/fenzhi.css','component/home/fenzhi/loce/loce.css'],
        controller:'LoceCtrl'
    })
	
})
.service('loceData',['$http',function($http){
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


.controller('LoceCtrl',['$scope','loceData','swipe_fz',function($scope,loceData,$http,swipe_fz){
	loceData.get().success(function(res){
		console.log(res.result.wall)
		$scope.locearr=res.result.wall.docs;
		swipe_fz.swiperr();
	})
	
	
	
}])