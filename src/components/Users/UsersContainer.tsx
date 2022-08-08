import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowingInProgress,
  unfollow,
  UsersPageType,
  UserType,
} from '../../redux/users-reducer'
import React from 'react'
import { Users } from './Users'
import { usersAPI } from '../../api/api'

export class UsersAPIContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }

  changePage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
  }

  render() {
    return (
      <>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          changePage={this.changePage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
          isFollowingInProgress={this.props.isFollowingInProgress}
          isFetching={this.props.isFetching}
        />
      </>
    )
  }
}

export type UsersPropsType = MapDispatchToPropsType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress
  }
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingInProgress: (id: string, isFetching: boolean) => void
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
})(UsersAPIContainer)
