import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { ProfilePageType, ProfileType, setUserProfile } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { profileAPI } from '../../api/api'

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
  userId: string
}

export type ProfilePropsType = MapDispatchToPropsType & ProfilePageType
type PropsType  = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileAPIContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = String(2)
    }

    profileAPI.getUser(userId)
      .then((data) => {
        this.props.setUserProfile(data)
      })
  }

  render() {
    // {...this.props} - передача всех пропсов в дочерний компонент
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state: AppStateType): ProfilePageType => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})


const WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

