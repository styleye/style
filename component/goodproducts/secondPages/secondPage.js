angular.module('secondModule',['ui.router'])
.config(function($stateProvider){
	$stateProvider
	.state('goodproducts.secondPage',{
		url: '/secondPage',
        templateUrl: 'component/goodproducts/secondPages/secondPage.html',
        controller:'secondPageCtrl',
        css:'component/goodproducts/secondPages/secondPage.css'
	})
})

//轮播图
.service('swiper_sec',['$timeout',function($timeout){
	this.swiper=function(){
		$timeout(function(){
			 mySwiper = new Swiper ('.sec_swiper-container', {
			    pagination : '.swiper-pagination',
				paginationType : 'fraction',
	 	 })
		},50);
	}
}])







.service('secondPageData',['$http',function($http){
	this.get=function(){
		return $http.get('component/goodproducts/secondPages/json/detailInfo.json');
	}
}])



.controller('secondPageCtrl',['$scope','secondPageData','swiper_sec',function($scope,secondPageData,swiper_sec){
	
	secondPageData.get().success(function(res){
		$scope.data=res.result;
		console.log($scope.data)
		//轮播图数据
		$scope.rundata=res.result.itemInfo.topImages;
		swiper_sec.swiper();
		
		//商品基本信息数据
		$scope.spIntro=res.result.itemInfo;
		
		//评论数据
		$scope.commentInfo=res.result.rate.list;
		
		//店铺详情数据
		$scope.shopDetailMsg=res.result.shopInfo;
		
		//图文详情数据
		$scope.detailInfo=res.result.detailInfo;
		
		//商品参数
		//表格参数
		$scope.tableData=res.result.itemParams.rule.tables;
//		console.log($scope.tableData);
		//列表参数
		$scope.listData=res.result.itemParams.info.set;
		//点击购买或放入购物车数据
		$scope.skuInfoData=res.result.skuInfo;
		
		
		
		
		
		
	$scope.mask_flag=true;
	$scope.dialog_flag=true;
	//点击蘑菇良品出现隐藏图层
	$scope.show_dialog=function(){
		$scope.dialog_flag=!$scope.dialog_flag;
		$scope.mask_flag=!$scope.mask_flag;
	}
	
	//点击隐藏图层关闭按钮关闭蘑菇良品隐藏图层
	
	$scope.hide_dialog=function(){
		$scope.dialog_flag=!$scope.dialog_flag;
		$scope.mask_flag=!$scope.mask_flag;
	}
//	促销信息隐藏图层
	$scope.show_promotion=function(){
		$('body').css({
			'overflow':'hidden'
		});
		$('.sec_promotion-box').show();
	}

	$scope.hide_promotion=function(){
		$('body').css({
			'overflow':'auto'
		});
		$('.sec_promotion-box').hide();
	}
	
	//滚动条滑动时的效果
	$(document).scroll(function(){
		var h1=$('#sec_PanelGraphic').outerHeight();
		var h2=$('#sec_PanelParameter').outerHeight();
		if($(document).scrollTop()>=700){
			$('.menus-box').css({
				"transform": "translate3d(0, -65px, 0)",
   				"transition": "all 500ms"
			});
			$('.go-top').removeClass('scroll-hide');
			$('.go-top').addClass('scroll-show');
			
			
		}else{
			$('.menus-box').css({
				"transform": "translate3d(0, 0, 0)",
   				"transition": "all 500ms"
			});
			$('.go-top').removeClass('scroll-show');
			$('.go-top').addClass('scroll-hide');
			
		};
		
		if($(document).scrollTop()>=1710){
			$('.sec_tabpanel-tabs').css({
				'position':'fixed',
				'top':0,
				'left':0,
				'z-index':'9'
			})
		}else{
			$('.sec_tabpanel-tabs').css({
				'position':'inherit'
			})
		}
		
		if($(document).scrollTop()<(1730+h1)){
			$('.sec_tab-item').removeClass('sec_active');
			$('.sec_tab-item').eq(0).addClass('sec_active');
		}else if($(document).scrollTop()>=(1730+h1)&&$(document).scrollTop()<(1730+h1+h2)){
			$('.sec_tab-item').removeClass('sec_active');
			$('.sec_tab-item').eq(1).addClass('sec_active');
		}else{
			$('.sec_tab-item').removeClass('sec_active');
			$('.sec_tab-item').eq(2).addClass('sec_active');
		}
//		console.log($(document).scrollTop());
	});
	
			
	
//	点击产品详情导航栏时的动态效果
	$('.sec_tabpanel-tabs>.sec_tab-item').click(function(){
		var h1=$('#sec_PanelGraphic').outerHeight();
		var h2=$('#sec_PanelParameter').outerHeight();
		if($(this).index()==0){
			$(document).scrollTop(1730);
		}else if($(this).index()==1){
			$(document).scrollTop(h1+1731);
//			$(document).scrollTop(20705);	
		}else{
			$(document).scrollTop(h1+h2+1732);
//			$(document).scrollTop(21590);
		}
	})
	
	
	//点击置顶是的动态效果
	$scope.goTop=function(){
		$('html,body').animate({
			"scrollTop":0
		},1000)
	}
		
	//点击快捷导航出现导航
	
	$scope.showNav=function(e){
		var	e=window.event||event;
		e.stopPropagation();
		$('.left-navigation-container .menus .menu-item').animate({
			"height": "100px",
			"opacity": 1
		});
		
		$('.left-navigation-container .menu-btn .icon').css("display","block");
		$('.left-navigation-container .menu-btn p').hide();
		$('.left-navigation-container .menu-btn').addClass('del_');
		$scope.mask_flag=!$scope.mask_flag;
		
	}
		
	$scope.hideClose=function(e){
		var	e=window.event||event;
		e.stopPropagation();
		$('.left-navigation-container .menu-btn p').show();
		$('.left-navigation-container .menu-btn').removeClass('del_');
		$('.left-navigation-container .menu-btn .icon').css("display","none");
		$('.left-navigation-container .menus .menu-item').animate({
			"height": "40px",
			"opacity": 0
		});
		$scope.mask_flag=!$scope.mask_flag;
		
	}
		
	//点击购物车,立即购买出现隐藏图层
		$scope.show_goodsku=function(){
			$('.goods-sku').css({
				'visibility':'visible'
			});
		}
		$scope.close_goodsku=function(){
			$('.goods-sku').css({
				'visibility':'hidden'
			});
		}
		
		
		
		$scope.selected_style=function(i){
			$('.style-list>li').removeClass("c");
			$('.style-list>li').eq(i).addClass("c");
		}
		
		$scope.selected_size=function(i){
			$('.size-list>li').removeClass("c");
			$('.size-list>li').eq(i).addClass("c");
		}
		
		
		
		
		//g购买数量
		
		//添加
		$('.add-icon').click(function(){
			var num=$('.num-input').text();
			num++;
			if(num>1){
				$('.num-reduce').removeClass('num-disable');
			}
			$('.num-input').text(num);
			sumPrice();
		});
		
		//减少
		
		$('.reduce-icon').click(function(){
			var num=$('.num-input').text();
			num--;
			if(num<2){
				num=1;
				$('.num-reduce').addClass('num-disable');
			}
			$('.num-input').text(num);
			sumPrice();
		});
		
		//计算价格
		function sumPrice(){
//			console.log(111)
			var qty=$('.num-input').text()/1;
			var unit_price=$scope.skuInfoData.defaultPrice.split('¥')[1]/1;
			var totalSum=(qty*unit_price).toFixed(2);
			$('.sku-title-price>.price').html('¥'+totalSum);
		}
		
		//通过尺码和颜色进行筛选
		
		
	});
	
	
	
	
	
	
	
	
}])
