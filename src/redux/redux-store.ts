import { combineReducers, createStore } from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
});

export const store = createStore(reducers);
