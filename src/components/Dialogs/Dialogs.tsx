import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: number;
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

  const dialogsData = [
    { id: 1, name: "Brendan" },
    { id: 2, name: "Milada" },
    { id: 3, name: "Vera" },
    { id: 4, name: "Vita" },
    { id: 5, name: "Maks" },
    { id: 6, name: "Viktoria" },
  ];

  const messagesData = [
    { id: 1, massage: "Hi" },
    { id: 2, massage: "How is your morris?" },
    { id: 3, massage: "Любо!" },
  ];

  return (
    <div className={style.dialogs}>
      <ul className={style["dialogs-list"]}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </ul>
      <ul className={style["messages-list"]}>
        <Message message={messagesData[0].massage} />
        <Message message={messagesData[1].massage} />
        <Message message={messagesData[2].massage} />
      </ul>
    </div>
  );
};
