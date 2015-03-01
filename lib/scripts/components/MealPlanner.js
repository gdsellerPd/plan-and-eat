"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var MealPlanner = (function (_React$Component) {
  function MealPlanner() {
    _classCallCheck(this, MealPlanner);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(MealPlanner, _React$Component);

  _prototypeProperties(MealPlanner, null, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { classNameName: "container" },
          React.createElement(
            "header",
            null,
            React.createElement(
              "h1",
              { className: "text-center" },
              "Plan & Eat"
            )
          ),
          React.createElement(
            "ul",
            { className: "meal-list" },
            React.createElement(
              "li",
              { className: "meal" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Sun"
              )
            ),
            React.createElement(
              "li",
              { className: "meal" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Mon"
              )
            ),
            React.createElement(
              "li",
              { className: "meal" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Tue"
              )
            ),
            React.createElement(
              "li",
              { className: "meal meal-selected" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Wed"
              ),
              React.createElement(
                "p",
                { className: "meal-text" },
                "Stir Fry Chicken"
              )
            ),
            React.createElement(
              "li",
              { className: "meal" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Thu"
              )
            ),
            React.createElement(
              "li",
              { className: "meal meal-selected" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Fri"
              ),
              React.createElement(
                "p",
                { className: "meal-text" },
                "Stir Fry Chicken"
              )
            ),
            React.createElement(
              "li",
              { className: "meal" },
              React.createElement(
                "div",
                { className: "meal-container" },
                React.createElement("div", { className: "meal-selection" })
              ),
              React.createElement(
                "p",
                { className: "meal-day text-center" },
                "Sat"
              )
            )
          ),
          React.createElement(
            "form",
            { className: "form-inline" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "div",
                { className: "input-group" },
                React.createElement(
                  "label",
                  { "for": "choice_search", className: "input-group-addon" },
                  "Search"
                ),
                React.createElement("input", { type: "text", id: "choice_search" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "choices container" },
            React.createElement(
              "h2",
              null,
              "Meal Options"
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/BeefWellington.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Beef Wellington"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/ChickenSatay.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Chicken Satay"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/DoubleDown.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Double Down"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/Hamburger.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Hamburger"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/MapleGlazedSalmon.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Maple Glazed Salmon"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/NewYorkStrip.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "New York Strip"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/StirFryChicken.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Stir Fry Chicken"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/SummerSalad.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Summer Salad"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-xs-3 choice" },
                React.createElement("img", { className: "choice-image", src: "/images/ThymeSalmon.jpg" }),
                React.createElement(
                  "p",
                  { className: "choice-description" },
                  "Thyme Salad"
                )
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return MealPlanner;
})(React.Component);

module.exports = MealPlanner;