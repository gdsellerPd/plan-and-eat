import React from 'react'
import Meal from './Meal';

class MealList extends React.Component {

  get propTypes() {
    meals: React.PropTypes.object.isRequired
  }

  render() {
    let meals = this.props.meals.map((value, key) => <Meal day={key} selection={value} />);

    return <ul className="meal-list">
            {meals}
           </ul>
  }
}

export default MealList;