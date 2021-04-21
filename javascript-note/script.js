//변수선언
//var는 함수 스코프 let,const는 블록 스코프

/* 
const는 재할당이 불가능하지만 객체속성은 수정, 추가가 가능하다.
수정을 못하게 막고싶을때는 immer를 사용하면 수정할때 새로운 객체를 생성해줌
수정만 못하게 막고싶다면 Object.preventExtensions,Object.seal,Object.freeze 를 사용한다.
 */
const ear = ({prop1: 'a'});
ear.prop1 = 'b'
console.log(ear) //수정된 값이 출력됨
const bar = Object.freeze({prop1: 'a'});
bar.prop1 = 'b'
console.log(bar) //수정되지 않은 값이 출력됨


//타입

//Symbol은 유일한 속성 이름을 만들때 사용.
const idSymbol = Symbol('id');
const obj = { id : 123 };
obj[idSymbol] = 456;
console.log(obj);   // { id : 123 , [Symbol(id)] : 456 }; (이런식으로 이름 충돌문제를 해결할 수 있다.)

//타입변환시 사용 함수 (String, Number, BigInt, Boolean) BigInt는 큰 숫자 마지막에 n이 들어가 있음
const v1 = String(123);
const v2 = String(new Date());
const v3 = Number('123');
const v4 = BigInt('123');  // 123n
const v5 = Boolean(123);  // true
const v6 = Boolean(0);  // false
const v7 = Boolean('sss');  // true
const v8 = Boolean('');  // false
/* 
const v5 = !!123;  // true
const v6 = !!0;  // false
const v7 = !!'sss';  // true
const v8 = !!'';  // false
 */

//parseInt는 정수를 파싱 /  parseFloat는 실수를 파싱
Number.parseInt('123.344'); //123
Number.parseInt('123.ers'); //123
Number.parseFloat('123.344.342'); //123.344
Number.parseFloat('123.ers'); //123
const b = Number.parseFloat('efsdf'); //NAN

//isNaN은 값이 NAN인지 검사해줌
console.log(Number.isNaN(b)) // true


//숫자의 연산은 53비트 프리스전으로 정확하지 않을 수있다. (필요할때 더 많은 공부 필요...)

// 줄바꿈이 필요할때 
console.log('미디어브레인은 \n이사했다')
console.log(`미디어브레인은 
이사했다`)


//문자열을 변경하고싶을때
const input = '오늘 보실 드라마는 최근 시작한 드라마입니다.';
const output = input.replace('드라마', '영화'); //처음에 만나는 드라마만 변경
console.log(output);
console.log(input.replace(/드라마/g, '영화')); //모든 드라마를 변경
console.log(input.replaceAll('드라마', '영화')); //모든 드라마를 변경(구형브라우저(IE에서도)에서 안됨)

/* 
includes - 문자열에 해당 글자가 있는지
srartsWith - 해당 문자열로 시작하는지
endsWith - 해당 문자열로 끝나는지

substr - 문자열을 추출
indexOf - 해당 문자열의 위치 (숫자)
*/

//문자열을 분할
console.log(input.split(' '));  //띄어쓰기를 기준으로 문자열을 나눔 (배열형태)
//문자열을 묶음
console.log(input.split(' ').join('./=`')); //나눠져 있는 배열형태의 문자열을 묶어줌

const c1 = 123;  //true
const c2 = 'asd' //true
const v11 = c1 && 0 && c2; //false 값이 v1의 값이 된다. v1 = 0 (and 연산자)
const v22 = '' || c2; // true 값이 v2의 값이 된다. v2 = 'asd' (or 연산자)

//기본값입력문법 nullish coalescing
const person = {anem:''}
const name2 = person.name ?? 'unknown'; //person.name이 null 또는 undefind이면 'unknown'기본값이 사용됨. (or 연산자와 비슷하지만 다른점은 빈문자열이나 0에서는 기본값을 사용하지 않는다.)
console.log(name2);
//기본값으로 함수를 넣을 수도 있다.

// 객체를 만드를 2가지 방법
const obj1 = {
  age : 21,
  name : 'min',
}
const obj2 = new Object({
  age : 21,
  name : 'min',
})

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

obj1.city = 'seoul'; //추가
obj1.age = 40; //수정
console.log(obj1);
delete obj1.city; //삭제
console.log(obj1);

// 배열을 만드는 2가지 방법
const arr = [1,2,3];
const arr2 = new Array(1,2,3);

console.log(arr.map(item => item + 1)); //각 아이템에 1을 더해서 새로운 배열로 만듬
console.log(arr.filter(item => item >= 2)); //조건을 만족하는 아이템만 뽑아서 새로운 배열로 만듬
console.log(arr.reduce((acc, item) => acc + item, 0)); //0으로 시작해서 모든 아이템을 더해줌
//위 3가지 모두 기존 배열은 건드리지 않음

//배열 반복문 2가지 방법
arr.forEach(item => console.log(item)); 
for (const item of arr) {
  console.log(item);
}

console.log(arr.some(item => item === 2));  //하나라도 만족하면 true
console.log(arr.every(item => item === 2));  //모두 만족하면 true
console.log(arr.includes(2));  //2가 있으면 true
console.log(arr.find(item => item % 2 === 1));  //조건을 만족하는 첫번째 값
console.log(arr.findIndex(item => item % 2 === 1));  //조건이 만족하는 첫번째 값의 인덱스

arr.push(4); //뒤에 추가
console.log(arr.pop()) // 뒤에 삭제하여 그 값 반환

//arr.splice(인덱스,삭제할 개수,넣을 아이템들)
arr.splice(1,1,10,20,30)

arr.sort() //오른차순 정렬 (기존배열을 수정)

