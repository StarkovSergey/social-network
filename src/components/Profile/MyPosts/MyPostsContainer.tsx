import { addPost, ProfilePageType } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store'
import { MyPosts } from './MyPosts'

type mapDispatchToPropsType = {
  addPost: (newPost: string) => void;
}

export type MyPostsPropsType = mapDispatchToPropsType & ProfilePageType;

const mapStateToProps = (state: AppStateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

export const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);
