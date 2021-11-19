import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ModalAdd = ({toAdd, onClose, handleSubmit, children, ...rest}) => {
  const { modalText } = {...rest}
  const [ isEdit, setIsEdit ] = useState(false);
  const [ valueText, setValueText ] = useState('');
  
  const onCloseHandler = () => {
    onClose();
  };

  const submitHadler = (e) => {
    e.preventDefault();
    handleSubmit(valueText);
    setValueText('');
  }

  useEffect( () => {
    
  })
  
  if (!toAdd) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
    </div>
    , document.body);
}
 
export default ModalAdd;
