import styles from './Header.module.css'
import logo from '../../assets/images/Lord-Of-The-Rings-PNG-Photos.png'
import { NavLink } from 'react-router-dom'
import { HeaderPropsType } from './HeaderContainer'

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles['login-block']}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={props.logout}>logout</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}
