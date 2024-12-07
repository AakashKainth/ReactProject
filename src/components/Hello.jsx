function Hello(props) {
  props.name = "Jake";
  return (
    <h1>
      {props.message} {props.name} 
    </h1>
  );
}

export default Hello;
