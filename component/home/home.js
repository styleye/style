angular.module("homeModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/local');
	$stateProvider
	.state('home', {
        url: '/home',
        templateUrl: 'component/home/home.html',
        controller:'HomeCtrl',
        css:'component/home/home.css'
    })
	
})

.service('homeData',['$http',function($http){
	this.get=function(){
		return $http.get('component/home/json/multigit.json');
	}
}])
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

.controller('HomeCtrl',['$scope','homeData','swipe','$http',function($scope,homeData,swipe,$http){
	homeData.get().success(function(res){
		$scope.bottomArr=res.data[4604].list;
		$scope.headarr=res.data[36344].list;
		$scope.shoopLeft=res.data[36355].list[0];
		$scope.shoopTop=res.data[36355].list[1];
		$scope.shoopBottomone=res.data[36355].list[2];
		$scope.shoopBottomtwo=res.data[36355].list[3];
		$scope.partobj=res.data[8927].list[0];
		$scope.modarr=res.data[8927].list[0].list;
		$scope.rowarr=res.data[4746].list;
		
	})
	
setInterval(function(){
	runFun();
},100)
	

	function runFun(){
		var runTop=$($).scrollTop();
		var height=$($).outerHeight();
		var ouverheight=$(window).height();
		if (ouverheight+runTop+5>=height) {
		if (num==0) {
		$http.get('component/home/json/'+arr[0]+'.json').success(function(res){
			$scope.tempone=res.result.wall.docs;
		});
		num++;
		}/*else if(num==1){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.temptwo=res.result.wall.docs;
		});
		num++;
		}else if(num==2){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.temptwo=res.result.wall.docs;
		});
		num++;
		}else if(num==3){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempthree=res.result.wall.docs;
		});
		num++;
		}else if(num==4){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempfour=res.result.wall.docs;
		});
		num++;
		}else if(num==5){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempfive=res.result.wall.docs;
		});
		num++;
		}else if(num==6){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempsix=res.result.wall.docs;
		});
		num++;
		}else if(num==7){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempseven=res.result.wall.docs;
		});
		num++;
		}else if(num==8){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempeight=res.result.wall.docs;
		});
		num++;
		}else if(num==9){
			$http.get('component/home/json/'+arr[num]+'.json').success(function(res){
			$scope.tempnine=res.result.wall.docs;
		});
		num++;
		}*/
	}
		}
	
	swipe.swipe();
}])
var num=0;
var arr=['one','two','three','four','five','six','seven','eight','nine'];


