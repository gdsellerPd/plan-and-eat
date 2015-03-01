import React from 'react';

class ChoiceFilter extends React.Component {
  render() {
    return <form className="form-inline">
      <div className="form-group">
        <div className="input-group">
          <label for="choice_search" className="input-group-addon">Search</label>
          <input type="text" id="choice_search" />
        </div>
      </div>
    </form>;
  }
}

export default ChoiceFilter;