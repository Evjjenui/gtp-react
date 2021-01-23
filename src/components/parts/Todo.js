import React, {useState} from "react";

function Todo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([{text: 'sada', id: 1}]);

  // console.log(items);

  function submitHandler(e) {
    console.log(items);
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    }
    console.log(newItem);
    
    // setItems([...items, newItem]);
  }

  // function TodoList(setItems) {
  //   return (
  //     <ul>
  //       {items.map(item => (
  //         <li key={item.id}>{item.text}</li>
  //       ))}
  //     </ul>
  //   )
  // }

  return (
    <div>
      <p><b>Todo List</b></p>
      <form onSubmit = {(e) => setItems(submitHandler(e))}>
        <input
          onChange = {(e) => setText(e.target.value)}
          value = {text}
        />
        <button>Добавить</button>
      </form>
        {/* <TodoList /> */}
    </div>
  )
}



export default Todo;
