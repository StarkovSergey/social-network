import React from 'react';
import style from '../Navbar.module.css';
import { DialogType } from '../../../redux/store';

type FriendsPropsType = {
  friends: Array<DialogType>
}

export const Friends = (props: FriendsPropsType) => {
  const friendsElements = props.friends.map((friend) => {
    return (
      <li key={friend.id}>
        <div className={style.avatar}>
          <img src={friend.avatar} alt=""/>
        </div>
        <span>{friend.name}</span>
      </li>
    )
  })

  return (
    <div>
      <h3 className={style['sidebar-title']}>Friends</h3>
      <ul className={style['friends-list']}>
        {friendsElements}
      </ul>
    </div>
  );
};
