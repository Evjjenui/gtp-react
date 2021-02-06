import React from "react";
import Tabs from "./other_parts/Tabs"

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Tabs>
          <div title="First tab">
            <em>lol</em>
          </div>
          <div title="Second tab">
            <strong>lol</strong>
          </div>
          <div title="Third tab">
            <strong><em>lol</em></strong>
          </div>
          <div title="Fourth tab">
            <h1><i>lol</i></h1>
          </div>
        </Tabs>
      </div>
    );
  };
}
export default Other;