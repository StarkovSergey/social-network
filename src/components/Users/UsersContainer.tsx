import { Users } from './Users'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'
import { FollowUserAC, SetUsersAC, UnfollowUserAC, UsersPageType, UserType } from '../../redux/users-reducer'


type MapDispatchToPropsReturnType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapDispatchToPropsReturnType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsReturnType => ({
  follow: (id: string) => {
    dispatch(FollowUserAC(id))
  },
  unfollow: (id: string) => {
    dispatch(UnfollowUserAC(id))
  },
  setUsers: (users: UserType[]) => {
    dispatch(SetUsersAC(users))
  }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
