import React, {useState} from "react";
import TodoList from "./particles/TodoList.js";

function Todo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);


  function submitHandler(e) {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    }
    
    setItems([...items, newItem]);
    setText('');
  }

  return (
    <div>
      <p><b>Todo List</b></p>
      <form onSubmit = {(e) => submitHandler(e)}>
        <input
          onChange = {(e) => setText(e.target.value)}
          value = {text}
        />
        <button>Add</button>
      </form>
        <TodoList list={items}/>
    </div>
  )
}

export default Todo;
