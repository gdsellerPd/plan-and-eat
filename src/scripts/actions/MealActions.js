import AppDispatcher from '../dispatcher/AppDispatcher';
import MealConstants from '../constants/MealConstants';

let MealActions = {
  select: (day, choice) => {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_SELECTED,
      day,
      choice
    });
  }
}

export default MealActions;