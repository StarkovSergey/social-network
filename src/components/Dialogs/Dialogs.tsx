import style from "./Dialogs.module.css";
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

type DialogItemPropsType = {
  name: string;
  id: number;
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

  const messages = [
    { id: 1, massage: "Hi" },
    { id: 2, massage: "How is your morris?" },
    { id: 3, massage: "Любо!" },
  ];

  const dialogsElements = dialogsData
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)

  const messagesElements = messages
    .map((message) => <Message message={message.massage} />)

  return (
    <div className={style.dialogs}>
      <ul className={style["dialogs-list"]}>
        {dialogsElements}
      </ul>
      <ul className={style["messages-list"]}>
        {messagesElements}
      </ul>
    </div>
  );
};
