import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import React, { ChangeEvent } from 'react';
import { DialogType, MessageType } from '../../redux/dialogs-reducer';

type DialogsPropsType = {
  dialogs: DialogType[];
  messages: MessageType[];
  newMessageText: string;
  addMessage: () => void;
  updateNewMessageText: (text: string) => void;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogs.map((dialog: any) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id} />
  ));

  const messagesElements = props.messages.map((message: any) => (
    <Message message={message.message} key={message.id} />
  ));

  const addMessage = () => {
    props.addMessage()
  };

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageText(evt.currentTarget.value);
  };

  return (
    <div className={style.dialogs}>
      <ul className={style['dialogs-list']}>{dialogsElements}</ul>
      <ul className={style['messages-list']}>{messagesElements}</ul>
      <div className="new-message">
        <textarea
          value={props.newMessageText}
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
