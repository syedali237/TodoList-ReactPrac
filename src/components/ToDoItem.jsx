import React from "react";

export default function ToDoItem(props) {


  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

// style={{ textDecoration: isDone ? "line-through" : "none" }}
// const [isDone, setIsDone] = useState(false);
// function handleClick() {
//   setIsDone((prevValue) => {
//     return !prevValue;
//   });
// }