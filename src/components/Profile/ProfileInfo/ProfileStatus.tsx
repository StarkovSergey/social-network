import React, { ChangeEvent } from 'react'

type PropsType = {
  status: string
}

export class ProfileStatus extends React.Component<any, any> {
  constructor(props: PropsType) {
    super(props)
    this.state = {
      editMode: false,
      statusText: props.status
    }
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }
  deactivateEditMode = () => {
    this.setState({editMode: false})
  }
  inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({statusText: evt.currentTarget.value})
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onBlur={this.deactivateEditMode} value={this.state.statusText} autoFocus onChange={this.inputChangeHandler}/>
          </div>
        )}
      </div>
    )
  }
}
