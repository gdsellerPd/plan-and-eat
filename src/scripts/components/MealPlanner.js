import React from 'react';
import ChoiceList from './ChoiceList';
import ChoiceFilter from './ChoiceFilter';
import ChoiceStore from '../stores/ChoiceStore';

class MealPlanner extends React.Component {

  get state() {
    return {
      allChoices: ChoiceStore.getChoices()
    }
  }

  render() {
    return <div classNameName="container">
      <header>
        <h1 className="text-center">Plan &amp; Eat</h1>
      </header>
      <ul className="meal-list">
        <li className="meal">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Sun
          </p>
        </li>
        <li className="meal">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Mon
          </p>
        </li>
        <li className="meal">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Tue
          </p>
        </li>
        <li className="meal meal-selected">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Wed
          </p>
          <p className="meal-text">
            Stir Fry Chicken
          </p>
        </li>
        <li className="meal">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Thu
          </p>
        </li>
        <li className="meal meal-selected">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Fri
          </p>
          <p className="meal-text">
            Stir Fry Chicken
          </p>
        </li>
        <li className="meal">
          <div className="meal-container">
            <div className="meal-selection">
              
            </div>
          </div>
          <p className="meal-day text-center">
            Sat
          </p>
        </li>
      </ul>

      <ChoiceFilter />
      <ChoiceList allChoices={this.state.allChoices} />

    </div>
  }
}

export default MealPlanner;