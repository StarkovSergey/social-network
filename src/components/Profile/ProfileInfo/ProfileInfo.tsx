import React from 'react';
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="//unsplash.it/1000/400" alt="" width="1000" height="400"></img>
      </div>
      <div className={style.description}>ava + description</div>
    </div>
  );
};
