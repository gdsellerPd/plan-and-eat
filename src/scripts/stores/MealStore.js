import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import MealConstants from '../constants/MealConstants';
import {Map} from 'immutable'

const SELECTED_EVENT = 'meal.selected';

class MealStore extends EventEmitter {
  constructor() {
    this.meals = Map({
      'Sun': null,
      'Mon': null,
      'Tue': null,
      'Wed': null,
      'Thu': null,
      'Fri': null,
      'Sat': null
    });
  }

  addSelectedListener(fn) {
    this.on(SELECTED_EVENT, fn);
  }

  set(day, meal) {
    this.meals = this.meals.set(day, meal);
  }

  get(day) {
    return this.meals.get(day);
  }
}

const store = new MealStore();

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case MealConstants.MEAL_SELECTED:
      store.set(action.day, action.choice);
      store.emit(SELECTED_EVENT);
      break;
    default:
      break;
  }
});

export default store;