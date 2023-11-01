type person = {
  name: {
    first: string;
    last: string;
  }
};

function Message(props:person) {
  return <h1>{props.name.first} { props.name.last}</h1>;
}

export default Message;
