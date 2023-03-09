import React, { FC } from 'react'
import style from './Login.module.css'
import { LoginFormik, SetStatus } from './LoginFormik'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/store'
import { Redirect } from 'react-router-dom'

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login: FC<LoginProps> = (props) => {
  const onSubmit = (values: FormDataType, setStatus: SetStatus) => {
    props.login(values, setStatus)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={style['login-section']}>
      <h1>Login</h1>

      <LoginFormik onSubmit={onSubmit} />
    </div>
  )
}

type LoginProps = {
  login: (param: FormDataType, setStatus: any) => void
} & ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
})

export const LoginContainer = connect(mapStateToProps, {
  login,
})(Login)
