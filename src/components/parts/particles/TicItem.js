import React from "react";

class TicItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.props.clickHandler(this.props.value);
  };

  render() {
    return(
      <div
        className="tickItem"
        onClick={this.clickHandler}
      >
        {this.props.value}
      </div>
    )
  }
}

export default TicItem;
