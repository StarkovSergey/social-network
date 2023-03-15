import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app-reducer'
import { compose } from 'redux'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

// @ts-ignore
window.store = store
