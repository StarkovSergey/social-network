import { ActionsTypes, ActionType } from './store';

// export type DialogsPageType = {
//   messages: Array<MessageType>;
//   dialogs: Array<DialogType>;
//   newMessageText: string;
// };

export type DialogType = {
  id: number;
  name: string;
  avatar: string;
};
export type MessageType = {
  id: number;
  message: string;
};

export type DialogsPageType = typeof initialState

const initialState = {
  dialogs: [
    { id: 1, name: 'Brendan', avatar: '//unsplash.it/50/50' },
    { id: 2, name: 'Milada', avatar: '//unsplash.it/51/50' },
    { id: 3, name: 'Vera', avatar: '//unsplash.it/50/51' },
    { id: 4, name: 'Vita', avatar: '//unsplash.it/49/50' },
    { id: 5, name: 'Maks', avatar: '//unsplash.it/50/49' },
    { id: 6, name: 'Viktoria', avatar: '//unsplash.it/51/51' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your morris?' },
    { id: 3, message: 'Любо!' },
  ] as Array<MessageType>,
  newMessageText: '',
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
  switch (action.type) {
    case ActionType.UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }
    case ActionType.ADD_MESSAGE:
      const newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [newMessage, ...state.messages],
        newMessageText: '',
      }
    default:
      return state;
  }

  return state;
};

export const updateNewMessageTextActionCreator = (text: string) =>
  ({
    type: ActionType.UPDATE_NEW_MESSAGE_TEXT,
    text,
  } as const);

export const addMessageActionCreator = () =>
  ({
    type: ActionType.ADD_MESSAGE,
  } as const);
