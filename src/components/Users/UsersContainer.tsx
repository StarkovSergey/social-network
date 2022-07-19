import { Users } from './Users'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'
import { followUserAC, setUsersAC, unfollowUserAC, UsersPageType, UserType } from '../../redux/users-reducer'


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
    dispatch(followUserAC(id))
  },
  unfollow: (id: string) => {
    dispatch(unfollowUserAC(id))
  },
  setUsers: (users: UserType[]) => {
    dispatch(setUsersAC(users))
  }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
