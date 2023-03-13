import { Dispatch } from 'redux'
import { profileAPI } from '../api/api'

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
  profile: ProfileType
  status: string
}

type ActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof deletePost>

const initialState: ProfilePageType = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are your?',
      likesCount: 12,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 5,
    },
    {
      id: 3,
      message: 'Cat!',
      likesCount: 5,
    },
  ],
  profile: null,
  status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPost,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
      }
      break
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile,
      }
    case 'SET-STATUS':
      return {
        ...state,
        status: action.status,
      }
    case 'DELETE-POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      }
    default:
      return state
  }
}

export const addPost = (newPost: string) => ({
  type: 'ADD-POST' as const,
  newPost,
})

const setUserProfile = (profile: ProfileType) => ({
  type: 'SET-USER-PROFILE' as const,
  profile,
})

const setStatus = (status: string) => ({
  type: 'SET-STATUS' as const,
  status,
})

export const deletePost = (id: number) => ({
  type: 'DELETE-POST' as const,
  id,
})

export const getUserProfile = (id: string) => async (dispatch: Dispatch) => {
  const data = await profileAPI.getProfile(id)
  dispatch(setUserProfile(data))
}

export const getStatus = (id: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.getStatus(id)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
