angular.module('womenModule',['ui.router'])
.config(function($stateProvider){
	$stateProvider
	.state('goodproducts.women',{
		url: '/women',
        templateUrl: 'component/goodproducts/women/women.html',
        controller:'womenCtrl',
        css:'component/goodproducts/women/women.css'
	})
})

	
