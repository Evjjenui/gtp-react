import React from "react";

  function TodoList(props) {
    return (
      <ul>
        {props.list.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }

export default TodoList;
