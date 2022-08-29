import style from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import React from 'react'
import { DialogsPropsType } from './DialogsContainer'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

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
      <AddMessageFormRedux onSubmit={addMessage}/>
    </div>
  )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="new-message">
        <Field component="textarea" name="newMessageText" placeholder="Enter your message..." className="new-message__textarea"/>

        <button className="new-message__add-button">
          Send
        </button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

type FormDataType = {
  newMessageText: string
}
