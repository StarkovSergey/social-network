import { actionTypes } from 'redux-form';
import exp from 'constants';

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebarPage: SidebarPageType;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};
export type DialogsPageType = {
  messages: Array<MessageType>;
  dialogs: Array<DialogType>;
  newMessageText: string;
};
export type SidebarPageType = {
  friends: Array<DialogType>;
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export type DialogType = {
  id: number;
  name: string;
  avatar: string;
};
export type MessageType = {
  id: number;
  message: string;
};

export type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof updateNewMessageTextActionCreator>
  | ReturnType<typeof addMessageActionCreator>;

export enum ActionType {
  ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
  ADD_MESSAGE = 'ADD-MESSAGE',
}

export type StoreType = {
  _state: StateType;
  state: StateType;
  subscribe: (observer: (state: StateType) => void) => void;
  _callSubscriber: (state: StateType) => void;
  dispatch: (action: ActionsTypes) => void;
};

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are your?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 5 },
        { id: 3, message: 'Cat!', likesCount: 5 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Brendan', avatar: '//unsplash.it/50/50' },
        { id: 2, name: 'Milada', avatar: '//unsplash.it/51/50' },
        { id: 3, name: 'Vera', avatar: '//unsplash.it/50/51' },
        { id: 4, name: 'Vita', avatar: '//unsplash.it/49/50' },
        { id: 5, name: 'Maks', avatar: '//unsplash.it/50/49' },
        { id: 6, name: 'Viktoria', avatar: '//unsplash.it/51/51' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your morris?' },
        { id: 3, message: 'Любо!' },
      ],
      newMessageText: '',
    },
    sidebarPage: {
      friends: [
        { id: 1, name: 'Reyn', avatar: '//unsplash.it/52/50' },
        { id: 4, name: 'Dimon', avatar: '//unsplash.it/48/50' },
        { id: 2, name: 'Formen', avatar: '//unsplash.it/51/52' },
      ],
    },
  },
  _callSubscriber(state: StateType) {
    console.log('State changed');
  },
  get state() {
    return this._state;
  },
  subscribe(observer: (state: StateType) => void) {
    this._callSubscriber = observer;
  },
  dispatch(action: ActionsTypes) {
    // action - объект, который описывает действие
    switch (action.type) {
      case ActionType.ADD_POST:
        const newPost: PostType = {
          id: new Date().getTime(),
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case ActionType.UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
        break;
      case ActionType.UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.text;
        this._callSubscriber(this._state);
        break;
      case ActionType.ADD_MESSAGE:
        const newMessage: MessageType = {
          id: new Date().getTime(),
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        break;
      default:
        throw new Error('unidentified action')
    }
  },
};

// это вспомогательная функция, а не часть бизнес-логику. Её можно не отправлять через пропсы, а просто импортировать
export const addPostActionCreator = () =>
  ({
    type: ActionType.ADD_POST,
  } as const);

export const updateNewPostTextActionCreator = (text: string) =>
  ({
    type: ActionType.UPDATE_NEW_POST_TEXT,
    text,
  } as const);

export const updateNewMessageTextActionCreator = (text: string) =>
  ({
    type: ActionType.UPDATE_NEW_MESSAGE_TEXT,
    text,
  } as const);

export const addMessageActionCreator = () =>
  ({
    type: ActionType.ADD_MESSAGE,
  } as const);
