import { addPost, ProfilePageType, profileReducer, updateNewPostText } from './profile-reducer'

let startState: ProfilePageType

beforeEach(() => {
  startState = {
    posts: [
      { id: 1, message: 'Hi, how are your?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 5 },
      { id: 3, message: 'Cat!', likesCount: 5 },
    ],
    newPostText: 'Cats are awesome!',
  }
})

test('post should be added', () => {
  const endState = profileReducer(startState, addPost())

  expect(endState.posts.length).toBe(4)
  expect(endState.posts[0].message).toBe('Cats are awesome!')
  expect(endState.newPostText).toBe('')
})

test('post should be updated correctly', () => {
  const newPostText = 'dragon'

  const endState = profileReducer(startState, updateNewPostText(newPostText))
  expect(endState.newPostText).toBe(newPostText)
})
