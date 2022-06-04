import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: string;
};

type MessagePropsType = {
  message: string;
};

const DialogItem = (props: DialogItemPropsType) => {
  const path = `/dialogs/${props.id}`;

  return (
    <li className={`${style.dialog}`}>
      <NavLink to={path} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

const Message = (props: MessagePropsType) => {
  return <li className={style.message}>{props.message}</li>;
};

export const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <ul className={style["dialogs-list"]}>
        <DialogItem name="Brendan" id="1" />
        <DialogItem name="Milada" id="2" />
        <DialogItem name="Vera" id="3" />
        <DialogItem name="Vita" id="4" />
        <DialogItem name="Maks" id="5" />
        <DialogItem name="Viktoria" id="6" />
      </ul>
      <ul className={style["messages-list"]}>
        <Message message="Hi" />
        <Message message="How is your morris?" />
        <Message message="Любо!" />
      </ul>
    </div>
  );
};
