import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/users"
import axios from "axios"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USERS
      })

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')

      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data
        })
      }, 500)
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Something went wrong!'
      })
    }
  }
}