//nav下拉hoverjs
$(function(){
	var src;
	$('.nav_scroll2 li').hover(
	function(){
		if(i = 1){	
			src = $(this).find('img').attr('src');
			_src1 = src.slice(0,31);
			_src2 = src.slice(src.length-4,src.length);
			$(this).find('img').attr('src',_src1 + '2' + _src2);
		}
	},function(){
		src = $(this).find('img').attr('src');
		_src1 = src.slice(0,31);
		_src2 = src.slice(src.length-4,src.length);
		$(this).find('img').attr('src',_src1 + _src2);
		
	});
});

//nav下拉hoverjs END

$(function(){
	$('.header_wap .toggle-btn').unbind().toggle(
		function(){
			$('.header_wap #nav').animate({height:"show"});
			$(this).find('i').css({color:"#68af6a"});
		},function(){
			$('.header_wap #nav').animate({height:"hide"});
			$(this).find('i').css({color:"#666"});
		}
	);
});


// 案例js
$(function(){
	var _height = $('.zxjy_ct4 .sr4_wrop').height();
	var _width = 823;
	var length = $('.zxjy_ct4 .sr4w').length;
	var _leng = 0;
	$('.zxjy_ct4 .sr4_wrop').css({width:(100)*length+"%",margin:"0 auto",overflow:"hidden"});
	$('.zxjy_ct4 .sr4w').css({width:(100/length)+"%",margin:"0 auto",overflow:"hidden"});
	$('.zxjy_ct4 .jq_wrop').css({width:_width+2,margin:"0 auto",overflow:"hidden"});
	
	$('.sr4>a').click(function(){
		var i = $(this).index();
		if(i == 1){
			if(_leng >= 0 && _leng < (length-1)){
				_leng++;
				$('.zxjy_ct4 .sr4_wrop').animate({left:"-" + (_width+2)*_leng},300);
			}
			else{
				
				_leng = 0;
				$('.zxjy_ct4 .sr4_wrop').animate({left:"-" + (_width+2)*_leng},300);
			}
		}
		else{
			if(_leng > 0 && _leng <= length){
				_leng--;
				$('.zxjy_ct4 .sr4_wrop').animate({left:"-" + (_width+2)*(_leng)},300);
			}
			else{
				
				$('.zxjy_ct4 .sr4_wrop').animate({left:"-" + (_width+2)*(length-1)},300);
				_leng = length - 1;
				
			}
		}
	});

});
//


//产品也悬浮导航
// $(function(){
	// var rollSet = $('.content .menu');
    // var offset = rollSet.offset();
    // var fwidth = $("#footer").height();
    // $(window).scroll(function() {
        // var scrollTop = $(window).scrollTop();
        // var scrollBtm = $(document).height() - $(window).scrollTop() - $(".content .menu").height();
        // if (offset.top < scrollTop) {
            // if (scrollBtm > fwidth) {
                // rollSet.addClass('fixed');
                // $('.content .lists .fixed').show();
            // } else {
                // rollSet.addClass('fixed');
                // $('.content .lists .fixed').show();
            // }
        // } else {
          // rollSet.removeClass('fixed');
          // $('.content .lists .fixed').hide();
        // }
    // })
// })
//产品也悬浮导航 END

$(function(){
	$('.content .lists .fixed h2').click(function(){
		var i =  $(this).index();
		$('.content .lists .fixed h3').css('background','#fff');
		$('.content .lists .fixed h2').css('color','#666');
		$('.content .lists .fixed h2 p').css('background','#fff');
		$(this).css('color','#009D0E');
		$(this).children('p').css('background','#009D0E');
		$(this).prevAll('h3').css('background','#009D0E');
		$(this).prevAll('h2').css('color','#009D0E');
		$(this).prevAll('h2').children('p').css('background','#009D0E');

		var scroll_offset = $(".content .lists .case").eq(i).offset(); //得到.c这个div层的offset，包含两个值，top和left
		$("body,html").animate({
			scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动
		},0);
	})
})



//导航栏
$(function(){
	$('.header .header_bottom .nav').children('ul').children('li').mouseover(function(){
		var i = $(this).index() - 1;
		$('.header .header_bottom .nav').children('ul').children('li').children('a').css({});
		$(this).children('a').css({});
		if(i<0){
			
		}else{
			
			$('.header .header_bottom .nav .nav_1').hide();
			$('.header .header_bottom .nav .nav_1 ').eq(i).show();
		}
	})
	$('.header .header_bottom .nav').children('ul').mouseleave(function(){
		$('.header .header_bottom .nav').children('ul').children('li').css({});
		$('.header .header_bottom .nav .nav_1').hide();
	})
	$('.header .header_bottom .nav .nav_1 .left1 li').each(function(){
		$(this).mouseover(function(){
			var i = $(this).index();
			$(this).parents('.nav_1').children('.right1').hide();
			$(this).parents('.nav_1').children('.right1').eq(i).show();
		})
	})
});

