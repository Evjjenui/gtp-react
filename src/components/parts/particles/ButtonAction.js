import React, {useState} from "react";

class ButtonAction extends React.Component{
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler(e) {
    this.props.onCheckAction(e.target.innerText);
  };

  render () {

    return (
      <div className="button orange">
        <button onClick = {this.clickHandler}>
          {this.props.actionSign}
        </button>
      </div>
    );
  }
};

export default ButtonAction;
