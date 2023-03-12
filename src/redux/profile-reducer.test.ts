import { addPost, deletePost, ProfilePageType, profileReducer } from './profile-reducer'

let startState: ProfilePageType

beforeEach(() => {
  startState = {
    posts: [
      { id: 1, message: 'Hi, how are your?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 5 },
      { id: 3, message: 'Cat!', likesCount: 5 },
    ],
    profile: null,
    status: '',
  }
})

it('New post should be added', () => {
  const newPostText = 'new post'
  const newState = profileReducer(startState, addPost(newPostText))

  expect(newState.posts.length).toBe(4)
  expect(newState.posts[0].message).toBe(newPostText)
  expect(newState.posts[0].likesCount).toBe(0)
})

it('Post should be deleted', () => {
  const newState = profileReducer(startState, deletePost(3))

  expect(newState.posts.length).toBe(2)
})
