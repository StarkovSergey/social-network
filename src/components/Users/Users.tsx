import { UsersPropsType } from './UsersContainer'
import style from './Users.module.css'
import axios from 'axios'
import userImagePlaceholder from '../../assets/images/user-placeholder.png'

export const Users = (props: UsersPropsType) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => props.setUsers(response.data.items))
    }
  }

  return (
    <ul>
      <button onClick={getUsers}>get users</button>
      {props.users.map((user) => (
        <li key={user.id}>
          <div>
            <img className={style.img} src={user.photos.small ? user.photos.small : userImagePlaceholder} alt="" />
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
  )
}
