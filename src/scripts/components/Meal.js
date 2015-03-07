import React from 'react';
import { DragDropMixin } from 'react-dnd';

const Meal = React.createClass({
  mixins: [DragDropMixin],

  statics: {
    configureDragDrop(register) {
      register('choice', {
        dropTarget: {
          acceptDrop(component, item) {
            console.log(component.props.day);
            console.log(item);
          }
        }
      });
    }
  },

  propTypes: {
    day: React.PropTypes.string.isRequired,
    selection: React.PropTypes.object.isRequired
  },

  render() {
    let mealText;
    let styles = {};
    if (this.props.selection) {
      mealText = <p className="meal-text">
        {this.props.selection.name}
      </p>
      styles.backgroundImage = 'url(' + this.props.selection.picUrl + ')';
    }

    return (
      <li {...this.dropTargetFor('choice')} className={this.props.selection ? 'meal meal-selected' : 'meal'}>
       <div className="meal-container">
         <div style={styles} className="meal-selection">
    
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