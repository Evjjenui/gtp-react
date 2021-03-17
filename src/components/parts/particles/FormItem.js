import React from 'react';

function FormItem(props) {

  return (
    <div className="form-item">
      <label>{props.label}:</label>
      <input type="text" />
    </div>
  )
}

export default FormItem;
