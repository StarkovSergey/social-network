import { ActionsTypes, PostType } from '../../../redux/store';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';

type MyPostsPropsType = {
  store: any;
};

export const MyPostsContainer = (props: MyPostsPropsType) => {
  const state = props.store.getState();

  const addPost = () => {
    if (state.profilePage.newPostText) {
      props.store.dispatch(addPostActionCreator());
    }
  };

  const updateNewPostText = (text: string) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
};
