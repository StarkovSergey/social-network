import { Users } from './Users'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'
import {
  followUserAC,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowUserAC,
  UsersPageType,
  UserType,
} from '../../redux/users-reducer'

type MapDispatchToPropsReturnType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapDispatchToPropsReturnType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsReturnType => ({
  follow: (id: string) => {
    dispatch(followUserAC(id))
  },
  unfollow: (id: string) => {
    dispatch(unfollowUserAC(id))
  },
  setUsers: (users: UserType[]) => {
    dispatch(setUsersAC(users))
  },
  setCurrentPage: (currentPage: number) => {
    dispatch(setCurrentPageAC(currentPage))
  },
  setTotalUsersCount: (totalUsersCount: number) => {
    dispatch(setTotalUsersCountAC(totalUsersCount))
  }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
