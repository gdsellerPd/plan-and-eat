import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class MealStore extends EventEmitter {
  constructor() {
    this.meals = new Map([
      ['Sun', null],
      ['Mon', null],
      ['Tue', null],
      ['Wed', null],
      ['Thu', null],
      ['Fri', null],
      ['Sat', null]
    ]);
  }

  set(day, meal) {
    this.meals.set(day, meal);
  }

  get(day) {
    return this.meals.get(day);
  }
}

const store = new MealStore();

AppDispatcher.register(function (action) {
  
});

export default store;