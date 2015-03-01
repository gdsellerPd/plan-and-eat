import React from 'react';
import _ from 'lodash';
import ChoiceRow from './ChoiceRow';

class ChoiceList extends React.Component {

  get propTypes() {
    allChoices: React.PropTypes.array.isRequired
  }

  render() {
    let chunks = _.chunk(this.props.allChoices, 4);
    let rows = [];

    chunks.forEach((choices) => rows.push(<ChoiceRow choices={choices} />));

    return <div className="choices container">
        <h2>Meal Options</h2>
        {rows}
      </div>;
  }
}

export default ChoiceList;