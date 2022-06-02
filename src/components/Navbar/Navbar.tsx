import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={`${style.item} ${style.active}`}>
          <a href="/profile">Profile</a>
        </li>
        <li className={style.item}>
          <a href="/dialogs">Messages</a>
        </li>
        <li className={style.item}>
          <a href="/news">News</a>
        </li>
        <li className={style.item}>
          <a href="/music">Music</a>
        </li>
        <li className={style.item}>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
