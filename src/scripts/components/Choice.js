import React from 'react';
import { DragDropMixin } from 'react-dnd';

const Choice = React.createClass({
  mixins: [DragDropMixin],
  
  statics: {
    configureDragDrop(register) {
      register('choice', {
        dragSource: {
          beginDrag(component) {
            return {
              item: component.props.item
            }
          }
        }
      });
    }
  },

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    return <div {...this.dragSourceFor('choice')} className="col-xs-3 choice">
      <img draggable="false" className="choice-image" src={this.props.item.picUrl} />
      <p className="choice-description">
        {this.props.item.name}
      </p>
    </div>;
  }
});

export default Choice;