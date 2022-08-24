import React from 'react';
import style from './ProfileInfo.module.css'
import { Loader } from '../../common/Loader/Loader'
import { ProfileType } from '../../../redux/profile-reducer'
import userPlaceholderPhoto from '../../../assets/images/user-placeholder.png'
import { ProfileStatus } from './ProfileStatus'

type PropsType = {
  profile: ProfileType
}

export const ProfileInfo = (props: PropsType) => {
  if (!props.profile) {
    return <Loader/>
  }

  return (
    <div className={style.profile}>
      <div className={style['profile-header']}>
        <img src="//unsplash.it/1000/400" alt="" width="1000" height="400"></img>
      </div>
      <div className={style.description}>
        <div className={style.photo}>
          <img src={props.profile.photos.large || userPlaceholderPhoto} alt={"user"}/>
        </div>
        <b className={style.name}>{props.profile.fullName}</b>
        <p>{props.profile.aboutMe}</p>
        <ProfileStatus status={"Hello friends!"}/>
      </div>
      <div className={style.contacts}>
        <h3 className={style.title}>Contacts</h3>
        <ul className={style['contacts-list']}>
          {Object.entries(props.profile.contacts).map((item, index) => {
            return item[1] ? (
              <li key={index}>
                <a href={`${item[1]}`}>{item[0]}</a>
              </li>
            ) : (
              ''
            )
          })}
        </ul>
      </div>
    </div>
  );
};
