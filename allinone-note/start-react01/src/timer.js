import React from "react";

function Timer () {
  const [time,setTime] = React.useState(0); /* 괄호안에는 기본값, 첫번째인자인 time은 값이 0으로 시작됨. */
  console.log("컴포넌트 업데이트");

  function undateTime() {
    setTime(time + 1);
  }

  return ( /* 리턴은 마지막에 */
    <div>
      <h3>{time}초</h3>
      <button onClick={undateTime}>올라감</button>
    </div>
  )
}

export default Timer;