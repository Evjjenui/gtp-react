import React from "react";

class ApiList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: {
        text,
      }
    } = this

    return (
      <li>
        {text}
      </li>
    )
  }
}


export default ApiList;
