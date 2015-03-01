"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var _ = _interopRequire(require("lodash"));

var ChoiceRow = _interopRequire(require("./ChoiceRow"));

var ChoiceList = (function (_React$Component) {
  function ChoiceList() {
    _classCallCheck(this, ChoiceList);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ChoiceList, _React$Component);

  _prototypeProperties(ChoiceList, null, {
    propTypes: {
      get: function () {
        allChoices: React.PropTypes.array.isRequired;
      },
      configurable: true
    },
    render: {
      value: function render() {
        var chunks = _.chunk(this.props.allChoices, 4);
        var rows = [];

        chunks.forEach(function (choices) {
          return rows.push(React.createElement(ChoiceRow, { choices: choices }));
        });

        return React.createElement(
          "div",
          { className: "choices container" },
          React.createElement(
            "h2",
            null,
            "Meal Options"
          ),
          rows
        );
      },
      writable: true,
      configurable: true
    }
  });

  return ChoiceList;
})(React.Component);

module.exports = ChoiceList;