//객체와 배열의 주요기능
//단축속성명 (shorthand property names)
const name = 'min';
const objmin = {
  age : 29,
  name,
  getName() {
    return this.name;
  },
};
console.log(objmin);

const name2 = 'minn';
const age = 29;

console.log({name,age}); //{name: "min", age: 29} 단축속성명을 사용하여 변수의 이름과 값을 한번에 확인이 가능하다.


//계산된 속성명 (computed property names)

function makeObject(key,value) {
  const obj = {};
  obj[key] = value;
  return obj;
}
//↓↓↓↓ 같은것 ↓↓↓↓
function makeObject(key,value) {
  return { [key] : value}
}

//전개연산자 (spread operator)
const num = [1,3,7,9]
Math.max(1,3,7,9); //배열에서 가장 큰 숫자
//↓↓↓↓ 같은것 ↓↓↓↓
Math.max(...num)

const num2 = [...num] //num과 같은 배열을 만들어줌
const objmin2 = {...objmin} //objmin과 같은 객체를 만들어줌

console.log([2,4,...num,3,5]);
console.log(new Date(...[2019,11,30])); //Mon Dec 30 2019 00:00:00 GMT+0900 (대한민국 표준시)

//객체에서 중복된 값이 있으면 뒤에 있는 것으로 들어간다. 기존 const객체를 건드리지않고 수정하고싶을때 유용함
const objori = {x:1,x:2,y:'a'};
const objchg = {...objori,y:'b'};
console.log({objori,objchg});



//비구조화 문법 (destructuring)
const arr3 = [1,2];
const [a,b] = arr3; // => 비구조화 문법
console.log({a,b})

//기본값 설정
const [d = 10, e = 20, f = 1] = arr3; //arr3은 2개의 값만 있기 때문에 d,e에는 arr3의 값이들어가고 f는 값이 없기 때문에 기본값인 1이 들어간다.
console.log({d,e,f});  //{d: 1, e: 2, f: 1}

let o = 1;
let p = 3;
[o,p] = [p,o];
console.log({o,p}); //{o: 3, p: 1}

const arr5 = [1,2,3,5,7];
const [m, , n] = arr5;
console.log({m,n}); //{m: 1, n: 3}

const [fi,se,...rest1] = arr5;
console.log(rest1); //[3, 5, 7]

//객체의 비구조화
const objc = {ages:29, names: 'mins'};
const {ages, names} = objc;
console.log({ages, names}); //{ages: 29, names: "mins"}

const objt = {agei:29, namei: 'mins'};
const { agei : theAge, namei} = objt; //변수명을 바꿀 수 있음 (사용시 더 어울리는것으로 바꾸거나, 중복된 변수명을 피할때 사용)
console.log(theAge); //29
//console.log(agei); //agei is not defined

//기본값 설정
const objtest = {as : undefined, df:null, fg:'dd'};
const { as = 'ori',df = 'ori',fg = 'ori'} =objtest; //기본값으로 함수를 넣을수도 있다.
console.log({as,df,fg}); //undefined에만 기본값이 할당됨


//optional chaining 
const person = null;
//const thisname = preson.name; //preson이 null이라 오류가 남
const thisname = person && person.name;
const thisname2 = person?.name; //optional chaining문법으로 자동으로 person을 검사해줌
const thisname3 = person?.name ?? '기본값'; //person을 검사하여 undefined면 기본값을 넣어줌
console.log(thisname); // null
console.log(thisname2); // undefined
console.log(thisname3); // 기본값

//optional chaining문법은 함수 사용에서도 사용이 가능하다.
const pp = {
  //getName: () => 'dkdkd',
}
const ppname = pp.getName?.();  //getName이라는 함수를 검사하여 있으면 출력하고 없으면 undefined를 출력
console.log(ppname)


// 뭐라는지.... ↓↓↓ 
let dlrpanjfkrh = null;
function testJavascript(dlrpanjfkrh) {
  console.log('이게 어떻게 된다고?');
  dlrpanjfkrh?.();
}
// testJavascript();