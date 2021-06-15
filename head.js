$(function(){

	$("header").append('<div class="header_top"><div class="header_top_content"><div class="_top_content_left"></div><div class="_top_content_right"><a href="javascript:;">APP下载<img src="images/header/QrCode_app.png"></a></div></div></div><div class="header_bottom"><div class="logo"><a href="index.html"><img src="images/header/logo.png"></a></div><div class="m_head_nav"><span></span><span></span></div><div class="m_head_navMeng"><div><span><a href="index.html">首页</a></span></div><div><span><a href="introduction.html">走进创销</a></span></div><div><span><a href="mhy_sfa.html">解决方案</a></span></div><div><span><a href="industryNews.html">资源中心</a></span></div><div><span><a href="contactUs.html">关于飞读速思</a></span></div></div><ul><li><a class="header_high" href="index.html">首页</a></li><ul><li><a href="introduction.html">公司介绍</a></li><li><a href="culture.html">企业文化</a></li></ul></li><ul><li><a href="mhy_sfa.html">高效速读SFA</a></li><li><a href="mhy_sfa.html">CSA终端服务平台</a></li><li><a href="mhy_sfa.html">供应链金融服务</a></li></ul></li><ul><li><a href="app_download.html">应用下载</a></li><li><a href="industryNews.html">行业新闻</a></li></ul></li><li><a  class="header_high_contactUs" href="contactUs.html">关于飞读速思</a><ul></ul></li></ul></div>');
	$('head').append('<meta http-equiv="Content-Type" content="text/html;charset=gb2312"/><meta name="sogou_site_verification" content="ikkivvcKYS"/><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">')
	var arr=window.location.href.split('/');

	$('a.header_high').each(function(i){

		if($(this).attr("href")==arr[arr.length-1]){

			$(this).css({"background-color":"#197dce","color":"#fff"})
		}
	})

	var arrName = arr[arr.length-1].slice(0,-5);	

	if(arrName == "introduction" || arrName == "history" || arrName == "culture" || arrName == "honor" || arrName == "staff"){

		$(".header_high_introduction").css({"background-color":"#197dce","color":"#fff"})

	}else if(arrName == "WarehousingService" || arrName == "DistributionService" || arrName == "WarehouseIntegration" || arrName == "Value-added_logistics_service" || arrName == "CirculationService" || arrName == "VendingMachine"){

		$(".header_high_TPL").css({"background-color":"#197dce","color":"#fff"})

	}else if(arrName == "companyNews" || arrName == "industryNews"){

		$(".header_high_companyNews").css({"background-color":"#197dce","color":"#fff"})

	}else if(arrName == "contactUs" || arrName == "BranchOffice" || arrName == "WarehouseAddress"){

		$(".header_high_contactUs").css({"background-color":"#197dce","color":"#fff"})
	}


	$('header .header_bottom .m_head_nav').click(function(){

		if($('header .header_bottom .m_head_navMeng').css('display') == 'none'){
			$('header .header_bottom .m_head_nav span').eq(0).css({'transform':'translate(-50%,0) rotate(-45deg)','-ms-transform':'translate(-50%,0) rotate(-45deg)','-moz-transform':'translate(-50%,0) rotate(-45deg)','-webkit-transform':'translate(-50%,0) rotate(-45deg)','-o-transform':'translate(-50%,0) rotate(-45deg)'});
		
			$('header .header_bottom .m_head_nav span').eq(1).css({'transform':'translate(-50%,0) rotate(45deg)','-ms-transform':'translate(-50%,0) rotate(45deg)','-moz-transform':'translate(-50%,0) rotate(45deg)','-webkit-transform':'translate(-50%,0) rotate(45deg)','-o-transform':'translate(-50%,0) rotate(45deg)'});
		
			$('header .header_bottom .m_head_navMeng').stop().show(1000);
		}else{
			$('header .header_bottom .m_head_nav span').eq(0).css({'transform':'translate(-50%,-1vw) rotate(0)','-ms-transform':'translate(-50%,-1vw) rotate(0)','-moz-transform':'translate(-50%,-1vw) rotate(0)','-webkit-transform':'translate(-50%,-1vw) rotate(0)','-o-transform':'translate(-50%,-1vw) rotate(0)'});
		
			$('header .header_bottom .m_head_nav span').eq(1).css({'transform':'translate(-50%,1vw) rotate(0)','-ms-transform':'translate(-50%,1vw) rotate(0)','-moz-transform':'translate(-50%,1vw) rotate(0)','-webkit-transform':'translate(-50%,1vw) rotate(0)','-o-transform':'translate(-50%,1vw) rotate(0)'});
		
			$('header .header_bottom .m_head_navMeng').stop().hide(1000);
		}
		
	})

})
