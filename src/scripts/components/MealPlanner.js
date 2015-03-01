import React from 'react';

class MealPlanner extends React.Component {
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

      <form className="form-inline">
        <div className="form-group">
          <div className="input-group">
            <label for="choice_search" className="input-group-addon">Search</label>
            <input type="text" id="choice_search" />
          </div>
        </div>
      </form>

      <div className="choices container">
        <h2>Meal Options</h2>
        <div className="row">
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/BeefWellington.jpg" />
            <p className="choice-description">
              Beef Wellington
            </p>
          </div>
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/ChickenSatay.jpg" />
            <p className="choice-description">
              Chicken Satay
            </p>
          </div>
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/DoubleDown.jpg" />
            <p className="choice-description">
              Double Down
            </p>
          </div>
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/Hamburger.jpg" />
            <p className="choice-description">
              Hamburger
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/MapleGlazedSalmon.jpg" />
            <p className="choice-description">
              Maple Glazed Salmon
            </p>
          </div>
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/NewYorkStrip.jpg" />
            <p className="choice-description">
              New York Strip
            </p>
          </div>
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/StirFryChicken.jpg" />
            <p className="choice-description">
              Stir Fry Chicken
            </p>
          </div>
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/SummerSalad.jpg" />
            <p className="choice-description">
              Summer Salad
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3 choice">
            <img className="choice-image" src="/images/ThymeSalmon.jpg" />
            <p className="choice-description">
              Thyme Salad
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default MealPlanner;