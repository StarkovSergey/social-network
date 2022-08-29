import React from 'react'
import style from './Login.module.css'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { authAPI } from '../../api/api'

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


  return (
    <form className={style.form} onSubmit={props.handleSubmit}>
      <Field name="login" placeholder={"login"} component={"input"} autoComplete={"off"}/>
      <Field name="password" placeholder={"password"} component={"input"} autoComplete={"off"}/>
      <label htmlFor="checkbox-remember">
        <Field name="rememberMe" type={"checkbox"} component={"input"} id={"checkbox-remember"}/>
        remember me
      </label>
      <button>Log in</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)


export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
    authAPI.login(formData).then((response) => {

      })
  }

  return (
    <div className={style['login-section']}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
