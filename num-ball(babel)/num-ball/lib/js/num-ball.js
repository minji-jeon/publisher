'use strict';



          const circle = document.querySelector(".circle");
          
          document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            circle.style.left = mouseX + 'px';
            circle.style.top = mouseY + 'px';
          });

          $(".selec-num").on("mouseenter", function() {
            console.log("ddddd");
            // circle.css({"width":'50px', "height": "50px"});
            $(".circle").addClass("active");
          })
          $(".selec-num").on("mouseleave", function() {
            console.log("ddddd");
            // circle.css({"width":'50px', "height": "50px"});
            $(".circle").removeClass("active");
          })

          //모바일 구분
          function _isMobile() {
            var UserAgent = navigator.userAgent;
            console.log(UserAgent)
            if (UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
              return true;
            } else {
              return false;
            }
          }
          //단말 구분
          if(_isMobile()) {
            //모바일 단말
              $(".circle").remove();
            //console.log("모바일");
          }


var arrNum = new Array();

$('.how-dim').on('click', function () {
  $('.how-text').removeClass('is-open');
});
// 궁금해요! 
$('.how').on('click', function () {
  $('.how-text').toggleClass('is-open');
});
// 자릿수 지정
$('.num-ball .selec-num-btn .selec-num').on('click', function () {
  var num = $(this).text();
  var ch = $('.num-ball .push-num .push-num-btn').hasClass('is-set');

  if (!ch) {
    $('.num-ball .selec-num-btn .selec-num').removeClass('is-active');
    $(this).addClass('is-active');
    $('.num-ball .num').html('');
    $('.num-ball-user .check-num').html('');

    for (var i = 0; i < num; i++) {

      $('.num-ball .num').append('<p class="num-0' + (i + 1) + '"></p>');
      $('.num-ball-user .check-num').append('<p class="check-num-0' + (i + 1) + '"><input type="text" id="check0' + (i + 1) + '" maxlength="1"></p>');
    }
  } else {
    alert('진행중엔 변경이 불가능 합니다.');
  }
});

// 숫자 정하기
$('.num-ball .push-num .push-num-btn').on('click', function () {
  var ch = $(this).hasClass('is-set');
  if (!ch) {
    $('.num-ball .num p').text('*');
    var num = $('.num-ball .selec-num-btn .selec-num.is-active').text();
    for (var i = 0; i < num; i++) {

      arrNum[i] = Math.floor(Math.random() * 9) + 1;

      // 중복 번호 제거
      for (var j = 0; j < i; j++) {
        if (arrNum[i] === arrNum[j]) {
          i--;
          break;
        }
      }
    }
  } else {
    alert('이미 지정 되었습니다.');
  }
  $(this).addClass('is-set');
  atob(arrNum);
});

// 리셋
$('.all-reset').on('click', function () {
  var num = $('.num-ball .selec-num-btn .selec-num.is-active').text();
  var ch = $('.num-ball .push-num .push-num-btn').removeClass('is-set');
  $('.num-ball-warp').removeClass('is-done');

  $('.num-ball .num p').text('');
  $('.check-num p input').val('');
  $('.check-num-text-content .check-num-text').text('');
  $('.history-num').html('');

  for (var i = 0; i < num; i++) {
    arrNum[i] = 0;
  }
});

// 진행자 숫자 리스트
$('.num-ball-user .num-list button').on('click', function () {
  $(this).toggleClass('is-check');
});

// 확인하기
$('.num-ball-user .check-btn-content .check-btn').on('click', function () {
  var reg_num = /^[1-9]$/;
  var num = $('.num-ball .selec-num-btn .selec-num.is-active').text();
  var arrNumCheck = new Array();
  var strike = 0;
  var ball = 0;
  var out = 0;

  if (arrNum[num - 1] === undefined || arrNum[num - 1] === 0) {
    alert('숫자가 지정되지 않았습니다.');
  } else {
    // 숫자 배열로 정리
    for (var i = 0; i < num; i++) {
      if ($('.check-num-0' + (i + 1) + ' #check0' + (i + 1)).val() === "") {
        alert('빈칸을 채워주세요.');
        break;
      } else if (!reg_num.test($('.check-num-0' + (i + 1) + ' #check0' + (i + 1)).val())) {
        alert('숫자만 입력해 주세요. (1~9까지 숫자)');
        break;
      } else {
        arrNumCheck[i] = $('.check-num-0' + (i + 1) + ' #check0' + (i + 1)).val();

        for (var j = 0; j < num; j++) {

          if (i === j) {} else if (arrNumCheck[i] === arrNumCheck[j]) {
            alert('같은 숫자는 입력할 수 없습니다.');
            $('.check-num-text-content .check-num-text').addClass('none-active');
            break;
          } else {
            $('.check-num-text-content .check-num-text').removeClass('none-active');
          }
        }

        var ch = $('.check-num-text-content .check-num-text').hasClass('none-active');
        if (ch === false) {
          for (var j = 0; j < num; j++) {
            if (arrNumCheck[i] == arrNum[j]) {
              i === j ? strike++ : ball++;

              j++;
            } else {
              out++;
            }
          }
        }
      }
    }

    if (ch === false) {
      if (out === num * num) {
        $('.check-num-text-content .check-num-text').text('아웃');
        $('.history-num').append('<p class="history-list"><span class="num">' + arrNumCheck + '</span><span class="line">-</span><span class="check-text">' + $('.check-num-text-content .check-num-text').text() + '</span></p>');
      } else if (strike == num) {
        $('.check-num-text-content .check-num-text').text('완성');
        $('.history-num').append('<p class="history-list"><span class="num">' + arrNumCheck + '</span><span class="line">-</span><span class="check-text">' + $('.check-num-text-content .check-num-text').text() + '</span></p>');
        setTimeout(function () {
          $('.num-ball-warp').addClass('is-done');
        }, 500);
      } else {
        $('.check-num-text-content .check-num-text').text(strike + '\uC2A4 ' + ball + '\uBCFC');
        $('.history-num').append('<p class="history-list"><span class="num">' + arrNumCheck + '</span><span class="line">-</span><span class="check-text">' + $('.check-num-text-content .check-num-text').text() + '</span></p>');
      }
    }
  }
});