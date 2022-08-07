import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { ProfilePageType, ProfileType, setUserProfile } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'

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

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data)
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

