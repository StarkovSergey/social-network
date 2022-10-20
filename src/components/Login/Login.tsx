import React from 'react'
import style from './Login.module.css'
import { authAPI } from '../../api/api'
import { Field, Form, Formik } from 'formik'

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login = () => {

  return (
    <div className={style['login-section']}>
      <h1>Login</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validate={(values) => {
          const errors: { email?: string, password?: string } = {}

          if (!values.email) {
            errors.email = 'Required'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }

          if (values.password.length < 4) {
            errors.password = 'Min length is 4'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          authAPI.login(values).then((response) => {})
          setSubmitting(false)
        }}>
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field type="email" name="email" placeholder="email" autocompleted="off"/>
            {errors.email && touched.email && errors.email}

            <Field type="password" name="password" placeholder="password"/>
            {errors.password && touched.password && errors.password}

            <label>
              <Field type="checkbox" name="rememberMe"/>
              Remember me
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
