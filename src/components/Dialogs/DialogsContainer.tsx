import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';

type DialogsPropsType = {
  store: any;
};

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
  const state = props.store.getState().dialogsPage;

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const updateNewMessageText = (text: string) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return <Dialogs
    dialogs={state.dialogs}
    messages={state.messages}
    newMessageText={state.newMessageText}
    addMessage={addMessage}
    updateNewMessageText={updateNewMessageText} />
};
