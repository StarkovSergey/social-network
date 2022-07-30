import React from 'react';
import {
  addMessageAC,
  DialogsPageType,
  updateNewMessageTextAC,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { Dispatch } from 'redux';

type MapDispatchToPropsReturnType = {
  updateNewMessageText: (text: string) => void;
  addMessage: () => void;
};

export type DialogsPropsType = MapDispatchToPropsReturnType & DialogsPageType;

const mapStateToProps = (state: AppStateType): DialogsPageType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsReturnType => {
  return {
    updateNewMessageText: (text: string) => {
      dispatch(updateNewMessageTextAC(text));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
