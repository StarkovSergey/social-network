export type SidebarPageType = typeof initialState

export type DialogType = {
  id: number;
  name: string;
  avatar: string;
};

type ActionsType = {

}

const initialState = {
  friends: [
    { id: 1, name: 'Reyn', avatar: '//unsplash.it/52/50' },
    { id: 4, name: 'Dimon', avatar: '//unsplash.it/48/50' },
    { id: 2, name: 'Formen', avatar: '//unsplash.it/51/52' },
  ] as DialogType[],
};

export const sidebarReducer = (state: SidebarPageType = initialState, action: ActionsType): SidebarPageType => {
  return state;
};
