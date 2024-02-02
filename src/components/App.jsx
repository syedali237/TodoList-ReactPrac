import React, { useState } from "react";

function App() {

  const [inputText , setInput] = useState("");
  const [list , setListItem] = useState([]);

  function handleInput(event){
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItem(){
    setListItem(prevValues => {
      return [...prevValues , inputText];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {list.map(el => 
          <li>{el}</li>
        )}
        </ul>
      </div>
    </div>
  );
}

export default App;
