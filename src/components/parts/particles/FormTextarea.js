import React from 'react';

export const FormTextarea = ({ label, ...rest }) => {
  const {valueText} = {...rest}

  function ChangeText(e) {
    const {onChange} = {...rest};
    onChange(e.target.value);
  };

  return (
    <div className="form-item">
      <label>{label}:</label>
      <textarea 
        onChange = {ChangeText}
        value = {valueText}
        required>
      </textarea>
    </div>
  )
};
