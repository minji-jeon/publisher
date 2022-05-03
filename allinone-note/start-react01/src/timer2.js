import React from "react";

function Timer2 () {
  const [time,setTime] = React.useState(0); /* 괄호안에는 기본값, 첫번째인자인 time은 값이 0으로 시작됨. */
  console.log("컴포넌트 업데이트");

  React.useEffect(function() {
    setTime(time+1);
  },[]);
/* useEffect함수에 익명함수와 배열을 인자로 넣어준다 배열의 값이 변할때마다 useEffect함수가 재실행된다. */
  return ( /* 리턴은 마지막에 */
    <div>
      <h3>{time}초</h3>
      <button>올라감</button>
    </div>
  )
}

export default Timer2;