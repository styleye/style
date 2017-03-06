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
.controller('LoceCtrl',['$scope','loceData','swipe',function($scope,loceData,$http,swipe){
	loceData.get().success(function(res){
		console.log(res.result.wall)
		$scope.locearr=res.result.wall.docs;
		
	})
	
	
	
}])