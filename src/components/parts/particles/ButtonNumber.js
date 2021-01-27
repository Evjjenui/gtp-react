import React, {useState} from "react";

class ButtonNumber extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.props.onCheckedNumber(e.target.innerText);
  }

  render() {

    return (
      <div className="button">
        <button onClick = {this.clickHandler}>
            {this.props.value}
        </button>
      </div>
    );
  };
};

export default ButtonNumber;
