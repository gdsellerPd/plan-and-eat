"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var EventEmitter = require("events").EventEmitter;
var AppDispatcher = _interopRequire(require("../dispatcher/AppDispatcher"));

var data = _interopRequire(require("../data.json"));

var ChoiceStore = (function (EventEmitter) {
  function ChoiceStore() {
    _classCallCheck(this, ChoiceStore);

    this.data = data;
  }

  _inherits(ChoiceStore, EventEmitter);

  _prototypeProperties(ChoiceStore, null, {
    getAll: {
      value: function getAll() {
        return data.mealOptions;
      },
      writable: true,
      configurable: true
    }
  });

  return ChoiceStore;
})(EventEmitter);

AppDispatcher.register(function (action) {});

module.exports = new ChoiceStore();