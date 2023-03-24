import { ContactsType, ProfileType } from '../../../../redux/profile-reducer'
import style from '../ProfileInfo.module.css'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { SetStatus } from '../../../Login/LoginFormik'

type PropsType = {
  profile: ProfileType
  inactiveEditMode: () => void
  saveProfile: (formData: FormData, setStatus: SetStatus) => Promise<any>
}

export type FormData = {
  fullName: string
  lookingForAJOB: boolean
  lookingForAJobDescription: string
  aboutMe: string
}

export const ProfileDataForm = ({ profile, saveProfile, inactiveEditMode }: PropsType) => {
  const contactValues = { ...profile!.contacts }

  return (
    <Formik
      initialValues={{
        fullName: profile!.fullName,
        lookingForAJOB: profile!.lookingForAJob,
        lookingForAJobDescription: profile!.lookingForAJobDescription,
        aboutMe: profile!.aboutMe,
        contacts: {
          ...contactValues,
        },
      }}
      validate={(values) => {}}
      onSubmit={(values, submitProps) => {
        saveProfile(values, submitProps.setStatus).then((res) => {
          inactiveEditMode()
        })
      }}>
      {({ errors, handleChange, touched, status, values }) => (
        <Form>
          <button>save</button>
          <div>
            <b>Full name</b>:
            <Field type="text" name="fullName" autocompleted="off" />
            {errors.fullName && touched.fullName && errors.fullName}
          </div>
          <div>
            <b>Looking for a job</b>:
            <Field type="checkbox" name="lookingForAJOB" autocompleted="off" />
            {errors.lookingForAJOB && touched.lookingForAJOB && errors.lookingForAJOB}
          </div>
          <div>
            <b>Skills</b>:
            <Field type="text" name="lookingForAJobDescription" autocompleted="off" />
            {errors.lookingForAJobDescription && touched.lookingForAJobDescription && errors.lookingForAJobDescription}
          </div>
          <div>
            <b>About me</b>:
            <Field type="text" name="aboutMe" autocompleted="off" />
            {errors.aboutMe && touched.aboutMe && errors.aboutMe}
          </div>

          <div className={style.contacts}>
            <h3 className={style.title}>Contacts</h3>
            <ul className={style['contacts-list']}>
              {Object.entries(profile!.contacts).map(([title, link], index) => {
                return (
                  <div key={index}>
                    <b>{title}</b>:
                    <input
                      id="title"
                      name={`contacts.${title}`}
                      type="text"
                      onChange={handleChange}
                      value={values.contacts[title as keyof ContactsType] || ''}
                    />
                  </div>
                )
              })}
            </ul>
          </div>

          <p>{status && status.error[0]}</p>
        </Form>
      )}
    </Formik>
  )
}