//特性 价格 案例 功能菜单
$(function(){
	$('.content .menu ul li').click(function(){
		var i = $(this).index();
		// $('.content .menu ul li').css('background','#eee');
		// $(this).css('background','#fff');
		//切换
		$('.content .menu ul li').removeClass('menu_index');
		$(this).addClass('menu_index');
		$('.content .lists').hide();
		$('.content .lists').eq(i).show();

		//切换跳到导航栏处
		var p = $(this).parents('.menu').css('position');
		if(p == 'fixed'){
			$(this).parents('.menu').removeClass('fixed');
			var scroll_offset = $(this).parents('.menu').offset(); //得到.c这个div层的offset，包含两个值，top和left
			$("body,html").animate({
				scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动
			},0);
		}
		
	})
})

$(function(){
	$('.footer .footer_content .footer_bottom ul li.photo_left img').hover(function(){
		$('.footer .footer_content .footer_bottom ul li.photo_left img.max').remove();
		var img = $(this).attr('src');
		$(this).after('<img src="'+img+'" class="max"/>');
	},function(){
		$('.footer .footer_content .footer_bottom ul li.photo_left img.max').remove();
	})
})

function price(i){
	var p = $('.content .menu').css('position');
	if(p == 'fixed'){
		$('.content .menu').removeClass('fixed');
		var scroll_offset = $('.content .menu').offset(); //得到.c这个div层的offset，包含两个值，top和left
		$("body,html").animate({
			scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动
		},0);
	}
	$('.content .lists .price').hide();
	$('.content .lists .price').eq(i).show();
}

function reg_user(user){
	if(user==''){
		return false;
	}else{
		return true;
	}
}
function reg_tel(tel){
	var tel_p = /^0?1[3|4|5|8][0-9]\d{8}$/;
	var re=tel_p;
	if (re.test(tel)){
        return (true);
    }else{
        return (false);
    }
}
function reg_email(email){
	var email_p = "^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$";
	var re=new RegExp(email_p);
	if (re.test(email)){
        return (true);
    }else{
        return (false);
    }
}

        function leftr(dom,l,s,l1,s1){
        var left = dom.css('left');
        left = left.substring(0,left.length-2);//去掉像数 position().left;无法获取隐藏的元素;
        //parseInt 将left 转化为可加减的整数类型
        dom.css('left',(parseInt(left)-l)+'px');//将元素 向左平移 100px
        dom.css({'opacity':'0','display':'block'});
        dom.animate({'left':(parseInt(left)+l1)+'px','opacity':'1'},s,function(){
            dom.animate({'left':left+'px'},s1);
        });
    }

    //由右向左
    function rightl(dom,r,s,r1,s1){
        var left = dom.css('left');
        left = left.substring(0,left.length-2);//去掉像数 position().left;无法获取隐藏的元素;
        //parseInt 将left 转化为可加减的整数类型
        dom.css('left',(parseInt(left)+r)+'px');//将元素 向左平移 100px
        dom.css({'opacity':'0','display':'block'});
        dom.animate({'left':(parseInt(left)-r1)+'px','opacity':'1'},s,function(){
            dom.animate({'left':left+'px'},s1);
        });
    }

    //右上向下
    function topb(dom,t,s,t1,s1){
        var top = dom.css('top');
        top = top.substring(0,top.length-2);//去掉像数 position().left;无法获取隐藏的元素;
        //parseInt 将left 转化为可加减的整数类型
        dom.css('top',(parseInt(top)-t)+'px');//将元素 向左平移 100px
        dom.css({'opacity':'0','display':'block'});
        dom.animate({'top':(parseInt(top)+t1)+'px','opacity':'1'},s,function(){
            dom.animate({'top':top+'px'},s1);
        });
    }

    //右下向上
    function bottomt(dom,t,s,t1,s1){
        var top = dom.css('top');
        top = top.substring(0,top.length-2);//去掉像数 position().left;无法获取隐藏的元素;
        //parseInt 将left 转化为可加减的整数类型
        dom.css('top',(parseInt(top)+t)+'px');//将元素 向左平移 100px
        dom.css({'opacity':'0','display':'block'});
        dom.animate({'top':(parseInt(top)-t1)+'px','opacity':'1'},s,function(){
            dom.animate({'top':top+'px'},s1);
        });
    }

    //向上消失
    function topnone(dom,t,s){
        var top = dom.css('top');
        dom.animate({'top':(parseInt(top)-t)+'px','opacity':'0'},s,function(){
            dom.hide();
        })
    }
    function bottomnone(dom,t,s){
        var top = dom.css('top');
        dom.animate({'top':(parseInt(top)+t)+'px','opacity':'0'},s,function(){
            dom.hide();
        })
    }
    function leftnone(dom,l,s){
        var left = dom.css('left');
        dom.animate({'left':(parseInt(left)-l)+'px','opacity':'0'},s,function(){
            dom.hide();
        })
    }
    function rightnone(dom,l,s){
        var left = dom.css('left');
        dom.animate({'left':(parseInt(left)+l)+'px','opacity':'0'},s,function(){
            dom.hide();
        })
    }