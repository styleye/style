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

//.service('fashionData',['$http',function($http){
//	this.get = function(){
//		return $http.get(url)
//	}
//}])

.service('similarData',['$http',function($http){
	this.get = function(){
		return $http.get('component/category/json/similar.json')
	}
}])

.controller('FashionCtrl',['$scope','$location','$anchorScroll','$state','$http','similarData',function($scope,$location,$anchorScroll,$state,$http,similarData){
	$http.get('http://list.mogujie.com/search?f=baidusem_4uv5iimn1v&sort=pop&_mgjuuid=f985c5c0-2315-41d8-a325-87987d0bcc9c&expName=sqcate1&acm=3.mce.1_10_1a6ys.3627.0.zmryZqd923t9z.m_237766-mf_3682_33858&width=330&title=%E6%97%B6%E5%B0%9A%E5%A5%97%E8%A3%85&height=440&cKey=h5-wall-v1&page=1&userId=16tbix2&action=clothing&fcid=50243&ad=0&ptp=m1._mf1_940_3682.0.0.PS6B3&_version=61').success(function(res){
	//	console.log(res.result)
		$scope.arr = res.result
		$scope.arrs = res.result.wall.docs;
	})
	var count = 2;
	$scope.good_Scroll = function(){
		$http.get("http://list.mogujie.com/search?f=baidusem_4uv5iimn1v&sort=pop&_mgjuuid=f985c5c0-2315-41d8-a325-87987d0bcc9c&expName=sqcate1&acm=3.mce.1_10_1a6ys.3627.0.zmryZqd923t9z.m_237766-mf_3682_33858&width=330&title=%E6%97%B6%E5%B0%9A%E5%A5%97%E8%A3%85&height=440&cKey=h5-wall-v1&page="+count+"&userId=16tbix2&action=clothing&fcid=50243&ad=0&ptp=m1._mf1_940_3682.0.0.PS6B3&_version=61").success(function(res){
			$scope.goodUrldatas=res.result.wall.docs;
			for(temp in $scope.goodUrldatas){
				$scope.arrs.push($scope.goodUrldatas[temp]);
			}
			if(goodnum==9){
			$stopScollFlag=true;
			}
			count++;
		})
	}
	similarData.get().success(function(res){
		//console.log(res.result.wall.docs)
	})
	$scope.flag = false
	$scope.toggle = function(){
		$scope.flag = !$scope.flag;
	}
	//点击改变选项卡样式
	$scope.changeStyle = function($event){
		$($event.target).siblings().css("color","#333");
		$($event.target).css("color","#ef4562");

	}
	
	$scope.getLevel = function($event){
		var price = $event.target.innerText;
		var level = price.split("-")
		//console.log(level[0]);
		setValue(level[0],level[1])
	}
	//将值写入input框
	$scope.setValue = function(min,max){
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
	$scope.range = function(method,empty){
		$scope.s = method;
		$scope.f = empty;
		
	}
	
	$scope.hideFun = function(txt,key){
		$(".fashion_header>p").text(txt);
		//console.log(txt)
//		$scope.f = function(e){
//			return e.$$hashKey == key
//		}
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
	$scope.flg = true;
	$scope.similarGood = function(obj,$event){
		console.log(obj);
		$event.stopPropagation();
		$('.fashion_header').hide();
		$('.nav_fixed').hide();
		$('#fashion_similar').css("visibility","visible");
		$scope.pic = obj.img;
		$scope.txt = obj.title;
		$scope.price = obj.price;
		$scope.love = obj.cfav;
		$scope.flg = false;
	}
	
	
	$scope.goCar = function(){
		$state.go('mine.shopcar')
	}
	
	$scope.runTo = function(){
		$state.go('goodproducts.secondPage')
	}
}])