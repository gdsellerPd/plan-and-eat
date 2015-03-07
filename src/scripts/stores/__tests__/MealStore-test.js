jest.dontMock('../MealStore');
jest.dontMock('lodash');

require('6to5ify/polyfill');

describe('MealStore', function () {

  var MealStore;
  var AppDispatcher;

  beforeEach(function () {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    MealStore = require('../MealStore');
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

});