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
  captcha?: string
}

export const Login: FC<LoginProps> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (values: FormDataType, setStatus: SetStatus) => {
    login(values, setStatus)
  }

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={style['login-section']}>
      <h1>Login</h1>

      <LoginFormik onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}

type LoginProps = {
  login: (param: FormDataType, setStatus: any) => void
} & ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
  login,
})(Login)
