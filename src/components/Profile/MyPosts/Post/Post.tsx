import style from './Post.module.css';

type PostPropsType = {
  message: string;
  likesCount: number
}

export const Post = ({message, likesCount}: PostPropsType) => {
  return (
    <div className={style.item}>
      <img src="//unsplash.it/50/50" alt="avatar"/>
      <p>{message}!!!</p>
      <span>like </span>{likesCount}
    </div>
  );
};
