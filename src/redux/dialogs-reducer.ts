// export type DialogsPageType = {
//   messages: Array<MessageType>;
//   dialogs: Array<DialogType>;
//   newMessageText: string;
// };

export type addMessageAT = ReturnType<typeof addMessage>

export type ActionsTypes = addMessageAT

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
    {id: 1, name: 'Brendan', avatar: 'https://www.clipartmax.com/png/middle/123-1237090_these-are-some-cats-avatar-i-drew-during-my-free-time-animated.png'},
    {id: 2, name: 'Milada', avatar: 'https://www.clipartmax.com/png/middle/123-1237090_these-are-some-cats-avatar-i-drew-during-my-free-time-animated.png'},
    {id: 3, name: 'Vera', avatar: 'https://www.clipartmax.com/png/middle/123-1237090_these-are-some-cats-avatar-i-drew-during-my-free-time-animated.png'},
    {id: 4, name: 'Vita', avatar: 'https://www.clipartmax.com/png/middle/123-1237090_these-are-some-cats-avatar-i-drew-during-my-free-time-animated.png'},
    {id: 5, name: 'Maks', avatar: 'https://www.clipartmax.com/png/middle/123-1237090_these-are-some-cats-avatar-i-drew-during-my-free-time-animated.png'},
    {id: 6, name: 'Viktoria', avatar: 'https://www.clipartmax.com/png/middle/123-1237090_these-are-some-cats-avatar-i-drew-during-my-free-time-animated.png'},
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your morris?'},
    {id: 3, message: 'Любо!'},
  ] as Array<MessageType>,
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      const newMessage: MessageType = {
        id: new Date().getTime(),
        message: action.newMessage,
      }
      return {
        ...state,
        messages: [newMessage, ...state.messages],
      }
    default:
      return state
  }
}

export const addMessage = (newMessage: string) => ({
  type: 'ADD-MESSAGE' as const,
  newMessage
})
