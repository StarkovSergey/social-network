import style from "./Dialogs.module.css";
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogType, MessageType } from '../../index';

type DialogsPropsType = {
  messages: Array<MessageType>;
  dialogs: Array<DialogType>
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogs
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)

  const messagesElements = props.messages
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
