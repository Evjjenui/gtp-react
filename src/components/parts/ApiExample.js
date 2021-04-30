import React from "react";
import ApiList from "./particles/ApiList";

class ApiExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(
        (res) => {
          this.setState({
            items: res,
            isLoaded: true
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const {
      state: {
        error,
        items,
        isLoaded}
    } = this;

    if (error) {
      return <p>Error: {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading ...</p>
    } else {
      return (
        <ol>
          {items.map(item => {
            return (
              <ApiList
                key={item.id}
                text={item.title}
              />
            )
          })}
        </ol>
      )
    }
  }
}

export default ApiExample;
