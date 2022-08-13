import { authAPI } from '../api/api'
import { Dispatch } from 'redux'

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export type AuthStateType = {
  id: string | null
  email: string | null
  login: string | null,
  isAuth: boolean
}

type SetUserDataAT = ReturnType<typeof setAuthUserData>

type ActionsType = SetUserDataAT

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case 'SET-USER-DATA':
      console.log(action.data)
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

export const setAuthUserData = (data: AuthStateType) => ({
  type: 'SET-USER-DATA' as const,
  data
})

export const getAuthUserData = () => (dispatch: Dispatch) => {

  authAPI.me().then((data) => {

    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data))
    }
  })
}
