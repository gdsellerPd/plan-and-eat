import React from 'react';
import { DragDropMixin } from 'react-dnd';
import MealActions from '../actions/MealActions';

const Meal = React.createClass({
  mixins: [DragDropMixin],

  statics: {
    configureDragDrop(register) {
      register('choice', {
        dropTarget: {
          acceptDrop(component, item) {
            component.props.selection = item;
            MealActions.select(component.props.day, item);
          }
        }
      });
    }
  },

  propTypes: {
    day: React.PropTypes.string.isRequired,
    selection: React.PropTypes.object.isRequired
  },

  styles() {
    const dropState = this.getDropState('choice');

    let styles = {};

    if (dropState.isHovering) {
      styles.backgroundColor = '#FFD34E';
    }

    if (this.props.selection) {
      styles.backgroundImage = 'url(' + this.props.selection.picUrl + ')';
    }

    return styles;
  },

  render() {
    let mealText;
    if (this.props.selection) {
      mealText = <p className="meal-text">
        {this.props.selection.name}
      </p>
    }

    return (
      <li {...this.dropTargetFor('choice')} className={this.props.selection ? 'meal meal-selected' : 'meal'}>
       <div className="meal-container">
         <div style={this.styles()} className="meal-selection">
    
         </div>
       </div>
       <p className="meal-day text-center">
          {this.props.day}
       </p>
       {mealText}
     </li>
    );
  }
});

export default Meal;