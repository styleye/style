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



.service('womenData',['$http',function($http){
	this.get=function(){
		return $http.get('component/goodproducts/women/json/jsonp.json');
	};
	this.get_1=function(){
		return $http.get('component/goodproducts/women/json/jsonp1.json')
	}
}])

.controller('womenCtrl',['$scope','$http','womenData',function($scope,$http,womenData){
	
	womenData.get().success(function(res){
		$scope.womenData=res.data;
		//顶栏图片
		$scope.topPicData=res.data[7649];
		
		//热卖疯抢
		$scope.hotSaleData=res.data[7489].list;
	});
	
	womenData.get_1().success(function(res){
		$scope.detailData_1=res.result.wall.docs;
	});
	
	var count=2;
	$scope.womenScroll=function(){
		$http.get("http://list.mogujie.com/search?searchTag=805&action=&cKey=h5-cube-default-v1&cpc_offset=&fcid=10060683&imageSize=220x330&maxPrice=20000&minPrice=1&page="+count+"&ptpPartC=_book_shopping_10060683_h5-cube-default-v1_noab-noab&stitle=&title=&_did=&userId=16thmmy&_mgjuuid=de1b66c9-b0f9-4be3-a113-0d8c1d136329")
		  .success(function (res) {
	  		$scope.Urldatas=res.result.wall.docs;
//			console.log($scope.Urldatas);
			for(var temp in $scope.Urldatas){
				$scope.detailData_1.push($scope.Urldatas[temp]);
			}
		  });
		if(count==4){
			$scope.stopScollFlag=true;
		}
		count++;
	}
		
	
	
	
	
}])