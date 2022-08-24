import { Redirect } from 'react-router-dom'
import React from 'react'
import { AppStateType } from '../redux/store'
import { connect } from 'react-redux'

export const withAuthRedirect = (Component: any): any => {

  class RedirectComponent extends React.Component<any, any> {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"}/>
      }

      return <Component {...this.props}/>
    }
  }

  const mapStateToPropsForRediect = (state: AppStateType): any & {isAuth: boolean}=> ({
    isAuth: state.auth.isAuth
  })

  return connect(mapStateToPropsForRediect)(RedirectComponent)
}
