import { Dispatch } from 'redux'
import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'

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

export type ToggleIsFetchingAT = {
  type: 'TOGGLE-IS-FETCHING'
  isFetching: boolean
}

export type toggleIsFollowingInProgressAT = ReturnType<typeof toggleIsFollowingInProgress>

export type ActionsType =
  | FollowUserAT
  | UnfollowUserAT
  | SetUsersAT
  | SetCurrentPageAT
  | SetTotalUsersCountAT
  | ToggleIsFetchingAT
  | toggleIsFollowingInProgressAT

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [] as string[],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.id, { followed: true }),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.id, { followed: false }),
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
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'TOGGLE-IS-FOLLOWING-IN-PROGRESS':
      return {
        ...state,
        isFollowingInProgress: action.isFetching
          ? [...state.isFollowingInProgress, action.id]
          : state.isFollowingInProgress.filter((id) => id !== action.id),
      }
    default:
      return state
  }
}

export const followSuccess = (id: string): FollowUserAT => ({
  type: 'FOLLOW',
  id,
})
export const unfollowSuccess = (id: string): UnfollowUserAT => ({
  type: 'UNFOLLOW',
  id,
})
export const setUsers = (users: UserType[]): SetUsersAT => ({
  type: 'SET-USERS',
  users,
})
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({
  type: 'SET-CURRENT-PAGE',
  currentPage,
})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAT => ({
  type: 'SET-TOTAL-USERS-COUNT',
  totalUsersCount,
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => ({
  type: 'TOGGLE-IS-FETCHING',
  isFetching,
})
export const toggleIsFollowingInProgress = (id: string, isFetching: boolean) => ({
  type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS' as const,
  isFetching,
  id,
})

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))

  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

export const followUnfollowFlow = async (
  dispatch: Dispatch,
  id: string,
  apiMethod: Function,
  actionCreator: Function
) => {
  dispatch(toggleIsFollowingInProgress(id, true))
  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(toggleIsFollowingInProgress(id, false))
}

export const follow = (id: string) => async (dispatch: Dispatch) => {
  // т.к. мы выносим в переменную метод, и будет использовать его в отрыве от объекта, то он может потерять контекст. Стоит сделать bind
  followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (id: string) => async (dispatch: Dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
