import { UsersPropsType } from './UsersContainer'
import style from './Users.module.css'
import axios from 'axios'
import userImagePlaceholder from '../../assets/images/user-placeholder.png'
import React from 'react'

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <ul>
        {this.props.users.map((user) => (
          <li key={user.id}>
            <div>
              <img className={style.img} src={user.photos.small ? user.photos.small : userImagePlaceholder} alt="" />
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id)
                  }}>
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id)
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
    )
  }
}
