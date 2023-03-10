import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

type MapDispatchToPropsType = {
  getUserProfile: (id: string) => void
  getStatus: (id: string) => void
  updateStatus: (status: string) => void
}

type PathParamsType = {
  userId: string
}

export type ProfilePropsType = MapDispatchToPropsType & ReturnType<typeof mapStateToProps>
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileAPIContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId!
    }
    if (!userId) {
      this.props.history.push('/login')
    }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
})

export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileAPIContainer)
