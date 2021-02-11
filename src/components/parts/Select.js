import React, {useState, useEffect} from "react";
import SelectItem from "./particles/SelectItem";

function Select(props) {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [itemChecked, setItemChecked] = useState('');
  
  let insertText;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(
        result => {
          setItems(result)
          setIsLoaded(true)
        },
        error => {
          setError(error)
          setIsLoaded(true)
        }
      )
  })

  function onCheck(option) {
    setItemChecked(option);
    
    if (itemChecked) {
      console.log('here', insertText);
      console.log(items.filter(item => item.title === itemChecked));
      insertText = items.filter(item => item.title === itemChecked);
    } else {
      return;
    }
  }

  if(error) {
    return <p>Error: {error.message}</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  } else {

    return (
      <>
        <select>
          {items.map(item => {
            return (
              <SelectItem
                key = {item.id}
                text = {item.title}
                itemChecked = {itemChecked}
                onClick = {setItemChecked}/>
            )
          })}
        </select>
        <p>here's more info : {}</p>
      </>
    )
  }
}

export default Select;
