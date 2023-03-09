import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

// @ts-ignore
window.store = store
