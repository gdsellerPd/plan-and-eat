jest.dontMock('../ChoiceStore');
jest.dontMock('lodash');
jest.dontMock('../../data.json');

describe('ChoiceStore', function () {

  var ChoiceStore;
  var AppDispatcher;
  var data;

  beforeEach(function () {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    ChoiceStore = require('../ChoiceStore');
    data = require('../../data.json');
  });

  it('registers a callback with the dispatcher', function () {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  describe('.getChoices()', function () {
    it('should return all meal options by default', function () {
      var choices = ChoiceStore.getChoices();
      expect(choices.length).toEqual(data.mealOptions.length);
    });

    it('should return objects filtered by name', function () {
      ChoiceStore.filter('satay');
      var choices = ChoiceStore.getChoices();
      expect(choices.length).toEqual(1);
      expect(choices[0].name).toEqual('Satay Chicken');
    });

    it('should return objects filtered by tag', function () {
      ChoiceStore.filter('vegetarian');
      var choices = ChoiceStore.getChoices();
      expect(choices.length).toEqual(1);
      expect(choices[0].name).toEqual('Summer Salad');
    });

    it('should filter by tag and name', function () {
      ChoiceStore.filter('beef');
      var choices = ChoiceStore.getChoices();
      expect(choices.length).toEqual(3);
    });

    it('should not touch the original data structure', function () {
      ChoiceStore.filter('beef');
      var choices = ChoiceStore.getChoices();
      expect(choices.length).toEqual(3);
      ChoiceStore.filter('');
      var all = ChoiceStore.getChoices();
      expect(all.length).toEqual(data.mealOptions.length);
    });
  });

});