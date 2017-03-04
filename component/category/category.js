angular.module("categoryModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('category', {
        url: '/category',
        templateUrl: 'component/category/category.html',
        controller:'categoryCtrl',
        css:'component/category/category.css'
    })
	
})

.service('categoryData',['$http',function($http){
	this.get=function(){
		return $http.get('component/category/json/category.json');
	}
}])
.service('categoryHot',['$http',function($http){
	this.get=function(){
		return $http.get('component/category/json/3627.json');
	}
}])

.controller('categoryCtrl',['$scope','$anchorScroll','categoryData','categoryHot',function($scope,$anchorScroll,categoryData,categoryHot){
	categoryData.get().success(function(res){
		$scope.arr = res.data[581].list;
		//console.log(res.data[581].list)
	})
	categoryHot.get().success(function(res){
		$scope.arrList = res.data[3627].list
		//console.log(res.data[3627].list)
	})
	$scope.index = 0;
	//点击获取对应json号，图片地址
	$scope.getKey = function(key,imgUrl,i){
		//console.log(imgUrl.length);
		$scope.index = this.$index;
		$scope.img = imgUrl;
		$.getJSON('component/category/json/'+key+'.json',function(data){
			$scope.arrList = data.data[key].list;
			//console.log(data.data[key].list)
		})	
		
	}
	
	
}])