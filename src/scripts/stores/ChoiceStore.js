import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import data from '../data.json'
import ChoiceConstants from '../constants/ChoiceConstants';
import _ from 'lodash';

const CHANGE_EVENT = 'choice.filter';

class ChoiceStore extends EventEmitter {

  getFiltered() {
    let options = data.mealOptions;
    let pattern = new RegExp(this.search, 'i');
    let names = options.filter((choice) => pattern.test(choice.name));
    let tags = options.filter((choice) => _.some(choice.tags, (tag) => pattern.test(tag)));
    return _.uniq(names.concat(tags));
  }

  addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn);
  }

  getChoices() {
    if (this.search) {
      return this.getFiltered();
    }

    return data.mealOptions;
  }

  filter(search) {
    this.search = search;
  }
}

const store = new ChoiceStore();

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case ChoiceConstants.CHOICE_FILTER:
      store.filter(action.search);
      store.emit(CHANGE_EVENT);
      break;
    default:
      break;
  }
});

export default store;