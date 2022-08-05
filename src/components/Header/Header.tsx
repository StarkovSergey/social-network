import styles from './Header.module.css'
import logo from '../../assets/images/Lord-Of-The-Rings-PNG-Photos.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="logo"
      />
    </header>
  );
};
