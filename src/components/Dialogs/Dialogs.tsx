import style from "./Dialogs.module.css";
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogType, MessagesPageType, MessageType } from '../../redux/state';

type DialogsPropsType = {
  state: MessagesPageType;
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.state.dialogs
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id} />)

  const messagesElements = props.state.messages
    .map((message) => <Message message={message.message} key={message.id}/>)

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
