import { AppDispatch } from './store'
import { getAuthUserData } from './auth-reducer'

const initialState: AppStateType = {
  isInitialized: false,
}

type AppStateType = {
  isInitialized: boolean
}

type ActionsType = ReturnType<typeof setInitializedSuccess>

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-INITIALIZED-SUCCESS':
      return {
        ...state,
        isInitialized: true,
      }
    default:
      return state
  }
}

export const setInitializedSuccess = () => ({
  type: 'SET-INITIALIZED-SUCCESS' as const,
})

export const initializeApp = () => (dispatch: AppDispatch) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(setInitializedSuccess())
  })
}
