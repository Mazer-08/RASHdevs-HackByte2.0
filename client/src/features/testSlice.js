import { createSlice } from '@reduxjs/toolkit'

//testSlice

const initialState = {
  value: 1,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
  },
})

export const { increment } = testSlice.actions

export default testSlice.reducer