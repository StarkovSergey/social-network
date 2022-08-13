import style from './Users.module.css'
import userImagePlaceholder from '../../assets/images/user-placeholder.png'
import React from 'react'
import { follow, unfollow, UserType } from '../../redux/users-reducer'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import { Loader } from '../common/Loader/Loader'

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

export function Users(props: PropsType) {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  return (
    <div>
      <div className={style.pagination}>
        <button
          disabled={props.currentPage === 1}
          className={`${style['pagination__button']}`}
          onClick={() => props.changePage(1)}>
          &lt;&lt;
        </button>
        <button
          disabled={props.currentPage === 1}
          className={`${style['pagination__button']}`}
          onClick={() => props.changePage(props.currentPage - 1 || 1)}>
          &lt;
        </button>
        <div className={`${style['pagination__button']} ${style['pagination__button--active']}`}>
          {props.currentPage}
        </div>
        <button
          disabled={props.currentPage === pagesCount}
          className={`${style['pagination__button']}`}
          onClick={() => props.changePage(props.currentPage + 1)}>
          &gt;
        </button>
        <button
          disabled={props.currentPage === pagesCount}
          className={`${style['pagination__button']}`}
          onClick={() => props.changePage(pagesCount)}>
          &gt;&gt;
        </button>
      </div>
      {props.isFetching ? (
        <Loader />
      ) : (
        <ul>
          {props.users.map((user, index) => (
            <li key={index}>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={style.img}
                    src={user.photos.small ? user.photos.small : userImagePlaceholder}
                    alt=""
                    width="50"
                    height="50"
                  />
                </NavLink>
                {user.followed ? (
                  <button
                    className={style['follow-button']}
                    disabled={props.isFollowingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      props.unfollow(user.id)
                    }}>
                    unfollow
                  </button>
                ) : (
                  <button
                    className={style['follow-button']}
                    disabled={props.isFollowingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      props.follow(user.id)
                    }}>
                    follow
                  </button>
                )}
              </div>
              <div>
                <div>
                  <b>{user.name}</b>
                  <p>{user.status}</p>
                </div>
                <div>
                  <span>{'user.location.country'}</span>
                  <span>{'user.location.city'}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
