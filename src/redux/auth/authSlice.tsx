import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: null | any;
  token: null | any;
}

const initialState: AuthState = {
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signinUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    signinToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload
    },
    signOut: (state) => {
      state.user = null
      state.token = null
    },
  },
})

export const { signinUser, signinToken, signOut } = authSlice.actions

export default authSlice.reducer