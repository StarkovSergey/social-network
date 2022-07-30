import React from 'react';
import { addPostAC, ProfilePageType, updateNewPostTextAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';
import { AppStateType, store } from '../../../redux/store'
import { MyPosts } from './MyPosts'
import { Dispatch } from 'redux'

type mapDispatchToPropsReturnType = {
  updateNewPostText: (text: string) => void
  addPost: () => void;
}

export type MyPostsPropsType = mapDispatchToPropsReturnType & ProfilePageType;


const mapStateToProps = (state: AppStateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturnType => {
  return {
    updateNewPostText(text: string) {
      dispatch(updateNewPostTextAC(text));
    },
    addPost() {
      store.dispatch(addPostAC());
    },
  };
};

export const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
