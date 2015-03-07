import React from 'react'

class MealList extends React.Component {
  render() {
    return <ul className="meal-list">
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
  }
}

export default MealList;