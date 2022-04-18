"use strict";
$(function () {
  //ロ－ドアニメーション
  $(window).on('load', function(){
    $('.loading').delay(1500).fadeOut(300);
    function stopload(){
      $('.loading').delay(1000).fadeOut(700);
  }
  setTimeout(stopload(),10000);
  });
//マウスストーカー
  $(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    let x=e.clientX;
    let y=e.clientY;
    //カーソル要素のcssを書き換える用
    $(".mouse").css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
    
    //ストーカー要素のcssを書き換える用    
  setTimeout(function(){
  $(".ato").css({
  "opacity":"1",
    "top":y+"px",
    "left":x+"px"
});
},140);//カーソルより遅れる時間を指定
    
});

  //🍔
  $('.hum-btn a[href]').on('click', function() {
    $('.btn-trigger').trigger('click');
  });

  $('.btn-trigger').on('click', function() {
    $(".btn-trigger").toggleClass('active');
    $(".hum").toggleClass('active');
    return false;
  });


    //背景画像の切り替え
    $(".mv").bgSwitcher({
      images:['img/mv1.jpg','img/mv2.jpg','img/mv3.jpg'],
      interval: 4000,
      loop: true, 
      effect: "fade",
      duration: 2000,
      easing: "swing" ,
      left: 0
  });

  
  //ひし形レイアウト
  $(".diamondswrap").diamonds({
    size: 300, // 画像のサイズ
    gap: 1, // マージン
    itemSelector: ".item", //適用するclass
    // hideIncompleteRow: true, //レイアウト調整で最後のイメージを隠すかどうか
    autoRedraw: true //リサイズのした際に再配置
    });

    $(".sm-diamondswrap").diamonds({
      size: 150, // 画像のサイズ
      gap: 1, // マージン
      itemSelector: ".sm-cat", //適用するclass
      // hideIncompleteRow: true, //レイアウト調整で最後のイメージを隠すかどうか
      autoRedraw: true //リサイズのした際に再配置
      });
    

    $(".act").draggable({ containment: 'html', scroll: false ,revert: true});


    $( ".moku" ).droppable({
      accept : ".html,.css,.js,.wp" , // 受け入れる要素を指定
      drop : function(event , ui){ // ドロップされた時に動きます
          if($(ui.draggable).hasClass("html")){
            $('.moku').html('<p class="typing">&lth1&gthtmlはお手の物だにゃん！&lt/h1&gt</p>');
          }
          else if($(ui.draggable).hasClass("css")){
            $('.moku').html('<p class="typing">h1{<br>css : にゃんなくこなします！;<br>}</p>');
          }
          else if($(ui.draggable).hasClass("js")){
            $('.moku').html('<p class="typing">function(js){return "任せにゃさい！"};</p>');
          }
          else if($(ui.draggable).hasClass("wp")){
            $('.moku').html('<p class="typing">&lt? php the_title("猫の手も貸すにゃ！"); ?&gt</p>');
          }
          $('.moku p.typing').t();
      }
    });

    

    gsap.to(".about .left",{
      scrollTrigger: {
          trigger: ".about",
          start: "0% 75%", // ウィンドウのどの位置を発火の基準点にするか
          end: "25% 50%",
          scrub: true, // 要素を追従させる
          markers: false,
      },
      top:"0",
      left:"0",
      opacity:"1",
      duration: 1,
      
  });
  gsap.to(".about .right",{
    scrollTrigger: {
        trigger: ".about",
        start: "0% 75%", // ウィンドウのどの位置を発火の基準点にするか
        end: "25% 50%",
        scrub: true, // 要素を追従させる
        markers: false,
    },
    top:"0",
    right:"0",
    opacity:"1",
    duration: 1,
});

    gsap.to(".cat1",{
      scrollTrigger: {
          trigger: ".about",
          start: "500px 50%", // ウィンドウのどの位置を発火の基準点にするか
      end: "bottom top",
          scrub: true, // 要素を追従させる
          markers: false,
      },
      rotation: 360,
      duration: 1,
      y: 600,
  });

  gsap.to(".me .left,.me .right",{
    scrollTrigger: {
      trigger: ".me",
      start: "20% 75%", // ウィンドウのどの位置を発火の基準点にするか
      end: "45% 50%",
        scrub: true, // 要素を追従させる
        markers: false,
    },
    rotation: 360,
    duration: 1,
    opacity: 1,
});

    gsap.to(".cat2",{
      scrollTrigger: {
          trigger: ".me",
          start: "20% 75%", // ウィンドウのどの位置を発火の基準点にするか
          end: "45% 50%",
          scrub: true, // 要素を追従させる
          markers: false,
      },
      rotation: 360,
      opacity: 1,
  });

  gsap.to(".cat3",{
    scrollTrigger: {
        trigger: ".skill",
        start: "20% 75%", // ウィンドウのどの位置を発火の基準点にするか
        end: "45% 50%",
        scrub: true, // 要素を追従させる
        markers: false,
    },
    rotation: 360,
    opacity: 1,
});

});