import style from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ActionsTypes, ProfilePageType } from '../../redux/store';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
  store: any;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  );
};
