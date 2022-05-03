function Child(props) {
  const { name, age} = props;
  return (
    <div>
      <p>이름 {name} 나이 {age}살</p>
    </div>
  );
}

export default Child;