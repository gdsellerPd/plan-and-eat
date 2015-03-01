import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import data from '../data.json'

class ChoiceStore extends EventEmitter {
  constructor() {
    this.data = data;
  }

  getAll() {
    return data.mealOptions;
  }
}

AppDispatcher.register(function (action) {

});

export default new ChoiceStore();