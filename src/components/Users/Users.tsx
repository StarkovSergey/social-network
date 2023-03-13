import style from './Users.module.css'
import React from 'react'
import { UserType } from '../../redux/users-reducer'
import { Loader } from '../common/Loader/Loader'
import { Pagination } from '../common/Pagination/Pagination'
import { User } from './User/User'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isFetching: boolean
  users: UserType[]
  changePage: (pageNumber: number) => void
  follow: (id: string) => void
  unfollow: (id: string) => void
  isFollowingInProgress: string[]
}

export function Users({
  currentPage,
  changePage,
  isFetching,
  isFollowingInProgress,
  follow,
  unfollow,
  users,
  totalUsersCount,
  pageSize,
}: PropsType) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)

  return (
    <div>
      <Pagination currentPage={currentPage} pagesCount={pagesCount} changePage={changePage} />
      {isFetching ? (
        <Loader />
      ) : (
        <ul className={style.list}>
          {users.map((user, index) => (
            <User
              key={index}
              user={user}
              isFollowingInProgress={isFollowingInProgress}
              follow={follow}
              unfollow={unfollow}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
