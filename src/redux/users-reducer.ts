import { number } from 'prop-types'

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

export type SetCurrentPageAT = {
  type: 'SET-CURRENT-PAGE'
  currentPage: number
}

export type SetTotalUsersCountAT = {
  type: 'SET-TOTAL-USERS-COUNT'
  totalUsersCount: number
}

export type ActionsType = FollowUserAT | UnfollowUserAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
        users: [...action.users],
      }
    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case 'SET-TOTAL-USERS-COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    default:
      return state
  }
}

export const followUserAC = (id: string): FollowUserAT => ({ type: 'FOLLOW', id })
export const unfollowUserAC = (id: string): UnfollowUserAT => ({ type: 'UNFOLLOW', id })
export const setUsersAC = (users: UserType[]): SetUsersAT => ({ type: 'SET-USERS', users })
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({ type: 'SET-CURRENT-PAGE', currentPage })
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountAT => ({
  type: 'SET-TOTAL-USERS-COUNT',
  totalUsersCount,
})
