import exp from 'constants';

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: MessagesPageType;
  sidebarPage: SidebarPageType;
};

export type ProfilePageType = {
  posts: Array<PostType>;
};

export type MessagesPageType = {
  messages: Array<MessageType>;
  dialogs: Array<DialogType>;
};

export type SidebarPageType = {
  friends: Array<DialogType>;
}

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


export const state: StateType = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are your?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 5 },
      { id: 3, message: 'Cat!', likesCount: 5 },
    ],
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
  },
  sidebarPage: {
    friends: [
      { id: 1, name: 'Reyn', avatar: '//unsplash.it/52/50' },
      { id: 4, name: 'Dimon', avatar: '//unsplash.it/48/50' },
      { id: 2, name: 'Formen', avatar: '//unsplash.it/51/52' },
    ]
  }
};
