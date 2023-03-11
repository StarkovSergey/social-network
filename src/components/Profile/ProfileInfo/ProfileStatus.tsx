import React, { ChangeEvent } from 'react'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

type LocalStateType = {
  editMode: boolean
  statusText: string
}

export class ProfileStatus extends React.Component<PropsType, LocalStateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = {
      editMode: false,
      statusText: props.status,
    }
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }
  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.statusText)
  }
  inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ statusText: evt.currentTarget.value })
  }

  componentDidUpdate(prevProps: PropsType, prevState: LocalStateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        statusText: this.props.status,
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status ? this.props.status : 'empty status'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              value={this.state.statusText}
              autoFocus
              onChange={this.inputChangeHandler}
            />
          </div>
        )}
      </div>
    )
  }
}
