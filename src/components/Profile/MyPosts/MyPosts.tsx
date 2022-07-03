import style from './MyPosts.module.css';
import { Post } from './Post/Post';
import { ActionsTypes, PostType } from '../../../redux/state';
import React, { ChangeEvent } from 'react';

type MyPostsPropsType = {
  posts: Array<PostType>;
  newPostText: string;
  dispatch: (action: ActionsTypes) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const addPost = () => {
    if (props.newPostText) {
      props.dispatch({ type: 'ADD-POST' });
    }
  };

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', text: evt.currentTarget.value})
  };

  return (
    <div className={style['posts-box']}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea value={props.newPostText} id={'new-post'} onChange={textareaChangeHandler} />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
