import React from 'react';

export const FormInputEdit = ({ label, ...rest }) => {
  const {defaultValueText} = {...rest}
  const {placeholderText} = {...rest}

  function changeText(e) {
    const {onChange} = {...rest}
    onChange(e.target.value || e.target.defaultValue)
  };

  return (
    <div className="form-item">
      <input
        type = "text"
        onChange = {changeText}
        defaultValue = {defaultValueText}
        // value = {defaultValueText}
        placeholder = {placeholderText}
        />
    </div>
  )
};
