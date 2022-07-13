import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

// type AppPropsType = {
//   state: StateType;
//   dispatch: (action: ActionsTypes) => void;
//   store: any;
// };

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-wrapper-content">
        <Route path="/dialogs" render={() =>
          <DialogsContainer />} />
        <Route
          path="/profile"
          render={() => (
            <Profile />
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
