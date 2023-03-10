import { authAPI } from '../api/api'
import { FormDataType } from '../components/Login/Login'
import { AppDispatch } from './store'
import { SetStatus } from '../components/Login/LoginFormik'

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export type AuthStateType = {
  id: string | null
  email: string | null
  login: string | null
} & {
  isAuth: boolean
}

type ActionsType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case 'SET-USER-DATA':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const setAuthUserData = (payload: AuthStateType) => ({
  type: 'SET-USER-DATA' as const,
  payload,
})

export const getAuthUserData = () => (dispatch: AppDispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setAuthUserData({ id, email, login, isAuth: true }))
    }
  })
}

export const login = (param: FormDataType, setStatus: SetStatus) => (dispatch: AppDispatch) => {
  authAPI.login(param).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      setStatus({ error: data.messages })
    }
  })
}

export const logout = () => (dispatch: AppDispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData({ id: null, email: null, login: null, isAuth: false }))
    }
  })
}
