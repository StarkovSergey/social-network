import React from 'react'
import style from './User.module.css'
import { NavLink } from 'react-router-dom'
import userImagePlaceholder from '../../../assets/images/user-placeholder.png'
import { UserType } from '../../../redux/users-reducer'

type PropsType = {
  user: UserType
  isFollowingInProgress: string[]
  follow: (id: string) => void
  unfollow: (id: string) => void
}

export const User = ({ user, isFollowingInProgress, follow, unfollow }: PropsType) => {
  return (
    <li>
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
            disabled={isFollowingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id)
            }}>
            unfollow
          </button>
        ) : (
          <button
            className={style['follow-button']}
            disabled={isFollowingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id)
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
          <span>{user?.location?.country}</span>
          <span>{user?.location?.city}</span>
        </div>
      </div>
    </li>
  )
}
