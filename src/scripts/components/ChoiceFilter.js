import React from 'react';
import ChoiceActions from '../actions/ChoiceActions';

class ChoiceFilter extends React.Component {
  render() {
    return <form className="form-inline">
      <div className="form-group">
        <div className="input-group">
          <label for="choice_search" className="input-group-addon">Search</label>
          <input type="text" id="choice_search" onChange={this._onChange} />
        </div>
      </div>
    </form>;
  }

  _onChange(event) {
    ChoiceActions.filter(event.target.value);
  }
}

export default ChoiceFilter;