import { createSlice, createAction } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'

const fulfilled = createAction(fetchUsers.fulfilled)
const pending = createAction(fetchUsers.pending)
const rejected = createAction(fetchUsers.rejected)

const initialState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.users = action.payload
      })
      .addCase(pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default userSlice.reducer
