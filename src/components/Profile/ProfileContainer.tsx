import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { ProfilePageType, ProfileType, setUserProfile } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/store'

class ProfileAPIContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    // {...this.props} - передача всех пропсов в дочерний компонент
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  // posts: state.profilePage.posts,
  // newPostText: state.profilePage.newPostText
})

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = MapDispatchToPropsType & ProfilePageType

// TODO какой тип?
export const ProfileContainer: any = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)
