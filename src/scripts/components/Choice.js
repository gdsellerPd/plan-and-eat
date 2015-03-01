import React from 'react';

class Choice extends React.Component {

  get propTypes() {
    item: React.PropTypes.object.isRequired
  }

  render() {
    console.log(this.props.item);
    return <div className="col-xs-3 choice">
      <img className="choice-image" src={this.props.item.picUrl} />
      <p className="choice-description">
        {this.props.item.name}
      </p>
    </div>;
  }
}

export default Choice;