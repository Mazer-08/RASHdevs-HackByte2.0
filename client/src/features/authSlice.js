import { createSlice } from '@reduxjs/toolkit'

//authStage

const initialState = {
  key: "login",
  registerStage: 0,
  email: "",
  password: "",
  role: "",
  name: "",
  username: "",
  dob: "",
  about: "",
  clgName: "",
  passingYear: "",
  domain: "",
  workExp: "",
  linkedIn: "",
  github: "",
  cvLink: "",
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
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setAbout: (state, action) => {
      state.about = action.payload;
    },
    setClgName: (state, action) => {
      state.clgName = action.payload;
    },
    setPassingYear: (state, action) => {
      state.passingYear = action.payload;
    },
    setDomain: (state, action) => {
      state.domain = action.payload;
    },
    setWorkExp: (state, action) => {
      state.workExp = action.payload;
    },
    setLinkedIn: (state, action) => {
      state.linkedIn = action.payload;
    },
    setGithub: (state, action) => {
      state.github = action.payload;
    },
    setCvLink: (state, action) => {
      state.cvLink = action.payload;
    },
    incrementRegisterStage: (state, action) => {
      state.registerStage += 1;
    },
    decrementRegisterStage: (state, action) => {
      state.registerStage -= 1;
    },
  },
})

export const { setKey, setEmail, setPassword, setRole, setName, setUsername, setDob, setAbout, setClgName, setPassingYear, setDomain, setWorkExp, setLinkedIn, setGithub, setCvLink, incrementRegisterStage, decrementRegisterStage } = authSlice.actions

export default authSlice.reducer