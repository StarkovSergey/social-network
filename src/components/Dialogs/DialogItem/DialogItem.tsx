import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: number;
  avatar: string;
};

export const DialogItem = (props: DialogItemPropsType) => {
  const path = `/dialogs/${props.id}`;

  return (
    <li className={`${style.dialog}`}>
      <NavLink to={path} activeClassName={style.active} className={style['dialog-link']}>
        <div className="avatar">
          <img src={props.avatar}/>
        </div>
        <span>{props.name}</span>
      </NavLink>
    </li>
  );
};
