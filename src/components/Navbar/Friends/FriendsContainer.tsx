import React from 'react'
import { Friends } from './Friends'
import { connect } from 'react-redux'
import { SidebarPageType } from '../../../redux/sidebar-reducer'
import { AppStateType } from '../../../redux/store'
import { Dispatch } from 'redux'

type MapDispatchToPropsReturnType = {};
export type FriendsPropsType = MapDispatchToPropsReturnType & SidebarPageType;

const mapStateToProps = (state: AppStateType): SidebarPageType => ({
  friends: state.sidebarPage.friends,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsReturnType => ({

})

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
