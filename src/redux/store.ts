import { addPostActionCreator, profileReducer, updateNewPostTextActionCreator } from './profile-reducer';
import { addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator } from './dialogs-reducer';


// export type DialogType = {
//   id: number;
//   name: string;
//   avatar: string;
// };

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


// export const store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: 'Hi, how are your?', likesCount: 12 },
//         { id: 2, message: "It's my first post", likesCount: 5 },
//         { id: 3, message: 'Cat!', likesCount: 5 },
//       ],
//       newPostText: '',
//     },
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: 'Brendan', avatar: '//unsplash.it/50/50' },
//         { id: 2, name: 'Milada', avatar: '//unsplash.it/51/50' },
//         { id: 3, name: 'Vera', avatar: '//unsplash.it/50/51' },
//         { id: 4, name: 'Vita', avatar: '//unsplash.it/49/50' },
//         { id: 5, name: 'Maks', avatar: '//unsplash.it/50/49' },
//         { id: 6, name: 'Viktoria', avatar: '//unsplash.it/51/51' },
//       ],
//       messages: [
//         { id: 1, message: 'Hi' },
//         { id: 2, message: 'How is your morris?' },
//         { id: 3, message: 'Любо!' },
//       ],
//       newMessageText: '',
//     },
//     sidebarPage: {
//       friends: [
//         { id: 1, name: 'Reyn', avatar: '//unsplash.it/52/50' },
//         { id: 4, name: 'Dimon', avatar: '//unsplash.it/48/50' },
//         { id: 2, name: 'Formen', avatar: '//unsplash.it/51/52' },
//       ],
//     },
//   },
//   _callSubscriber(state: StateType) {
//     console.log('State changed');
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer: (state: StateType) => void) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action: ActionsTypes) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
//
//     this._callSubscriber(this._state);
//   },
// };
