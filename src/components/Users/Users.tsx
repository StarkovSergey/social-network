import { ReactComponent } from '*.svg'
import style from './Users.module.css'
import userImagePlaceholder from '../../assets/images/user-placeholder.png'
import React from 'react'
import { UserType } from '../../redux/users-reducer'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: UserType[]
  changePage: (pageNumber: number) => void
  follow: (id: string) => void
  unfollow: (id: string) => void
}

export function Users(props: PropsType) {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  return (
    <div>
      <div className={style.pagination}>
        <button
          className={`${style['pagination__button']}`}
          onClick={() => {
            props.changePage(1)
          }}>
          &lt;&lt;
        </button>
        <button
          className={`${style['pagination__button']}`}
          onClick={() => {
            props.changePage(props.currentPage - 1 || 1)
          }}>
          &lt;
        </button>
        <div className={`${style['pagination__button']} ${style['pagination__button--active']}`}>
          {props.currentPage}
        </div>
        <button
          className={`${style['pagination__button']}`}
          onClick={() => {
            props.changePage(props.currentPage + 1)
          }}>
          &gt;
        </button>
        <button
          className={`${style['pagination__button']}`}
          onClick={() => {
            props.changePage(pagesCount)
          }}>
          &gt;&gt;
        </button>
      </div>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            <div>
              <img
                className={style.img}
                src={user.photos.small ? user.photos.small : userImagePlaceholder}
                alt=""
                width="50"
                height="50"
              />
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id)
                  }}>
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id)
                  }}>
                  unfollow
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
    </div>
  )
}
