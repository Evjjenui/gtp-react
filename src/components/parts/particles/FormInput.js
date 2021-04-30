import React from 'react';

export const FormInput = ({ label, ...rest }) => {
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
        onChange = {ChangeText}
        value = {valueText}
        required
        />
    </div>
  )
};
