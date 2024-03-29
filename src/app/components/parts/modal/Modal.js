import React, { useState, useEffect } from 'react';

import ModalList from './parts/ModalList';
import { FormInput } from '../particles/FormInput';
import { useSelector, useDispatch } from 'react-redux';
import { fetchModals } from '../../../../features/redux/modals';

function Modal() {
  const { modalsList, isLoading } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const [itemsList, setItemsList] = useState([]);
  const [values, setValues] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    //   fetch('http://localhost:4040/modal_items')
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw Error('Could not fetch the data');
    //       }
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setItemsList(data);
    //       setIsPending(false);
    //       setError('');
    //     })
    //     .catch((err) => {
    //       if (err.name === 'AbortError') {
    //         return;
    //       } else {
    //         setIsPending(false);
    //         setError(err.message);
    //       }
    //     });
    dispatch(fetchModals());
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const newItem = {
      name: values.name,
      addInfo: values.addInfo,
      price: values.price,
      date: new Date().toISOString().slice(0, 10),
      id: Date.now(),
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    };

    fetch('http://localhost:4040/modal_items', requestOptions).then((response) => response.json());

    setItemsList([...itemsList, newItem]);
    setValues({});
  }

  function removeItem(id) {
    fetch('http://localhost:4040/modal_items/' + id, {
      method: 'DELETE',
    });
  }

  return (
    <div className="modal-block">
      <form onSubmit={(e) => submitHandler(e)}>
        <FormInput
          label="Name"
          valueText={values.name || ''}
          onChange={(name) => setValues({ ...values, name })}
        />
        <FormInput
          label="Additional info"
          valueText={values.addInfo || ''}
          onChange={(addInfo) => setValues({ ...values, addInfo })}
        />
        <FormInput
          label="Price"
          valueText={values.price || ''}
          onChange={(price) => setValues({ ...values, price })}
        />

        <button>Add Item</button>
      </form>

      {/* <button className="button">
        <strong>Show Modal</strong>
      </button> */}

      {error && <div className="info-text error-block">{error}</div>}
      {isLoading && <div className="info-text loading">Loading ...</div>}
      {modalsList && <ModalList list={modalsList} onDelete={(itemId) => removeItem(itemId)} />}
    </div>
  );
}
``;

export default Modal;
