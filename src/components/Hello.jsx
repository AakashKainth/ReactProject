function Hello(props) {
  props.name = "Jake";
  return (
    <h1>
      {props.message} {props.name} {props.emoji}
    </h1>
  );
}

export default Hello;
