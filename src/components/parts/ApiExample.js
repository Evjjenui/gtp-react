import React, { useEffect, useState } from "react";
import ApiList from "./particles/ApiList";

function ApiExample () {
  const [itemsList, setItemsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState('No Error\'s');

  useEffect(() => {
    fetch('https://mighty-meadow-api.herokuapp.com/blogs')

    .then((res) => {
      if (!res.ok) {
        throw Error ('Could not fetch the data');
      }
      return res.json();
    })
    .then((data) => {
      setItemsList(data)
      setIsLoaded(false)
      setError('');
    })
    .catch((err) => {
      if (err.name === 'AbortError') {
        return;
      } else {
        setIsLoaded(false);
        setError(err.message);
      }
    })
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>
  } else if (isLoaded) {
    return <p>Loading ...</p>
  } else {
    return (
      <>
        <ol>
          {itemsList.map(item => {
            return (
              <ApiList
                key={item.id}
                text={item.title}
              />
            )
          })}
        </ol>
      </>
    )
  }
}

export default ApiExample;
