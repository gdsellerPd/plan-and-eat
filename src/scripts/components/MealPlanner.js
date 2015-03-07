import React from 'react';
import MealList from './MealList';
import ChoiceList from './ChoiceList';
import ChoiceFilter from './ChoiceFilter';

import MealStore from '../stores/MealStore';
import ChoiceStore from '../stores/ChoiceStore';

let getState = () => {
  return { 
    allChoices: ChoiceStore.getChoices(),
    meals: MealStore.meals
  }
}

class MealPlanner extends React.Component {

  constructor() {
    this.state = getState();
  }

  componentWillMount() {
    ChoiceStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
    return <div classNameName="container">
      <header>
        <h1 className="text-center">Plan &amp; Eat</h1>
      </header>

      <MealList meals={this.state.meals} />
      <ChoiceFilter />
      <ChoiceList allChoices={this.state.allChoices} />
    </div>
  }

  _onChange() {
    this.setState(getState());
  }
}

export default MealPlanner;