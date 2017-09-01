/**
 * 焦点图
 * author ：yangmengya
 * Date : 2016.12.26
 * Usage :
 * $('.focusMap').FocusMap({
  *   imgArray : imgArray,     //页面中需要输入的图片信息
  *   animate_mode : animate_mode //定义页面中的滑动样式 slide滑动，fade渐隐渐现
  *   change_time : change_time // 图片变换的时间间隔
  *   slide_time :slide_time //图片slide动画时间
  *   fadein_time ： fadein_time //渐现的动画时间
  *   fadeout_time ： fadeout_time //渐隐的动画时间
 * })
 * updateDate:2016.12.26
 */
(function($){
  $.fn.FocusMap = function(options){
    // ----------------------- Begin VARIABLES ----------------------------
    var
      configMap = {
        main_html : [
           '<ul class="focusMap-ul">',
           '</ul>',
           '<a href="javascript:;" class="pre"></a>',
           '<a href="javascript:;" class="next"></a>',
           '<ul class="page"></ul>',
         ].join(''),
        // animate_time : 2000,
        currIndex : null
      },
      stateMap = $.extend({},options),
      jqueryMap = {},
      _self = this,
      createImage,animateMode,animateStyle,
      onClickPre,onClickNext,onClickPageNum,
      SlideImage,FadeImage,
      t;
    // ----------------------- End VARIABLES ----------------------------
    //
    //
    //-------------------------- BEGIN UTILITY  ---------------------

    //-------------------------- END UTILITY  -----------------------
    //
    // --------------------- BEGIN PUBLIC METHODS -------------------

    // ----------------------- END PUBLIC METHODS -------------------
    //
    // ------------------------ BEGIN DOM METHODS -------------------
    // Begin setJqueryMap
    setJqueryMap = function(){
      var
        imgArray = stateMap.imgArray;
        animate_mode = stateMap.animate_mode;
        change_time = stateMap.change_time;
        slide_time = stateMap.slide_time;
        fadein_time = stateMap.fadein_time;
        fadeout_time = stateMap.fadeout_time;
        jqueryMap = {
          imgArray : imgArray,
          animate_mode : animate_mode,
          change_time : change_time,
          slide_time : slide_time,
          fadein_time : fadein_time,
          fadeout_time : fadeout_time,
          $focusul : _self.find('.focusMap-ul'),
          $pre : _self.find('.pre'),
          $next : _self.find('.next'),
          $page : _self.find('.page')
        }
    }
    // End setJqueryMap
    // Begin createImage
    // 创建图片
    createImage = function(){
      for(var i=0; i<stateMap.imgArray.length;i++){
        jqueryMap.$focusul.append('<li><img src="'+ stateMap.imgArray[i] +'" width="100%"/></li>');
        jqueryMap.$page.append('<li>' + parseInt(i+1) + '</li>')
      }
      jqueryMap.$lis = jqueryMap.$focusul.find('li');
      // 设置第一张图为默认展示
      configMap.currIndex = 0;
      jqueryMap.$lis.eq(configMap.currIndex).addClass('showPic');
      jqueryMap.$page.find('li').eq(configMap.currIndex).addClass('selectnum');
    }
    // End createImage
    //
    //
    // Begin animateImage
    // proposed : 实现滑动效果
    SlideImage = function(){
      var
        movDis = jqueryMap.$lis.width();
      jqueryMap.$lis.stop(true,true).animate({
        left : 0
      },jqueryMap.slide_time,function(){
        jqueryMap.$lis.eq(configMap.currIndex).siblings().css({
          left : movDis
        })
      });
    }
    // End SlideImage
    // Begin FadeImage
    //焦点图实现渐隐渐现
    FadeImage = function(){
      var
        movDis = jqueryMap.$lis.width();
      jqueryMap.$lis.eq(configMap.currIndex).stop(true,true).fadeOut(jqueryMap.fadeout_time,function(){
        jqueryMap.$lis.eq(configMap.currIndex).css({
          left:0
        }).fadeIn(jqueryMap.fadein_time,function(){
          jqueryMap.$lis.eq(configMap.currIndex).siblings().css({
            left:movDis
          })
        });
      });
    }
    // End FadeImage
    //Begin animateMode
    animateMode = function(mode){
      switch (mode) {
        case 'slide':
          SlideImage();
          break;
        case 'fade':
          FadeImage();
          break;
      }
    }
    //End animateMode
    // Begin animateStyle
    // proposed : 添加或者移除样式
    // 点击后退按钮
    animateStyle = function(){
      jqueryMap.$page.find('li').eq(configMap.currIndex).addClass('selectnum').siblings().removeClass('selectnum');
      jqueryMap.$lis.eq(configMap.currIndex).addClass('showPic').siblings().removeClass('showPic');
    }
    // End animateStyle
    // Begin Start
    // proposed:开始动画
    Start = function(){
      t = setTimeout(function timer(){
        configMap.currIndex = configMap.currIndex + 1 === stateMap.imgArray.length ? 0 : configMap.currIndex + 1;
        animateMode(stateMap.animate_mode);
        animateStyle();
        t = setTimeout(timer,jqueryMap.change_time);
      },jqueryMap.change_time);
    }
    // End Start
    // Begin Stop
    // proposed:停止动画
    Stop = function(){
      if (t == null) {
        console.trace();
      }
      clearTimeout(t);
      t = null;
    }
    // End Stop
    // -------------------------- END DOM METHODS -------------------
    //
    // --------------------- BEGIN EVENT HANDLERS -------------------
    // Begin onClickPre
    onClickPre = function(){
      Stop();
      configMap.currIndex = configMap.currIndex === 0 ? stateMap.imgArray.length - 1 : configMap.currIndex - 1;
      animateMode(stateMap.animate_mode);
      animateStyle();

      Start();
    }
    // End onClickPre
    // // Begin onClickNext
    onClickNext = function(){
      Stop();
      configMap.currIndex = configMap.currIndex + 1 === stateMap.imgArray.length ? 0 : configMap.currIndex + 1;
      animateMode(stateMap.animate_mode);
      animateStyle();
      Start();
    }
    // End onClickNext
    // Begin onClickPageNum
    onClickPageNum = function(){
      Stop();
      configMap.currIndex = $(this).index();
      animateStyle();
      animateMode(stateMap.animate_mode);
      Start();
    }
    // End onClickPageNum
    // --------------------- END EVENT HANDLERS ---------------------
    // Begin initModule
    _self.append(configMap.main_html);
    setJqueryMap();
    createImage();
    Start();
    jqueryMap.$pre.bind('click',onClickPre);
    jqueryMap.$next.bind('click',onClickNext);
    jqueryMap.$page.find('li').bind('click',onClickPageNum);
    jqueryMap.$lis.find('img').bind({
      'mouseover' : Stop,
      'mouseout'  : Start
    });
    return  _self;
  }
}(jQuery))