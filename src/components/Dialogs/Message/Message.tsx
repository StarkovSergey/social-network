import style from "./../Dialogs.module.css";

type MessagePropsType = {
  message: string;
};

export const Message = (props: MessagePropsType) => {
  return <li className={style.message}>{props.message}</li>;
};
