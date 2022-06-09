import style from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export const Profile = () => {
  const posts = [
    { id: 1, message: "Hi, how are your?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 5 },
    { id: 3, message: "Cat!", likesCount: 5 },
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};
