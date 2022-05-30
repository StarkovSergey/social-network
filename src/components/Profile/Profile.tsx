import style from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
  return (
    <div>
      <div>
        <img src="//unsplash.it/1000/400" alt=""></img>
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};
