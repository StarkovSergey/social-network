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
import React from 'react'
import axios from 'axios'
import { Users } from './Users'

export class UsersAPIContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  changePage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        changePage={this.changePage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
