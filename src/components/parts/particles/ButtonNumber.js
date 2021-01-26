import React, {useState, useEffect} from "react";

function ButtonNumber(props) {

  return (
    <div className="button">
      <button>{props.number}</button>
    </div>
  );
};

export default ButtonNumber;
