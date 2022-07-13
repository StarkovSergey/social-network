import React from 'react';
import { addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';
import { AppStateType, store } from '../../../redux/redux-store'
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
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost() {
      store.dispatch(addPostActionCreator());
    },
  };
};

export const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
