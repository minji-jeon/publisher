$(document).ready(function() {
$('.visual_text p').addClass('on');
$('.visual_text h2').addClass('on'); 
    
    $(window).resize(function (){
        var width_size = $(window).width();

      if (width_size > 801) {
          $('h1 img').attr({'src':'img/main/header_logo.jpg'}); 
      }else {
          $('h1 img').attr({'src':'img/main/m-logo.jpg'});
      }
    }).resize();
    
      $('.gnb button').click(function() {
          if ($(window).width() < 801) {
            $('nav').toggleClass('on'); 
          }
      });

      $('.H_Search a').on('click', function() {
         if ($(window).width() < 801) {
            $('.H_Search div').toggleClass('on'); 
          }
      });
    
});
    
var scrollTop = 0;
scrollTop = $(document).scrollTop();
    
$(window).scroll(function() {
	scrollTop = $(document).scrollTop();
    header();
});
    

function header() {
    if (scrollTop > 70) {
		$('header').addClass('on');
	} else {
		$('header').removeClass('on');
	}
}


// 올인원 스터디 ------------------------------

var products = [{
  name : '오리지널 드립커피',
  description : '파스쿠찌 Single Origin Coffee를 추출한이탈리아 정통 드립식 커피',
  tag : ['# 신선한 원두'],
  imgUrl : './img/manu/menu_img01.jpg',
  price : 4000
}, {
  name : '아메리카노',
  description : '뜨거운 물에 에스프레소를 희석, 부드럽고 깊은 아로마를 느낄 수 있는 커피',
  tag : ['# 신선한 원두'],
  imgUrl : './img/manu/menu_img02.jpg',
  price : 4500
}, {
  name : '카페라떼',
  description : '에스프레소와 스팀우유를 혼합하여고소함과 부드러움을 느낄 수 있는 커피',
  tag : ['# 원두', '# 우유'],
  imgUrl : './img/manu/menu_img03.jpg',
  price : 5000
}];

for (var i = 0; i < products.length; i++) {
  // 변수설정
  var productName = products[i].name;
  var productDesc = products[i].description;
  var productTag = String(products[i].tag).replace(/,/g, ' ');
  var productImg = products[i].imgUrl;
  var productPrice = products[i].price;

  const productHtml = `<li>
    <a href="#" data-price="${productPrice}">
      <img src="${productImg}" alt="" />
      <p class="title">${productName}</p>
      <p class="sub_text">${productDesc}</p>
      <p><span>${productTag}</span></p>
    </a>
  </li>`;

  $('#scene04 .inner_s').append(productHtml);
}


// document.querySelector('#secene04 .inner_s').innerHTML = '<li>'+
// '<a herf="#">'+
// '<img src="./img/manu/menu_img01.jpg" alt="" />'+
// '<p class="title"></p>'+
// '<p class="sub_text"></p>'+
// '<p><span></span></p>'+
// '</a>'+
// '</li>';