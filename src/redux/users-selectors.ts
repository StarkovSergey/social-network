import { AppStateType } from './store'

export const selectUsers = (state: AppStateType) => {
  return state.usersPage.users
}

export const selectTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}

export const selectPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const selectCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const selectIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const selectIsFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.isFollowingInProgress
}
