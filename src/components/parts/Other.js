import React from "react";

import Tabs from "./other_parts/Tabs"
import ApiExample from "./ApiExample"
import Select from "./Select"
import Modal from "./Modal"

const Other = () => {

  return (
    <div>
      <Tabs>
        <div title="NE Modal exmpl">
          <Modal />
        </div>
        <div title="NE First tab">
          <em>lol</em>
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

export default Other;
