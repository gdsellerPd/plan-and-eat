require('babelify/polyfill');

import React from 'react'
import MealPlanner from './components/MealPlanner';

React.render(
  <MealPlanner />,
  document.getElementById('mealplanner')
);
