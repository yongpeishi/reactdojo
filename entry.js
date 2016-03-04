import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class ColorPicker extends Component {
  render() {
    return (
        <div> My Div</div>
    );
  }
}

render(<ColorPicker />, document.getElementById('target'));
