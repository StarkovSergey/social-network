import style from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={`${style.item} ${style.active}`}>
          <a href="src/components/Navbar/Navbar#c">Profile</a>
        </li>
        <li className={style.item}>
          <a href="src/components/Navbar/Navbar#c">Messages</a>
        </li>
        <li className={style.item}>
          <a href="src/components/Navbar/Navbar#c">News</a>
        </li>
        <li className={style.item}>
          <a href="src/components/Navbar/Navbar#c">Music</a>
        </li>
        <li className={style.item}>
          <a href="src/components/Navbar/Navbar#c">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
