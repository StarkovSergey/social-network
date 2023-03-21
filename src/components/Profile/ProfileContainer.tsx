import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, savePhoto, updateStatus } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

type MapDispatchToPropsType = {
  getUserProfile: (id: string) => void
  getStatus: (id: string) => void
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
}

type PathParamsType = {
  userId: string
}

export type ProfilePropsType = MapDispatchToPropsType &
  ReturnType<typeof mapStateToProps> & {
    isOwner: boolean
  }
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileAPIContainer extends React.Component<PropsType> {
  refreshProfile() {
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

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<PropsType>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!Boolean(this.props.match.params.userId)}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter
  // withAuthRedirect
)(ProfileAPIContainer)
