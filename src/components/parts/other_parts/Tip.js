import React from "react";

class Tip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="TipItem">
        {this.props.TipName}
      </div>
    );
  };
}
export default Tip;
