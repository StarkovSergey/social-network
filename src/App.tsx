import React, { Suspense } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { UsersContainer } from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'
import { AppStateType, store } from './redux/store'
import { Loader } from './components/common/Loader/Loader'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const LoginContainer = React.lazy(() => import('./components/Login/Login'))

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
          <Route
            path="/dialogs"
            render={() => (
              <Suspense fallback={<Loader />}>
                <DialogsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/profile/:userId?"
            render={() => (
              <Suspense fallback={<Loader />}>
                <ProfileContainer />
              </Suspense>
            )}
          />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route
            path="/login"
            render={() => (
              <Suspense fallback={<Loader />}>
                <LoginContainer />
              </Suspense>
            )}
          />
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

export const SamuraiJSApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
)
