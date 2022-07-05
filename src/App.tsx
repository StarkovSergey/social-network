import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { ActionsTypes, StateType, StoreType } from './redux/state';

type AppPropsType = {
  state: StateType;
  dispatch: (action: ActionsTypes) => void;
  store: StoreType;
};

const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebarPage} />
      <main className="app-wrapper-content">
        <Route path="/dialogs" render={() => <Dialogs
          store={props.store}
        />} />
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
              newPostText={props.state.profilePage.newPostText}
            />
          )}
        />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
      </main>
    </div>
  );
};

export default App;
