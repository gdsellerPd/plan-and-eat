import React from 'react';
import Choice from './Choice';

class ChoiceRow extends React.Component {

  get propTypes() {
    choices: React.PropTypes.array.isRequired
  }

  render() {
    let choices = [];
    this.props.choices.forEach((choice) => choices.push(<Choice item={choice} />));

    return <div className="row">
      {choices}
    </div>;
  }
}

export default ChoiceRow;