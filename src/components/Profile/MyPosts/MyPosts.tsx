import style from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  const postsData = [
    { id: 1, message: "Hi, how are your?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 5 },
  ];

  return (
    <div className={style['posts-box']}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
      </div>
    </div>
  );
};
