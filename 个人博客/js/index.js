$(function(){

  //ͼƬ�ֲ���ʼ
  var number=$("#banner ul li").size()-1;//����±�
  console.log(number);
  var cur=0;//��ǰ��ʾ��ͼƬ
  var timer;//��ʱ��
  //��һ��
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
  //��һ��
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
  //���������banner�����ʱ��ֹͣ�Զ�����
  $("#banner").mouseover(function(){
    clearInterval(timer);
  });
  $("#banner").mouseout(function(){
    timer=setInterval(slideNext,3000);
  });
  //���Ҽ�ͷ
  //$(".next").click(function(){
    //slideNext();
  //});
  //$(".prev").click(function(){
    //slidePrev();
  //});

  //СԲ��ָʾ��
  $('.indicator a').mouseover(function(){
    var now=$(this).index();//��ȡ�����¼���a���±�
    $('#banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
    $('#banner ul li').eq(now).css({'z-index':20}).stop().fadeIn();
    cur=now;//Ϊ����cur���¸�ֵ���Ա�������Ƴ�banner�����ʱ�򣬶�ʱ���ӵ�ǰͼƬ���󲥷�
    $(".indicator a").removeClass();
    $(this).addClass('active');
  });

  //ͼƬ�ֲ�����
  //��ϰ����ͼƬ�ֲ�������������Ż�
  //  1������γ��ֵ�domԪ�ز��Ҵ浽������
  //  2����һ������һ����������
  //  3��СԲ��ָʾ�����if�жϣ��жϴ�����a��Ӧ���Ƿ�ǰͼƬ
  //  4����ͼƬ�ֲ�Ч����װ��������
  //  5������������
});



