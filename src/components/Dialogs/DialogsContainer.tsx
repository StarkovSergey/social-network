import { addMessage, DialogsPageType } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

type MapDispatchToPropsReturnType = {
  addMessage: (newMessageText: string) => void
}

export type DialogsPropsType = MapDispatchToPropsReturnType & DialogsPageType & { isAuth: boolean }

const mapStateToProps = (state: AppStateType): DialogsPageType & { isAuth: boolean } => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth,
  }
}

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { addMessage}),
  withAuthRedirect
)(Dialogs)
// compose - функция из Redux. Смысл: возьми Dialogs, передай в withAuthRedirect, затем результат передай в следующую функцию ()
