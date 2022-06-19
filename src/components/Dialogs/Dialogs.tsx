import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogType, DialogsPageType, MessageType } from '../../redux/state';
import React, { ChangeEvent, LegacyRef } from 'react';

type DialogsPropsType = {
  state: DialogsPageType;
  newMessageChangeHandler: (text: string) => void;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id} />
  ));

  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  const newMessageTextareaElement: LegacyRef<HTMLTextAreaElement> = React.createRef();
  const addMessage = () => {
    const newMessageText = newMessageTextareaElement.current?.value;
    console.log(newMessageText);
  };

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    props.newMessageChangeHandler(evt.currentTarget.value)
  }

  return (
    <div className={style.dialogs}>
      <ul className={style['dialogs-list']}>{dialogsElements}</ul>
      <ul className={style['messages-list']}>{messagesElements}</ul>
      <div className="new-message">
        <textarea
          value={props.state.newMessageText}
          className="new-message__textarea"
          ref={newMessageTextareaElement}
          onChange={textareaChangeHandler}
        ></textarea>
        <button className="new-message__add-button" onClick={addMessage}>
          Add message
        </button>
      </div>
    </div>
  );
};
