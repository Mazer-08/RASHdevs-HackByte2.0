import { createSlice } from '@reduxjs/toolkit'

//testSlice

const initialState = {
  status: 0,
  allReferrals: [],
  pendingReferrals: [],
}

export const userHomeSlice = createSlice({
  name: 'userHome',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setAllReferrals: (state, action) => {
      state.allReferrals = action.payload;
    },
    setPendingReferrals: (state, action) => {
      state.pendingReferrals = action.payload;
    },
  },
})

export const { setStatus, setAllReferrals, setPendingReferrals } = userHomeSlice.actions

export default userHomeSlice.reducer