import { createSlice } from "@reduxjs/toolkit"
import { auth } from "./authThunk"

interface AuthState {
  error: string | null 
  loading: boolean
}

const initialState: AuthState = {
  error: null,
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
      })
      .addCase(auth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload?.message || 'An error occurred.'
      })
  }
})

export const { clearError } = authSlice.actions
export default authSlice.reducer