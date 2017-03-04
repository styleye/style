angular.module('FashionModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('category.fashion',{
		url:'/fashion',
		templateUrl:'component/category/fashion/fashion.html',
		controller:'FashionCtrl',
		css:'component/category/fashion/fashion.css'
	})
})

.service('fashionData',['$http',function($http){
	this.get = function(){
		return $http.get('component/category/json/fashion.json')
	}
}])

.service('similarData',['$http',function($http){
	this.get = function(){
		return $http.get('component/category/json/similar.json')
	}
}])

.controller('FashionCtrl',['$scope','$location','$anchorScroll','fashionData','similarData',function($scope,$location,$anchorScroll,fashionData,similarData){
	fashionData.get().success(function(res){
		console.log(res.result)
		$scope.arr = res.result
	})
	similarData.get().success(function(res){
		console.log(res.result.wall.docs)
	})
	$scope.flag = false
	$scope.toggle = function(){
		$scope.flag = !$scope.flag;
	}
	
	
	$scope.getLevel = function($event){
		var price = $event.target.innerText;
		var level = price.split("-")
		//console.log(level[0]);
		setValue(level[0],level[1])
	}
	//将值写入input框
	$scope.setValue = function(min,max,sorts){
		$('.min_price').val(Number(min));
		$('.max_price').val(Number(max));
	}
	//按提交价格排序
	$scope.submitBtn = function(){
		var min = $('.min_price').val();
		var max = $('.max_price').val();
		$scope.flag = !$scope.flag;
		$scope.f = function(e){
			return e.price>=min && e.price<max
		}
	}
	//按销量排序
	$scope.range = function(method){
		$scope.s = method;
		$scope.f = method;
	}
	
	$scope.hideFun = function(txt,key){
		$scope.judg = true;
		$scope.n = key;
		$(".fashion_header>p").text(txt);
		//console.log(txt)
	}
	
	//跳转到顶部
	$scope.goto = function(id){
		$location.hash(id);
		$anchorScroll();
	}
	//监测滑动高度
	$(".fashion_icon>a:last-child").hide();
	$(document).scroll(function(){
		var scrollH = $(this).scrollTop();
		//console.log(scrollH)
		if(scrollH >= 300){
			$(".fashion_icon>a:last-child").show();
		}else{
			$(".fashion_icon>a:last-child").hide();
		}
	})
	
	//相似商品跳转
	$scope.similarGood = function(obj){
		console.log(obj);
		$('#fashion_wrap').hide();
	}
	
	
}])