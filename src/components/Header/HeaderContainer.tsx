import { Header } from './Header'
import React from 'react'
import axios from 'axios'
import { AuthStateType, setAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'

export type HeaderPropsType = MapDispatchToProps & AuthStateType

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
        }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data)
        }
      })
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
  setAuthUserData: (data: AuthStateType) => void
}

export default connect(mapStateToProps, {setAuthUserData: setAuthUserData})(HeaderContainer)
