$(function(){

  //图片轮播开始
  var number=$("#banner ul li").size()-1;//最大下标
  console.log(number);
  var cur=0;//当前显示的图片
  var timer;//定时器
  //下一个
  function slideNext(){
    if(cur<number){
      $('#banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
      $('#banner ul li').eq(cur+1).css({'z-index':20}).stop().fadeIn();
      $('.indicator a').removeClass().eq(cur+1).addClass('active');
      cur++;
    }else{
      $('#banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
      $('#banner ul li').eq(0).css({'z-index':20}).stop().fadeIn();
      $('.indicator a').removeClass().eq(0).addClass('active');
      cur=0;
    }
  }
  //上一个
    function slidePrev(){
    if(cur>0){
      $('#banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
      $('#banner ul li').eq(cur-1).css({'z-index':20}).stop().fadeIn();
      $('.indicator a').removeClass().eq(cur-1).addClass('active');
      cur--;
    }else{
      $('#banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
      $('#banner ul li').eq(number).css({'z-index':20}).stop().fadeIn();
      $('.indicator a').removeClass().eq(number).addClass('active');
      cur=number;
    }
  }

  timer=setInterval(slideNext,3000);
  //当鼠标移入banner区域的时候，停止自动播放
  $("#banner").mouseover(function(){
    clearInterval(timer);
  });
  $("#banner").mouseout(function(){
    timer=setInterval(slideNext,3000);
  });
  //左右箭头
  //$(".next").click(function(){
    //slideNext();
  //});
  //$(".prev").click(function(){
    //slidePrev();
  //});

  //小圆点指示器
  $('.indicator a').mouseover(function(){
    var now=$(this).index();//获取触发事件的a的下标
    $('#banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
    $('#banner ul li').eq(now).css({'z-index':20}).stop().fadeIn();
    cur=now;//为变量cur重新赋值，以便于鼠标移出banner区域的时候，定时器从当前图片往后播放
    $(".indicator a").removeClass();
    $(this).addClass('active');
  });

  //图片轮播结束
  //练习：对图片轮播基础代码进行优化
  //  1、将多次出现的dom元素查找存到变量中
  //  2、上一个、下一个函数整合
  //  3、小圆点指示器添加if判断，判断触发的a对应的是否当前图片
  //  4、将图片轮播效果封装到对象中
  //  5、其他。。。
});



