import AppDispatcher from '../dispatcher/AppDispatcher';
import ChoiceConstants from '../constants/ChoiceConstants';

let ChoiceActions = {
  filter: (search) => {
    AppDispatcher.dispatch({
      actionType: ChoiceConstants.CHOICE_FILTER,
      search
    });
  }
}

export default ChoiceActions;