import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  // const [inputText , setInput] = useState("");
  const [list , setListItem] = useState([]);

  // function handleInput(event){
  //   const newValue = event.target.value;
  //   setInput(newValue);
  // }

  function addItem(inputText){
    setListItem(prevValues => {
      return [...prevValues , inputText];
    });
  }

  function deleteItem(id) {
    setListItem((prevValues) => {
      return prevValues.filter((item, index) => index !== id);
    });
    console.log("deleted", id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onAdd = {addItem}/>

      <div>
        <ul>
          {list.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
