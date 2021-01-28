import React, {useState} from "react";

const buttonCLass = {
  orange: "orange"
}

class ButtonAction extends React.Component{
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler(e) {
    this.props.onCheckAction(e.target.innerText);
  };

  render () {
    const bgStyle = this.props.bgStyle;

    return (
      <div className={`button ${buttonCLass[bgStyle] || ''} `}>
        <button onClick = {this.clickHandler}>
          {this.props.actionSign}
        </button>
      </div>
    );
  }
};

export default ButtonAction;
