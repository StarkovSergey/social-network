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
    { id: 1, name: 'Dimon', avatar: 'https://external-preview.redd.it/Jn2--RUG7DkGaFF4FR9t2cGETCo8IEqIpC9HgzRXz-E.jpg?auto=webp&s=cb0aa069c279ec77af426b21209e777e4a1ef15b' },
    { id: 4, name: 'Ellirian', avatar: 'https://cdn.meiker.io/assets/103749/2020/10/icon_202010141731445f8736000fe65.png' },
    { id: 2, name: 'Eldin', avatar: 'https://cdn.meiker.io/assets/176293/2022/03/icon_202203071012526225daa4288a9.png' },
  ] as DialogType[],
};

export const sidebarReducer = (state: SidebarPageType = initialState, action: ActionsType): SidebarPageType => {
  return state;
};
