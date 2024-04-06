import { createSlice } from '@reduxjs/toolkit'

//authStage

const initialState = {
  key: "login",
  registerStage: 0,
  email: "",
  password: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    incrementRegisterStage: (state, action) => {
      state.registerStage += 1;
    },
    decrementRegisterStage: (state, action) => {
      state.registerStage -= 1;
    },
  },
})

export const { setKey, setEmail, setPassword, incrementRegisterStage, decrementRegisterStage } = authSlice.actions

export default authSlice.reducer