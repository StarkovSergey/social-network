import React from 'react'
import style from '../Navbar.module.css'
import { DialogType } from '../../../redux/store'
import { Friends } from './Friends'
import { connect } from 'react-redux'
import { SidebarPageType } from '../../../redux/sidebar-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'


// export const FriendsContainer = (props: FriendsPropsType) => {
//   const friendsElements = props.friends.map((friend) => {
//     return (
//       <li key={friend.id}>
//         <div className={style.avatar}>
//           <img src={friend.avatar} alt=""/>
//         </div>
//         <span>{friend.name}</span>
//       </li>
//     )
//   })
//
//   return (
//     <div>
//       <h3 className={style['sidebar-title']}>Friends</h3>
//       <ul className={style['friends-list']}>
//         {friendsElements}
//       </ul>
//     </div>
//   );
// };
type MapDispatchToPropsReturnType = {};
export type FriendsPropsType = MapDispatchToPropsReturnType & SidebarPageType;

const mapStateToProps = (state: AppStateType): SidebarPageType => ({
  friends: state.sidebarPage.friends,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsReturnType => ({

})

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
