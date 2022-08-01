import {
  addMessage,
  DialogsPageType,
  updateNewMessageText,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';

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


export const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  addMessage
})(Dialogs);
