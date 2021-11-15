import { createSlice } from "@reduxjs/toolkit";

export const counterSlicer = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value++
    },
    dicrement: (state) => {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    }
  }
})

export const { increment, dicrement, incrementByAmount } = counterSlicer.actions

export default counterSlicer.reducer
