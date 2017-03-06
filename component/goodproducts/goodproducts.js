angular.module("goodproductsModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('goodproducts', {
        url: '/goodproducts',
        templateUrl: 'component/goodproducts/goodproducts.html',
        controller:'goodproductsCtrl',
        css:'component/goodproducts/goodproducts.css'
    })
	
})

.service('goodproductsData',['$http',function($http){
	this.get=function(){
		return $http.get('component/goodproducts/json/nondefective.json');
	};
	this.getpart_1=function(){
		return $http.get('component/goodproducts/json/nondefective_1.json');
	};
	this.getpart_2=function(){
		return $http.get('component/goodproducts/json/nondefective_2.json');
	};
	this.getpart_3=function(){
		return $http.get('component/goodproducts/json/nondefective_3.json');
	};
	this.getpart_4=function(){
		return $http.get('component/goodproducts/json/nondefective_4.json');
	};
	this.getpart_5=function(){
		return $http.get('component/goodproducts/json/nondefective_5.json');
	};
	this.getpart_6=function(){
		return $http.get('component/goodproducts/json/nondefective_6.json');
	};
	this.getpart_7=function(){
		return $http.get('component/goodproducts/json/nondefective_7.json');
	};
	this.getpart_8=function(){
		return $http.get('component/goodproducts/json/nondefective_8.json');
	};
	
}])

//轮播图
.service('swipe',['$timeout',function($timeout){
	this.swipe=function(){
		$timeout(function(){
			 mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:1000,
			    autoplayDisableOnInteraction : false,
			    paginationClickable :true,
			    pagination: '.swiper-pagination',
	 	 })
		},50);
	}
}])

//计时器
.service('leftTimer',['$timeout','$interval',function($timeout,$interval){
	this.leftTimer=function(){
		$timeout(function(){
			function leftTimer(){ 
				var nowDate=new Date();
				var year=nowDate.getFullYear();
				var month=nowDate.getMonth()+1;
				var day=nowDate.getDate();
				var hour=nowDate.getHours()+1;
				var leftTime = (new Date(year,month-1,day,hour,00,00)) - (new Date()); //计算剩余的毫秒数 
				var days = parseInt(leftTime / 1000 / 60 / 60 / 24); //计算剩余的天数 
				var hours = parseInt(leftTime / 1000 / 60 / 60 % 24); //计算剩余的小时 
				var minutes = parseInt(leftTime / 1000 / 60 % 60);//计算剩余的分钟 
				var seconds = parseInt(leftTime / 1000 % 60);//计算剩余的秒数 
				days = checkTime(days); 
				hours = checkTime(hours); 
				minutes = checkTime(minutes); 
				seconds = checkTime(seconds); 
					$(".hr").html(hours);
					$(".min").html(minutes);
					$(".sec").html(seconds);
			} 
			$interval(leftTimer,1000); 
			function checkTime(i){
				//将0~9的数字前加上0,如1在页面显示为01
				if(i<10){
					i="0"+i;
				}
				return i;
			}
		},500)
	}
}])

.controller('goodproductsCtrl',['$scope','goodproductsData','swipe','leftTimer',function($scope,goodproductsData,swipe,leftTimer){
	goodproductsData.get().success(function(res){
		$scope.obj = res.data;
		//轮播图数据
		$scope.swipeData=res.data[7290].list;
		swipe.swipe();

		//限时抢购数据
		$scope.limitedData=res.data[8927].list;
		
		//限时抢购倒计时
		leftTimer.leftTimer();
		//蘑菇优选数据
		$scope.good_introduceData=res.data[7286].list;

		//良品推荐数据
		$scope.lp_goodsData=res.data[11303].list;

	});
	
	
	//	良品精选数据_part1
	goodproductsData.getpart_1().success(function(res){
		$scope.part_1=res.result.wall.docs;
//		console.log($scope.part_1);
//		console.log($scope.part_1[0].leftbottom_taglist[0].bgColor);
	});
	
	//	良品精选数据_part2
	goodproductsData.getpart_2().success(function(res){
		$scope.part_2=res.result.wall.docs;
//		console.log($scope.part_2);
	});
	
	
	
	
	
}])