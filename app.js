document.documentElement.style.fontSize=43*innerWidth/320+'px';
window.onresize=function(){
	document.documentElement.style.fontSize=43*innerWidth/320+'px';
};

var app=angular.module('myApp',['ui.router','angularCSS','homeModule','categoryModule','goodproductsModule','FashionModule'])
.config(function($stateProvider, $urlRouterProvider) {
    //这个是首先加载什么页面
    $urlRouterProvider.otherwise('/home/local');
    
    $stateProvider
   .state('home.local', {
        url: '/local',
        templateUrl: 'component/home/local/local.html'
    })
   .state('home.nonlocal', {
        url: '/nonlocal',
        templateUrl: 'component/home/nonlocal/nonlocal.html'
    })
})