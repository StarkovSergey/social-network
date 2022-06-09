import style from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  const posts = [
    { id: 1, message: "Hi, how are your?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 5 },
    { id: 3, message: "Cat!", likesCount: 5 },
  ];

  const postsElements = posts
    .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)


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
        {postsElements}
      </div>
    </div>
  );
};
