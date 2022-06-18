import style from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../redux/state';
import React, { LegacyRef } from 'react';

type MyPostsPropsType = {
  posts: Array<PostType>;
  addPost: (message: string) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const newPostElement = React.createRef<HTMLTextAreaElement>(); // создать ссылку

  const addPost = () => {
    if (newPostElement.current) {
      const text: string = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
    }
  };

  return (
    <div className={style['posts-box']}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} id={'new-post'}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
