import {
  addMessage,
  DialogsPageType,
  dialogsReducer,
  DialogType,
  MessageType,
} from './dialogs-reducer'

let startState: DialogsPageType;

beforeEach(() => {
  startState = {
    dialogs: [
      {id: 1, name: 'Brendan', avatar: '//unsplash.it/50/50'},
      {id: 2, name: 'Milada', avatar: '//unsplash.it/51/50'},
      {id: 3, name: 'Vera', avatar: '//unsplash.it/50/51'},
      {id: 4, name: 'Vita', avatar: '//unsplash.it/49/50'},
      {id: 5, name: 'Maks', avatar: '//unsplash.it/50/49'},
      {id: 6, name: 'Viktoria', avatar: '//unsplash.it/51/51'},
    ] as Array<DialogType>,
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your morris?'},
      {id: 3, message: 'Любо!'},
    ] as Array<MessageType>,
  }
})


test('New message should be added', () => {
  const endState: DialogsPageType = dialogsReducer(startState, addMessage('Hello world'))

  expect(endState.messages.length).toBe(4)
  expect(endState.messages[0].message).toBe('Hello world!')
})
