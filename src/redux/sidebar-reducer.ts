import { ActionsTypes, SidebarPageType } from './store';

const initialState = {
  friends: [
    { id: 1, name: 'Reyn', avatar: '//unsplash.it/52/50' },
    { id: 4, name: 'Dimon', avatar: '//unsplash.it/48/50' },
    { id: 2, name: 'Formen', avatar: '//unsplash.it/51/52' },
  ],
};

export const sidebarReducer = (state: SidebarPageType = initialState, action: ActionsTypes) => {
  return state;
};
