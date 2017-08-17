$(function(){
	// タッチデバイス対策
	var _touch = ('ontouchend' in document) ? 'touchend' : 'click';

	$.fn.enter = function(enter,leave) {
		this.on('mouseenter mouseover', enter);
		this.on('mouseleave', leave);
	};

	// スムーススクロール
	$('a[href^="#"]').on(_touch,function(){
	    var speed = 500;
	    var href= $(this).attr("href");
	    var target = $(href == "#" || href == "" ? 'html' : href);
	    var position = target.offset().top;
	    $("html, body").animate({scrollTop:position}, speed, "swing");
	    return false;
	  });

	// mofmofとは
	$(".about_member_01").enter(function() {
		$(this).addClass('hover');
	},
	function() {
		$(this).removeClass('hover');
	});


	// PCのとき
	var w = $(window).width();
	if(w >= 1024){

	// トップページスライド
	$(".js_main_slide").slick({
	    infinite: true,
	    arrows: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	  	autoplaySpeed: 3000,
	  	asNavFor: '#js_main_nav'
	  });

// スライドナビゲーション
	$("#js_main_nav").slick({
		vertical: true,
		slidesToShow: 4,
	    slidesToScroll: 1,
	    autoplay: false,
	    asNavFor: 'js_main_slide'
	});
	$('#js_main_nav li').on('mouseover', function(e) {
	    var $currTarget = $(e.currentTarget),
	    index = $currTarget.data('slick-index'),
	    slickObj = $('.js_main_slide').slick('getSlick');
	    slickObj.slickGoTo(index, true);    // アニメーション中でも切り替える
	    $slide.slick('slickPause');     // 自動切り替え停止
		$('.main_image_item').toggleClass('hover');
	})
	.on('mouseout', function(e) {
	    $slide.slick('slickPlay');  // 自動切り替え再開
	});

	// インフォメーションスライド
		  $(".section_info_slide").slick({
		    dots: false,
		    infinite: true,
		    centerMode: true,
		    // centerPadding: '10px',
		    slidesToShow: 4,
		    slidesToScroll: 1,
		    autoplay: false,
		  	autoplaySpeed: 2000
		  });

	// フッター
	    var ft_contact = $('#footer_contact:not(.contact #footer_contact)');
	    ft_contact.hide();
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            ft_contact.fadeIn();
	        } else {
	            ft_contact.fadeOut();
	        }
	    });

	} else {

		// SPメニュー
		$("#gnav_btn").on(_touch,function(){
			var h = screen.availHeight
			$("#overlay").toggleClass('open','',3000,"easeOutCirc");
			$(this).toggleClass('hover close');
			$('body,html').toggleClass('ofh');
		});

		// トップページスライド
		$(".js_main_slide").slick({
		    infinite: true,
		    arrows: false,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    responsive: true,
		    autoplay: true,
		  	autoplaySpeed: 3000,
		  	asNavFor: '#js_main_nav'
		  });

	// スライドナビゲーション
		$("#js_main_nav").slick({
			vertical: false,
			slidesToShow: 4,
		    slidesToScroll: 1,
		    autoplay: false,
		    asNavFor: 'js_main_slide'
		});

		$('#js_main_nav li').on('touchend', function(e) {
		    var $currTarget = $(e.currentTarget),
		    index = $currTarget.data('slick-index'),
		    slickObj = $('.js_main_slide').slick('getSlick');
		    slickObj.slickGoTo(index, true);    // アニメーション中でも切り替える
		    $slide.slick('slickPause');     // 自動切り替え停止
			$('.main_image_item').toggleClass('hover');
		})
		.on('mouseout', function(e) {
		    $slide.slick('slickPlay');  // 自動切り替え再開
		});
	}

	// mofmofとは
	$(".about_member_01").on(_touch,function(){
		$(this).toggleClass('hover');
	});	

	// アコーディオン
        $(".js_accordion").each(function() {
            var accordion = $(this);
            $(this).find(".js_switch").on(_touch,function(){
            //$("> .js_switch", this).on(_touch,function(){ // 上段の別の書き方
                var targetContentWrap = $(this).next(".js_contentwrap");
                if ( targetContentWrap.css("display") === "none" ) {
                    accordion.find(".js_contentwrap").slideUp();
                    accordion.find(".js_switch.open").removeClass("open");
                }
                targetContentWrap.slideToggle();
                $(this).toggleClass("open");
            });
        });

	// map
		function map_initialize() {
	   // 地図の座標を設定
	   var latlng = new google.maps.LatLng(35.6550084,139.6937631,17);
	   // 地図の設定
	   var map = new google.maps.Map(
	     document.getElementById("map"),
	     {
	       zoom: 16,  // 地図の拡大率
	       center: latlng, // 地図の中心座標
	       scrollwheel: false  // マウスホイールでの拡縮を禁止
	     }
	   );
	  // マーカーの設定
	  // マーカー画像の設定
		var markerImg = {
		   url: '/about/images/map_pin.png'
		 };
		// マーカーの設定
		var marker = new google.maps.Marker({
		     position: latlng,
		     map: map,
		     icon: markerImg
		});
	 }

	 // 地図表示用メソッドの呼び出し
	 map_initialize();

});




