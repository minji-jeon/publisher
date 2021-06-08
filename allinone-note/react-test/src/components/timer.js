import React from 'react';

// function Timercomponent(props) {
//   const [time, setTime] = React.useState(0);
//   console.log('컴포넌트 업데이트');
//   function updateTime() {
//     setTime(time + 1);
//   }
//   return (
//     <div>
//       <h3>{time}초</h3>
//       <button onClick={updateTime}>1씩 올라감</button>
//     </div>
//   )
// }

// useEffect 사용했을때
//[]속 변수가 변경될때마다 함수가 실행됨. 값이 없으면 한번 실행됨
function Timercomponent(props) {
  const [time, setTime] = React.useState(0);
  console.log('컴포넌트 업데이트');
  React.useEffect(function() {
    setTime(time + 1);
  },[])
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={() => setTime(time + 1)}>1씩 올라감</button>
    </div>
  )
}


export default Timercomponent;