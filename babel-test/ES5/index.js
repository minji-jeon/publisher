"use strict";

[1, 2, 3].map(function (n) {
  return n + 1;
});
var c = 1;
var v = 1; //https://www.daleseo.com/js-babel/ 참고
//npm init -y
//npm i -D @babel/core @babel/cli
//npm i -D @babel/preset-env
//.babelrc 파일생성 { "presets": ["@babel/env"] } 붙여넣기
//package.json test에 "babel ./ES6(작성폴더) -d ./ES5(출력폴더) -w"
//디버그 클릭