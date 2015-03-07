import React from 'react';

class Meal extends React.Component {
  get propTypes() {
    return {
      day: React.PropTypes.string.isRequired,
      selection: React.PropTypes.object.isRequired
    }
  }

  render() {
    let mealText;
    let styles = {};
    if (this.props.selection) {
      mealText = <p className="meal-text">
        {this.props.selection.name}
      </p>
      styles.backgroundImage = 'url(' + this.props.selection.picUrl + ')';
    }

    return <li className={this.props.selection ? 'meal meal-selected' : 'meal'}>
             <div className="meal-container">
               <div style={styles} className="meal-selection">
          
               </div>
             </div>
             <p className="meal-day text-center">
                {this.props.day}
             </p>
             {mealText}
           </li>
  }
}

export default Meal;