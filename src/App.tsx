import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Route, withRouter } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import { UsersContainer } from './components/Users/UsersContainer'
import { ProfileContainer } from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { LoginContainer } from './components/Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'
import { AppStateType } from './redux/store'
import { Loader } from './components/common/Loader/Loader'

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.isInitialized) {
      return <Loader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <main className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </main>
      </div>
    )
  }
}

type AppProps = {
  initializeApp: () => void
} & ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
  isInitialized: state.app.isInitialized,
})

export const AppContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {
    initializeApp,
  }),
  withRouter
)(App)
