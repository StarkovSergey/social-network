import { authAPI, securityAPI } from '../api/api'
import { FormDataType } from '../components/Login/Login'
import { AppDispatch } from './store'
import { SetStatus } from '../components/Login/LoginFormik'

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

export type AuthStateType = {
  id: string | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl?: string | null // if null, then captcha is not required
}

type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case 'auth/SET-USER-DATA':
      return {
        ...state,
        ...action.payload,
      }
    case 'auth/GET-CAPTCHA-URL-SUCCESS':
      return {
        ...state,
        captchaUrl: action.url,
      }
    default:
      return state
  }
}

export const setAuthUserData = (payload: AuthStateType) => ({
  type: 'auth/SET-USER-DATA' as const,
  payload,
})

export const getCaptchaUrlSuccess = (url: string) => ({
  type: 'auth/GET-CAPTCHA-URL-SUCCESS' as const,
  url,
})

export const getAuthUserData = () => async (dispatch: AppDispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setAuthUserData({ id, email, login, isAuth: true }))
  }
}

export const login = (param: FormDataType, setStatus: SetStatus) => async (dispatch: AppDispatch) => {
  const data = await authAPI.login(param)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    setStatus({ error: data.messages })
  }
}

export const logout = () => (dispatch: AppDispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData({ id: null, email: null, login: null, isAuth: false }))
    }
  })
}

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
  const response = await securityAPI.getCaptchaUrl()

  const captchaUrl = response.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}
