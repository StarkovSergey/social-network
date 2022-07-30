import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { Dispatch } from 'redux'
import {
  followUserAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC, toggleIsFetchingAC,
  unfollowUserAC,
  UsersPageType,
  UserType,
} from '../../redux/users-reducer'
import React from 'react'
import axios from 'axios'
import { Users } from './Users'
import { Loader } from '../common/Loader/Loader'

export class UsersAPIContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  changePage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching && <Loader/>}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          changePage={this.changePage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

type MapDispatchToPropsReturnType = ReturnType<typeof mapDispatchToProps>

export type UsersPropsType = MapDispatchToPropsReturnType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
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
  },
  toggleIsFetching: (isFetching: boolean) => {
    dispatch(toggleIsFetchingAC(isFetching))
  }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
