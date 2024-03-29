import { connect } from 'react-redux'
import { AppStateType } from 'redux/store'
import { follow, getUsers, setCurrentPage, unfollow, UsersPageType } from 'redux/users-reducer'
import React from 'react'
import { Users } from './Users'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { compose } from 'redux'
import {
  selectCurrentPage,
  selectIsFetching,
  selectIsFollowingInProgress,
  selectPageSize,
  selectTotalUsersCount,
  selectUsers,
} from '../../redux/users-selectors'

export class UsersAPIContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  changePage = (pageNumber: number) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize)
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
    users: selectUsers(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    isFollowingInProgress: selectIsFollowingInProgress(state),
  }
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export const UsersContainer = compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  })
)(UsersAPIContainer)
