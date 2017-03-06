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

.controller('categoryCtrl',['$scope','$anchorScroll','$state','categoryData','categoryHot',function($scope,$anchorScroll,$state,categoryData,categoryHot){
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
	$scope.getKey = function(key,imgUrl){
		//console.log(imgUrl.length);
		$scope.index = this.$index;
		$scope.img = imgUrl;
		$.getJSON('component/category/json/'+key+'.json',function(data){
			$scope.arrList = data.data[key].list;
			//console.log(data.data[key].list)
		})		
	}
	//导航向上移动动画效果
	var scrolltop = 0;
	$scope.run = function($event){
		//获取当前点击元素的top值
		var distance = $($event.target).offset().top;
		//console.log(distance);
		if(distance>267 && distance <383){
			scrolltop+=40
			if(scrolltop>=120){
				scrolltop = 120;
				
			}
			
			$('.category_nav').stop(true,true);
			$('.category_nav').animate({
				'scrollTop':scrolltop
			},500)
			
			
		}else if(distance>=384){
			scrolltop+=80
			if(scrolltop>=120){
				scrolltop = 120;
			}
			$('.category_nav').stop(true,true);
			$('.category_nav').animate({
				'scrollTop':scrolltop
			},500)
		}else if(distance<=303){
			scrolltop-=40
			if(scrolltop<=0){
				scrolltop=0;
			}
			$('.category_nav').stop(true,true);
			$('.category_nav').animate({
				'scrollTop':scrolltop
			},500)
			
		}
	}

	$scope.toCar = function(){
		$state.go('mine.shopcar');
	}
	
	
	
}])