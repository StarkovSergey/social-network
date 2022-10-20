import style from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import React from 'react'
import { DialogsPropsType } from './DialogsContainer'
import { Field, Form, Formik } from 'formik'

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogs.map((dialog: any) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id} />
  ))

  const messagesElements = props.messages.map((message: any) => <Message message={message.message} key={message.id} />)

  const addMessage = (values: FormDataType) => {
    props.addMessage(values.newMessageText)
  }

  return (
    <div className={style.dialogs}>
      <ul className={style['dialogs-list']}>{dialogsElements}</ul>
      <ul className={style['messages-list']}>{messagesElements}</ul>
      <AddMessageForm onSubmit={addMessage} />
    </div>
  )
}

const AddMessageForm: React.FC<{onSubmit: (values: FormDataType) => void}> = (props) => {
  return (
  <Formik
    initialValues={{
      newMessageText: '',
    }}
    validate={(values) => {
      const errors: { newMessageText?: string } = {}

      if (!values.newMessageText) {
        errors.newMessageText = 'Required'
      }

      return errors
    }}

    onSubmit={(values, { setSubmitting }) => {
      console.log(values)
      props.onSubmit(values)
      setSubmitting(false)
    }}>
    {({ isSubmitting, errors, touched }) => (
      <Form>
        <div>
          <div className="new-message">
            <Field component="textarea" name="newMessageText" placeholder="Enter your message..." className="new-message__textarea" />
          </div>
        </div>
        {errors.newMessageText && touched.newMessageText && errors.newMessageText}

        <button type="submit" disabled={isSubmitting}>
          Add post
        </button>
      </Form>
    )}
  </Formik>
  )
}



type FormDataType = {
  newMessageText: string
}
