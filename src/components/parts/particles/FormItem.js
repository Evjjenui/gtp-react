import React, {useState} from 'react';

function FormItem(props) {
  const [text, setText] = useState('');

  function changeHandler(e){
    const { nameValue } = props;
    nameValue(setText(e.target.value));
  }

  return (

    <div className="form-item">
      <label>{props.label}:</label>
      <input
        type="text"
        onChange = {(e) => changeHandler(e)}
        value={text}
        />
    </div>
  )
}

export default FormItem;
