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

type AddPostActionType = {
  type: 'ADD-POST';
}
type UpdateNewPostTextType = {
  type: 'UPDATE-NEW-POST-TEXT';
  text: string;
}
type UpdateNewMessageTextType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT';
  text: string;
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | UpdateNewMessageTextType;

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
  dispatch(action) { // action - объект, который описывает действие
    if (action.type === 'ADD-POST') {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    }
  }
};
