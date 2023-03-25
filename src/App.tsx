import React, { ComponentType, Suspense } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
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
  catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
    alert('Some error occured')
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
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
          </Switch>
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

export const AppContainer = compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App)

export const SamuraiJSApp = () => (
  <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
)
