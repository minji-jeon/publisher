import logo from './logo.svg';
import './App.css';
import Child from './child.js';
import Timer from './timer.js';
import Timer2 from './timer2.js';

function App() {
  const text = "텍스트텍스트"; //변수
  const Hello = function() {   //함수
    return <h3>강의강의강의</h3>
  };
  const Hello2 = function() { //함수2
    alert("으어어어어어어어아")
  };

  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>{text}</h2> {/* 변수 */}
      {Hello()} {/* 함수 */}
      <div onClick={Hello2}>클릭해봐</div> {/* 함수2 */}
      <Timer />
      <Timer2 />
      <Child  name="민지" age={30}/>
      <Child  name="민치" age={40}/>
      <Child  name="민찌" age={20}/>
    </div>
  );
}

export default App;
