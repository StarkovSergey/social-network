import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import {
  DialogsPageType,
  ActionsTypes,
  updateNewMessageTextActionCreator,
  addMessageActionCreator, StoreType, StateType,
} from '../../redux/state';
import React, { ChangeEvent } from 'react';

type DialogsPropsType = {
  store: StoreType;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const state = props.store.state.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    props.store.dispatch(updateNewMessageTextActionCreator(evt.currentTarget.value));
  };

  return (
    <div className={style.dialogs}>
      <ul className={style['dialogs-list']}>{dialogsElements}</ul>
      <ul className={style['messages-list']}>{messagesElements}</ul>
      <div className="new-message">
        <textarea
          value={state.newMessageText}
          className="new-message__textarea"
          placeholder="Enter your message..."
          onChange={textareaChangeHandler}></textarea>
        <button className="new-message__add-button" onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
