import style from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
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
        <Post message="Hi, how are your?" likesCount={1}/>
        <Post message="It's my first post" likesCount={0}/>
      </div>
    </div>
  );
};
