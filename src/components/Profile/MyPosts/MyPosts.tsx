import style from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how are your?" likesCount={1}/>
        <Post message="It's my first post" likesCount={0}/>
      </div>
    </div>
  );
};
