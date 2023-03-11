import React, { ChangeEvent, useState, FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStatus } from '../../../redux/profile-reducer'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
  id: number
}

export const ProfileStatusWithHooks: FC<PropsType> = (props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setStatus(evt.currentTarget.value)
  }

  useEffect(() => {
    dispatch(getStatus(String(props.id)))
  }, [])

  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{props.status ? props.status : 'empty status'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onBlur={deactivateEditMode} value={status} autoFocus onChange={inputChangeHandler} />
        </div>
      )}
    </div>
  )
}
