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

    this.set('Wed', {
      "name"   : "Satay Chicken",
      "url"    : "https://www.flickr.com/photos/mat-packer/9312677768",
      "picUrl" : "images/ChickenSatay.jpg",
      "tags"   : ["chicken", "asian"]
    });

    this.set('Fri', {
      "name"   : "Satay Chicken",
      "url"    : "https://www.flickr.com/photos/mat-packer/9312677768",
      "picUrl" : "images/ChickenSatay.jpg",
      "tags"   : ["chicken", "asian"]
    });
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