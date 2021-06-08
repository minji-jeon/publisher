import "./App.css";
import Childcomponent from "./components/child.js";
import Timercomponent from "./components/timer.js";

function App() {
  const txt = "빠밤!";
  const sayHello = function() {
    alert('아안노옹~')
  }
  return (
    <div className="App">
      <h1>안녕!</h1>
      <h2>{txt}</h2>
      <div onClick={sayHello}>클릭해봥</div>
      <Childcomponent name='쪼동' age={7}/>
      <Childcomponent name='태훈' age={31}/>
      <Childcomponent name='민찌' age={29}/>
      <Timercomponent />
    </div>
  );
}

export default App;
