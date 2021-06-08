function printLog3(a = 1) {
  console.log({a});
}
printLog3(); //{a: 1} 기본값 사용
printLog3(3); //{a: 3} 입력된 값 사용

//-------------------------------------------------

function getDefault2() {
  console.log('called');
  return 1;
}
function printLog1(a = getDefault2()) {
  console.log({ a });
}

printLog1();  //getDefault()가 실행되고 printLog()가 실행됨 (인수를 입력하지 않았을때)
printLog1(3);  //printLog()만 실행됨 (인수를 입력했을때)

//-------------------------------------------------

function getDefault4() {
  throw new Error('no parameter')
}
function printLog33(a = getDefault4()) {
  console.log({ a });
}

 printLog33(10);  //에러가 안남 (인수를 필수값으로 만듬)
// printLog33();  //에러가 남 (인수를 필수값으로 만듬)

//-------------------------------------------------

// rest parameter
// 나머지 매게변수를 정의하는 방법
function manynum(a, ...rest) {
  console.log({a,rest});
}
// 첫번째 값 외에 모든 값을 rest에 저장함
manynum(1,2,3,4,);  // a: 1  rest: [2, 3, 4]

//-------------------------------------------------

// named parameter 
//명명된 매게변수 (함수 호출시 마게변수의 이름과 값을 지정할 수 있다.)
function nameParameter({numbers, greaterThan, lessThan = 10}) {
  return numbers.filter(item => greaterThan < item && item < lessThan)
}

const numbers = [10, 20, 30, 40]
const result1 = nameParameter({numbers, greaterThan:5, lessThan:25}); // 입력된 매게변수를 모두 사용
const result2 = nameParameter({numbers, greaterThan:5}); //입력하지 않은 매게변수는 기본값으로 사용

//-------------------------------------------------

//    매개변수↓       ↓함수
const add = (a,b) => a+b; //함수를 중괄호로 감싸지 않으면 값을 리턴함
const add2 = a => a+5; //매게변수가 하나일때는 괄호를 생략 
const add4 = (a,b) => ({ result : a + b}); //객체를 반환할때는 중괄호를 넣어야 함

console.log(add4(3,5));

//-------------------------------------------------

// 2줄 이상의 코드가 필요하다면 중괄호로 묶어주고 리턴을 사용해야 값이 리턴된다.
const returnTest = (a,b) => {
  if (a <= 0 || b <= 0) {
    throw new Error('must be positive number');
  }
  return a + b;
}

document.write(returnTest(3,5));
console.log(returnTest(3,5));

//화살표 함수는 this, arguments가 바인딩 되지 않는다.

//this란?
//화살표 함수일때
function Counter() {
  this.value = 0;
  this.add = amount => {
    this.value += amount;
  };
}
const counter = new Counter();
console.log(counter.value); //0
counter.add(5);
console.log(counter.value); //5
const addd = counter.add;
add(5); //지역
console.log(counter.value); //10
counter.add(10); //지역
console.log(counter.value); //20
add(8); //지역
console.log(counter.value); //28

//일반 함수 일때
function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
  }
}
const counter2 = new Counter2();
console.log(counter2.value); //0
counter2.add(5);
console.log(counter2.value); //5
const addd2 = counter2.add;
add2(10); //전역
console.log(counter2.value); //5
counter2.add(8); //지역
console.log(counter2.value); //13

// 비동기 처리 