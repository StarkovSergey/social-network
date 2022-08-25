import { addPost, ProfilePageType, updateNewPostText } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store'
import { MyPosts } from './MyPosts'

type mapDispatchToPropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void;
}

export type MyPostsPropsType = mapDispatchToPropsType & ProfilePageType;

const mapStateToProps = (state: AppStateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

export const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
})(MyPosts);
