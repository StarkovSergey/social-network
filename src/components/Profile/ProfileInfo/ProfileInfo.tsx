import React, { ChangeEvent, useState } from 'react'
import style from './ProfileInfo.module.css'
import { Loader } from '../../common/Loader/Loader'
import { ProfileType } from '../../../redux/profile-reducer'
import userPlaceholderPhoto from '../../../assets/images/user-placeholder.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'
import { FormData, ProfileDataForm } from './ProfileDataForm/ProfileDataForm'
import { SetStatus } from '../../Login/LoginFormik'

type PropsType = {
  profile: ProfileType
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
  saveProfile: (formData: FormData, setStatus: SetStatus) => Promise<any>
}

export const ProfileInfo = (props: PropsType) => {
  const [editMode, setEditMode] = useState(false)
  const activeEditMode = () => setEditMode(true)
  const inactiveEditMode = () => setEditMode(false)

  if (!props.profile) {
    return <Loader />
  }

  const mainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      props.savePhoto(e.currentTarget.files[0])
    }
  }

  return (
    <div className={style.profile}>
      <div className={style['profile-header']}>
        <img src="https://efi.int/sites/default/files/2020-12/placeholder.jpeg" alt="" width="1000" height="400"></img>
      </div>
      <div className={style.description}>
        <div className={style.photo}>
          <img src={props.profile.photos.large || userPlaceholderPhoto} alt={'user'} />
        </div>
        {props.isOwner && <input type="file" onChange={mainPhotoHandler} />}

        <b className={style.name}>{props.profile.fullName}</b>
        <p>{props.profile.aboutMe}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} id={props.profile.userId} />
      </div>

      {editMode ? (
        <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile} inactiveEditMode={inactiveEditMode} />
      ) : (
        <ProfileData profile={props.profile} isOwner={props.isOwner} activeEditMode={activeEditMode} />
      )}
    </div>
  )
}

type ContactProps = {
  title: string
  link: string
}

export const Contact = ({ title, link }: ContactProps) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  )
}

type ProfileDataProps = {
  profile: ProfileType
  isOwner: boolean
  activeEditMode: () => void
}

const ProfileData = ({ profile, isOwner, activeEditMode }: ProfileDataProps) => {
  return (
    <>
      <div className={style.characteristics}>
        {isOwner && <button onClick={activeEditMode}>edit</button>}
        <div>
          <b>Full name</b>: {profile!.fullName}
        </div>
        <div>
          <b>Looking for a job</b>: {profile!.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
          <b>Skills</b>: {profile!.lookingForAJobDescription}
        </div>
        <div>
          <b>About me</b>: {profile!.aboutMe}
        </div>
      </div>
      <div className={style.contacts}>
        <h3 className={style.title}>Contacts</h3>
        <ul className={style['contacts-list']}>
          {Object.entries(profile!.contacts).map(([title, link], index) => {
            return <Contact key={index} title={title} link={link} />
          })}
        </ul>
      </div>
    </>
  )
}
