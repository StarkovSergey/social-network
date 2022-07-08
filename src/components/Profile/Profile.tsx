import style from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ActionsTypes, ProfilePageType } from '../../redux/store';

type ProfilePropsType = {
  state: ProfilePageType;
  newPostText: string;
  dispatch: (action: ActionsTypes) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
    </div>
  );
};
