import React from "react";
import Tabs from "./other_parts/Tabs"
import ApiExample from "./ApiExample"
import Select from "./Select"
import Modal from "./Modal"


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
          <div title="NE Modal exmpl">
            <Modal />
          </div>
          <div title="Select exmpl">
            <Select />
          </div>
          <div title="Api example">
            <ApiExample />
          </div>
        </Tabs>
      </div>
    );
  };
}
export default Other;
