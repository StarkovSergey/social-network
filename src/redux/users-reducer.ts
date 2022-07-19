import { v1 } from 'uuid'

export type UsersPageType = typeof initialState

export type UserType = {
  id: string
  photos: {
    small: null | string
    large: null | string
  }
  followed: boolean
  name: string
  status: string
  location: {
    city: string
    country: string
  }
}

export type FollowUserAT = {
  type: 'FOLLOW'
  id: string
}
export type UnfollowUserAT = {
  type: 'UNFOLLOW'
  id: string
}

export type SetUsersAT = {
  type: 'SET-USERS'
  users: UserType[]
}

export type ActionsType = FollowUserAT | UnfollowUserAT | SetUsersAT

const initialState = {
  users: [
    // {
    //   id: v1(),
    //   photoUrl: '//unsplash.it/50/50',
    //   followed: false,
    //   fullName: 'Brendan M',
    //   status: 'I am a boss',
    //   location: { city: 'SPb', country: 'Russia' },
    // },
    // {
    //   id: v1(),
    //   photoUrl: '//unsplash.it/50/51',
    //   followed: true,
    //   fullName: 'Milada M',
    //   status: 'I am a boss too',
    //   location: { city: 'Hobbiton', country: 'Shire' },
    // },
    // {
    //   id: v1(),
    //   photoUrl: '//unsplash.it/50/49',
    //   followed: false,
    //   fullName: 'Vera M',
    //   status: 'I am a boss too',
    //   location: { city: 'Minas-Tirith', country: 'Gondor' },
    // },
  ] as UserType[],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, followed: true } : user)),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, followed: false } : user)),
      }
    case 'SET-USERS':
      return {
        ...state,
        users: [...state.users, ...action.users ]
      }
    default:
      return state
  }
}

export const FollowUserAC = (id: string): FollowUserAT => ({ type: 'FOLLOW', id })
export const UnfollowUserAC = (id: string): UnfollowUserAT => ({ type: 'UNFOLLOW', id })
export const SetUsersAC = (users: UserType[]): SetUsersAT => ({type: 'SET-USERS', users})
