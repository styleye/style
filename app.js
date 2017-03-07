document.documentElement.style.fontSize=43*innerWidth/320+'px';
window.onresize=function(){
	document.documentElement.style.fontSize=43*innerWidth/320+'px';
};
angular.module('myApp',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','goodproductsModule','FashionModule','secondModule','MineModule','FenzhiModule','loceModule','infinite-scroll'])

.config(function($stateProvider, $urlRouterProvider) {
    //这个是首先加载什么页面
    $urlRouterProvider.otherwise('/home');
    
})