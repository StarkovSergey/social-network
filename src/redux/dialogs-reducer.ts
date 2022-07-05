import { ActionsTypes, ActionType, DialogsPageType, MessageType } from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
  switch (action.type) {
    case ActionType.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      break;
    case ActionType.ADD_MESSAGE:
      const newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      break;
    default:
      return state;
  }

  return state;
};


// это вспомогательная функция, а не часть бизнес-логику. Её можно не отправлять через пропсы, а просто импортировать

export const updateNewMessageTextActionCreator = (text: string) =>
  ({
    type: ActionType.UPDATE_NEW_MESSAGE_TEXT,
    text,
  } as const);

export const addMessageActionCreator = () =>
  ({
    type: ActionType.ADD_MESSAGE,
  } as const);
