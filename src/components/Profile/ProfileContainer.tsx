import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, ProfilePageType } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

type MapDispatchToPropsType = {
  getUserProfile: (id: string) => void
}

type PathParamsType = {
  userId: string
}

export type ProfilePropsType = MapDispatchToPropsType & ProfilePageType & {isAuth: boolean}
type PropsType  = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileAPIContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = String(2)
    }

    this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state: AppStateType): ProfilePageType => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
})

export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  // withAuthRedirect
)(ProfileAPIContainer)

