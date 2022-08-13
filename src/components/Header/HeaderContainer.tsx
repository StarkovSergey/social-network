import { Header } from './Header'
import React from 'react'
import { AuthStateType, getAuthUserData, setAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'

export type HeaderPropsType = MapDispatchToProps & AuthStateType

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {

    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state: AppStateType): AuthStateType => ({
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.id,
  isAuth: state.auth.isAuth
})
type MapDispatchToProps = {
  getAuthUserData: () => void
  setAuthUserData: (data: AuthStateType) => void
}

export default connect(mapStateToProps, {getAuthUserData, setAuthUserData})(HeaderContainer)
