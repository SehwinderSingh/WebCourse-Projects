function Random(props) {
  const randomNumber =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <p>
      Random Value Between {props.min} and {props.max}: {randomNumber}
    </p>
  );
}

export default Random;