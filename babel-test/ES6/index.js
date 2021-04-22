[1, 2, 3].map((n) => n + 1)
const c = 1;

const v = 1;

//https://www.daleseo.com/js-babel/ 참고

//npm init -y
//npm i -D @babel/core @babel/cli
//npm i -D @babel/preset-env
//.babelrc 파일생성 { "presets": ["@babel/env"] } 붙여넣기
//package.json test에 "babel ./ES6(작성폴더) -d ./ES5(출력폴더) -w"
//디버그 클릭
const namez = 'min';
const objmin = {
  age : 29,
  namez,
  getName() {
    return this.name;
  },
};
// console.log(objmin);

const name2 = 'minn';
const age = 29;

console.log({namez,age}); //{name: "min", age: 29} 단축속성명을 사용하여 변수의 이름과 값을 한번에 확인이 가능하다.


const input = '오늘 보실 드라마는 최신 시작한 드라마입니다.';
console.log(input.replaceAll('드라마', '영화'));