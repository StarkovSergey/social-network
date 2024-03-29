import { Header } from './Header'
import React from 'react'
import { AuthStateType, logout, setAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'

export type HeaderPropsType = MapDispatchToProps & AuthStateType

class HeaderContainer extends React.Component<HeaderPropsType> {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType): AuthStateType => ({
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.id,
  isAuth: state.auth.isAuth,
})
type MapDispatchToProps = {
  setAuthUserData: (data: AuthStateType) => void
  logout: () => void
}

export default connect(mapStateToProps, { setAuthUserData, logout })(HeaderContainer)
