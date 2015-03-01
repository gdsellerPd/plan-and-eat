"use strict";

jest.dontMock("../ChoiceStore");
jest.dontMock("../../data.json");

describe("ChoiceStore", function () {
  var ChoiceStore;
  var AppDispatcher;
  var data;

  beforeEach(function () {
    AppDispatcher = require("../../dispatcher/AppDispatcher");
    ChoiceStore = require("../ChoiceStore");
    data = require("../../data.json");
  });

  it("registers a callback with the dispatcher", function () {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it("should initialize with meal choices", function () {
    var choices = ChoiceStore.getAll();
    expect(choices.length).toEqual(data.mealOptions.length);
  });
});