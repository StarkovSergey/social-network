import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import {
  follow,
  getUsers,
  setCurrentPage, unfollow,
  UsersPageType,
} from '../../redux/users-reducer'
import React from 'react'
import { Users } from './Users'

export class UsersAPIContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  changePage = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
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
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
  }
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
})(UsersAPIContainer)
