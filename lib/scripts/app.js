"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var MealPlanner = _interopRequire(require("./components/MealPlanner"));

React.render(React.createElement(MealPlanner, null), document.getElementById("mealplanner"));