import React from 'react';

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 50 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="range" min="0" max="100" value={this.state.value} onChange={this.handleChange} />
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}

export default RangeSlider;
