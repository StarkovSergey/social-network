import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { SidebarPageType } from '../../redux/store';
import { Friends } from './Friends/Friends';
import { FriendsContainer } from './Friends/FriendsContainer'

// TODO: вернуть друзей!!!

// type NavbarPropsType = {
//   state: SidebarPageType;
// }
// export const Navbar = (props: NavbarPropsType) => {
export const Navbar = () => {

  return (
    <nav className={style.nav}>
      <ul>
        <li className={`${style.item} ${style.active}`}>
          <NavLink to="/profile" activeClassName={style.active}>
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.active}>
            Messages
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/news" activeClassName={style.active}>
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/music" activeClassName={style.active}>
            Music
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>
            Settings
          </NavLink>
        </li>
      </ul>

      <FriendsContainer />
    </nav>
  );
};
