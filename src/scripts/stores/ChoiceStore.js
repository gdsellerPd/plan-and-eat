import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import data from '../data.json'
import ChoiceConstants from '../constants/ChoiceConstants';
import _ from 'lodash';

class ChoiceStore extends EventEmitter {

  getChoices() {
    let options = data.mealOptions;

    if (this.search) {
      let pattern = new RegExp(this.search, 'i');
      let names = options.filter((choice) => pattern.test(choice.name));
      let tags = options.filter((choice) => _.some(choice.tags, (tag) => pattern.test(tag)));
      return _.uniq(names.concat(tags));
    }

    return options;
  }

  filter(search) {
    this.search = search;
  }
}

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case ChoiceConstants.CHOICE_FILTER:
      store.filter(action.search)
      break;
    default:
      break;
  }
});

export default new ChoiceStore();