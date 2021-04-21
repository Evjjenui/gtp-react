import React from 'react';

export const FormItem = ({ label, ...rest }) => {
  const {valueText} = {...rest}

  function ChangeText(e) {
    const {onChange} = {...rest};
    onChange(e.target.value);
  };

  return (
    <div className="form-item">
      <label>{label}:</label>
      <input
        type = "text"
        onChange = {(e) => ChangeText(e)}
        value = {valueText}
        />
    </div>
  )
};
