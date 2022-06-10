import style from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../redux/state';

type MyPostsPropsType = {
  posts: Array<PostType>;
}

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts
    .map((post) => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

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
