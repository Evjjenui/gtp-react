import React, {useState, useEffect} from "react";

function ButtonAction(props) {

  return (
    <div className="button orange">
      <button>{props.actionSign}</button>
    </div>
  );
};

export default ButtonAction;
