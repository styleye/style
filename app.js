angular.module('myApp',['ui.router','angularCSS','homeModule'])
.config(function($stateProvider, $urlRouterProvider) {
    //这个是首先加载什么页面
    $urlRouterProvider.otherwise('/home/local');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
//  .state('home', {
//      url: '/home',
//      templateUrl: 'component/home/home.html'
//  })
   .state('category', {
        url: '/category',
        templateUrl: 'component/category/category.html'
    })
   .state('home.local', {
        url: '/local',
        templateUrl: 'component/home/local/local.html'
    })
   .state('home.nonlocal', {
        url: '/nonlocal',
        templateUrl: 'component/home/nonlocal/nonlocal.html'
    })
})