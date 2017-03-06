angular.module("fenzhiModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('fenzhi', {
        url: '/fenzhi',
        templateUrl: 'component/home/fenzhi/fenzhi.html',
        controller:'FenzhiCtrl',
        css:'component/home/fenzhi/fenzhi.css'
    })
	
})
.service('fenzhiData',['$http',function($http){
	this.get=function(){
		return $http.get('component/home/json/multigit.json');
	}
}])
.controller('FenzhiCtrl',['$scope','fenzhiData',function($scope,fenzhiData,$http){
	
	
	
	
}])