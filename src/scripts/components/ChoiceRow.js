import React from 'react';
import Choice from './Choice';

class ChoiceRow extends React.Component {

  get propTypes() {
    choices: React.PropTypes.array.isRequired
  }

  render() {
    let choices = this.props.choices.map((c) => <Choice item={c} />);

    return <div className="row">
      {choices}
    </div>;
  }
}

export default ChoiceRow;