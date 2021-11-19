import { createSlice } from '@reduxjs/toolkit';
import modalApi from '../api/modalApi';

export const modalsSearch = createSlice({
  name: 'modals',
  initialState: {
    isLoading: true,
    modalsList: undefined,
    errorMessage: null,
  },
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },
    getModals: (state, action) => {
      (state.isLoading = false), (state.modalsList = action.payload);
    },
  },
});

export const { getModals, isPending } = modalsSearch.actions;

export const fetchModals = () => async (dispatch) => {
  console.log('HERE');
  dispatch(isPending());
  console.log('AFTER  IS LOADING REDUCER');
  const response = await modalApi.fetchAll();
  console.log(response);
  dispatch(getModals(response));
};

export default modalsSearch.reducer;
