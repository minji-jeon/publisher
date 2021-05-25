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