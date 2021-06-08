function Childcomponent(props) {
  const {name, age} = props;
  return (<div>
    <p>자식컴포넌트</p>
    <p>이름은 {name}이고, {age}살이야</p>
  </div>)
}
export default Childcomponent;