import { ActionsTypes, ActionType } from './store'

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: 'Hi, how are your?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 5 },
    { id: 3, message: 'Cat!', likesCount: 5 },
  ],
  newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ActionType.ADD_POST:
      const newPost: PostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0,
      }
      if (state.newPostText) {
        state.newPostText = ''
        return {
          ...state,
          posts: [newPost, ...state.posts],
          newPostText: '',
        }
      }
      break
    case ActionType.UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.text }
    default:
      return state
  }

  return state
}

// это вспомогательная функция, а не часть бизнес-логику. Её можно не отправлять через пропсы, а просто импортировать
export const addPostActionCreator = () =>
  ({
    type: ActionType.ADD_POST,
  } as const)

export const updateNewPostTextActionCreator = (text: string) =>
  ({
    type: ActionType.UPDATE_NEW_POST_TEXT,
    text,
  } as const)
