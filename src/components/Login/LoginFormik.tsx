import { Field, Form, Formik } from 'formik'
import React, { FC } from 'react'
import { FormDataType } from './Login'

export type SetStatus = (status?: any) => void

type PropsType = {
  onSubmit: (value: FormDataType, setStatus: SetStatus) => void
}

export const LoginFormik: FC<PropsType> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      validate={(values) => {
        const errors: { email?: string; password?: string } = {}

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
      onSubmit={(values, submitProps) => {
        onSubmit(values, submitProps.setStatus)
      }}>
      {({ isSubmitting, errors, touched, status }) => (
        <Form>
          <div>
            <Field type="email" name="email" placeholder="email" autocompleted="off" />
            {errors.email && touched.email && errors.email}
          </div>

          <div>
            <Field type="password" name="password" placeholder="password" />
            {errors.password && touched.password && errors.password}
          </div>

          <label>
            <Field type="checkbox" name="rememberMe" />
            Remember me
          </label>
          <button type="submit">Submit</button>
          <p>{status && status.error[0]}</p>
        </Form>
      )}
    </Formik>
  )
}
