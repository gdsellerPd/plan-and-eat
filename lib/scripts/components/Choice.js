"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Choice = (function (_React$Component) {
  function Choice() {
    _classCallCheck(this, Choice);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Choice, _React$Component);

  _prototypeProperties(Choice, null, {
    propTypes: {
      get: function () {
        item: React.PropTypes.object.isRequired;
      },
      configurable: true
    },
    render: {
      value: function render() {
        console.log(this.props.item);
        return React.createElement(
          "div",
          { className: "col-xs-3 choice" },
          React.createElement("img", { className: "choice-image", src: this.props.item.picUrl }),
          React.createElement(
            "p",
            { className: "choice-description" },
            this.props.item.name
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Choice;
})(React.Component);

module.exports = Choice;