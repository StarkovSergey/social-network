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

export type ActionsType = FollowUserAT | UnfollowUserAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state
  }
}

export const follow = (id: string): FollowUserAT => ({ type: 'FOLLOW', id })
export const unfollow = (id: string): UnfollowUserAT => ({ type: 'UNFOLLOW', id })
export const setUsers = (users: UserType[]): SetUsersAT => ({ type: 'SET-USERS', users })
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({ type: 'SET-CURRENT-PAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAT => ({
  type: 'SET-TOTAL-USERS-COUNT',
  totalUsersCount,
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => ({
  type: 'TOGGLE-IS-FETCHING',
  isFetching
})
