"use strict";

[1, 2, 3].map(function (n) {
  return n + 1;
});
var c = 1;
var v = 1; //https://www.daleseo.com/js-babel/ 참고
//npm init -y
//npm i -D @babel/core @babel/cli
//npm i -D @babel/preset-env
//.babelrc 파일생성 { "presets": ["@babel/preset-env"] } 붙여넣기
//package.json test에 "babel ./ES6(작성폴더) -d ./ES5(출력폴더) -w"
//디버그 클릭

var namez = 'min';
var objmin = {
  age: 29,
  namez: namez,
  getName: function getName() {
    return this.name;
  }
}; // console.log(objmin);

var name2 = 'minn';
var age = 29;
console.log({
  namez: namez,
  age: age
}); //{name: "min", age: 29} 단축속성명을 사용하여 변수의 이름과 값을 한번에 확인이 가능하다.

var input = '오늘 보실 드라마는 최신 시작한 드라마입니다.';
console.log(input.replaceAll('드라마', '영화'));

function manynum(a) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  console.log({
    a: a,
    rest: rest
  });
}

manynum(1, 2, 3, 4); //    매개변수↓       ↓함수

var add = function add(a, b) {
  return a + b;
}; //함수를 중괄호로 감싸지 않으면 값을 리턴함


var add2 = function add2(a) {
  return a + 5;
}; //매게변수가 하나일때는 괄호를 생략 


var add4 = function add4(a, b) {
  return {
    result: a + b
  };
}; //객체를 반환할때는 중괄호를 넣어야 함


console.log(add4(3, 5));