import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

/*export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching())
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    dispatch(userSlice.actions.usersFetchingSuccess(response.data))
  } catch (error) {
    dispatch(userSlice.actions.usersFetchingErr(error.message))
  }
}*/

export const fetchUsers = createAsyncThunk(
  'user/fetchViaAPI',
  async (_, thunkAPI) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
  }
)
