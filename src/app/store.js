import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from '../features/redux/modals';

export default configureStore({
  reducer: {
    modals: modalsReducer,
  },
});
