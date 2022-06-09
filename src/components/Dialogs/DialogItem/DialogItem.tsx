import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: number;
};

export const DialogItem = (props: DialogItemPropsType) => {
  const path = `/dialogs/${props.id}`;

  return (
    <li className={`${style.dialog}`}>
      <NavLink to={path} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </li>
  );
};
