import React, {useState} from "react";

const buttonCLass = {
  wide: "wide"
}

class ButtonNumber extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.props.onCheckedNumber(e.target.innerText);
  }

  render() {
    const styleClass = this.props.styleClass;

    return (
      <div className={`button ${buttonCLass[styleClass] || ''}`}>
        <button onClick = {this.clickHandler}>
            {this.props.value}
        </button>
      </div>
    );
  };
};

export default ButtonNumber;
