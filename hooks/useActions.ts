import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {myListActions} from '../store/myList/myList.slice'

const allActions = {
  ...myListActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}