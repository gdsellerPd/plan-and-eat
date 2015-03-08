jest.dontMock('react/lib/keyMirror');
jest.dontMock('../../constants/MealConstants');
jest.dontMock('../MealStore');
jest.dontMock('lodash');

require('6to5ify/polyfill');

describe('MealStore', function () {

  var MealConstants = require('../../constants/MealConstants');
  var MealStore;
  var AppDispatcher;
  var callback;

  var selectedAction = {
    actionType: MealConstants.MEAL_SELECTED,
    day: 'Sun',
    choice: {
      name: 'Satay Chicken'
    }
  };

  beforeEach(function () {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    MealStore = require('../MealStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function () {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with a map of days', function () {
    var data = MealStore.meals;
    expect(data.size).toBe(7);
  });

  describe('map access', function () {
    it('should set and get meals by day', function () {
      var meal = {name: 'Stir Fry'};
      MealStore.set('Sun', meal);
      expect(MealStore.get('Sun')).toBe(meal);
    });
  });

  it('sets meals for a given day', function () {
    callback(selectedAction);
    var sunday = MealStore.get('Sun');
    expect(sunday.name).toEqual('Satay Chicken');
  });

});