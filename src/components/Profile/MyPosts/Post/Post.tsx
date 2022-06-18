import style from './Post.module.css';

type PostPropsType = {
  message: string;
  likesCount: number;
  key: number;
}

export const Post = ({message, likesCount, ...props}: PostPropsType) => {
  return (
    <div className={style.item} key={props.key}>
      <img src="//unsplash.it/50/50" alt="avatar"/>
      <p>{message}</p>
      <span>like </span>{likesCount}
    </div>
  );
};
