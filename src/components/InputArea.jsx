import React , {useState} from "react";

function InputArea(props){
    
    const [inputText , setInput] = useState("");

    function handleInput(event){
        const newValue = event.target.value;
        setInput(newValue);
      }

      return (
        <div className="form">
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={ () => {
            props.onAdd(inputText);
            setInput("");
        }}>
          <span>Add</span>
        </button>
      </div>
      )
}

export default InputArea;