
export type addPostAT = ReturnType<typeof addPostAC>
export type updateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>

type ActionsType = addPostAT | updateNewPostTextAT

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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case 'ADD-POST':
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
    case 'UPDATE-NEW-POST-TEXT':
      return { ...state, newPostText: action.text }
    default:
      return state
  }

  return state
}

// это вспомогательная функция, а не часть бизнес-логику. Её можно не отправлять через пропсы, а просто импортировать
export const addPostAC = () => ({
    type: 'ADD-POST' as const,
  })

export const updateNewPostTextAC = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT' as const,
    text,
  } as const)
