import { addPost, ProfilePageType, profileReducer } from './profile-reducer'

let startState: ProfilePageType

beforeEach(() => {
  startState = {
    posts: [
      { id: 1, message: 'Hi, how are your?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 5 },
      { id: 3, message: 'Cat!', likesCount: 5 },
    ],
    profile: null,
    status: ''
  }
})
