import { UsersPropsType } from './UsersContainer'
import style from './Users.module.css'
import { v1 } from 'uuid'

export const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: v1(),
        photoUrl: '//unsplash.it/50/50',
        followed: false,
        fullName: 'Brendan M',
        status: 'I am a boss',
        location: { city: 'SPb', country: 'Russia' },
      },
      {
        id: v1(),
        photoUrl: '//unsplash.it/50/51',
        followed: true,
        fullName: 'Milada M',
        status: 'I am a boss too',
        location: { city: 'Hobbiton', country: 'Shire' },
      },
      {
        id: v1(),
        photoUrl: '//unsplash.it/50/49',
        followed: false,
        fullName: 'Vera M',
        status: 'I am a boss too',
        location: { city: 'Minas-Tirith', country: 'Gondor' },
      },
    ])
  }

  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <div>
            <img className={style.img} src={user.photoUrl} alt="" />
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
              <b>{user.fullName}</b>
              <p>{user.status}</p>
            </div>
            <div>
              <span>{user.location.country}</span>
              <span>{user.location.city}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
