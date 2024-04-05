import { createSlice } from '@reduxjs/toolkit'

//authStage

const initialState = {
  key: "login",
  registerStage: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    incrementRegisterStage: (state, action) => {
      state.registerStage += 1;
    },
    decrementRegisterStage: (state, action) => {
      state.registerStage -= 1;
    },
  },
})

export const { setKey, incrementRegisterStage, decrementRegisterStage } = authSlice.actions

export default authSlice.reducer