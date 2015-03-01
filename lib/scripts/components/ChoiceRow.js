"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Choice = _interopRequire(require("./Choice"));

var ChoiceRow = (function (_React$Component) {
  function ChoiceRow() {
    _classCallCheck(this, ChoiceRow);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ChoiceRow, _React$Component);

  _prototypeProperties(ChoiceRow, null, {
    propTypes: {
      get: function () {
        choices: React.PropTypes.array.isRequired;
      },
      configurable: true
    },
    render: {
      value: function render() {
        var choices = [];
        this.props.choices.forEach(function (choice) {
          return choices.push(React.createElement(Choice, { item: choice }));
        });

        return React.createElement(
          "div",
          { className: "row" },
          choices
        );
      },
      writable: true,
      configurable: true
    }
  });

  return ChoiceRow;
})(React.Component);

module.exports = ChoiceRow;