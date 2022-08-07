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

