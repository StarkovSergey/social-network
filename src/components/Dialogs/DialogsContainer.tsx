import React from 'react';
import {
  addMessageActionCreator,
  DialogsPageType,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';

type MapDispatchToPropsReturnType = {
  updateNewMessageText: (text: string) => void;
  addMessage: () => void;
};

const mapStateToProps = (state: AppStateType): DialogsPageType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export type DialogsPropsType = MapDispatchToPropsReturnType & DialogsPageType;

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsReturnType => {
  return {
    updateNewMessageText: (text: string) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
