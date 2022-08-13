import { Dispatch } from 'redux'
import { usersAPI } from '../api/api'

export type addPostAT = ReturnType<typeof addPost>
export type updateNewPostTextAT = ReturnType<typeof updateNewPostText>

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type ProfileType = null | {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
  aboutMe: string
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
  profile: ProfileType
}

export type setUserProfileAT = ReturnType<typeof setUserProfile>

type ActionsType = addPostAT | updateNewPostTextAT | setUserProfileAT


const initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hi, how are your?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
    {id: 3, message: 'Cat!', likesCount: 5},
  ],
  newPostText: '',
  profile: null
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
      return {...state, newPostText: action.text}
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }

  return state
}

export const addPost = () => ({
  type: 'ADD-POST' as const,
})

export const updateNewPostText = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT' as const,
    text,
})

const setUserProfile = (profile: ProfileType) => ({
  type: 'SET-USER-PROFILE' as const,
  profile,
})

export const getUserProfile = (id: string) => (dispatch: Dispatch) => {
  usersAPI.getProfile(id)
    .then((data) => {
      dispatch(setUserProfile(data))
    })
}
