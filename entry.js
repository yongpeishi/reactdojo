import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.colors[0]
    }
  }

  render() {
    //const colors = this.props.colors;
    const { colors } = this.props;

    setActive(color) {
      this.setState({
        active: color
      });
    }

    return (
     <div>
     {
     colors.map((c) => (
       <div
         style={{
           background: c,
           width: '50px',
           height: '50px'
         }}
         onClick={ this.setActive.bind(this, c)}
         key={`color_${c}`}></div>)
     )
     }

     <p>Active color is {this.state.active} </p>
   </div>
    );
  }
}

ColorPicker.propTypes = {
  colors: PropTypes.array
}

ColorPicker.defaultProps = {
  colors: []
}

render(<ColorPicker colors={["red", "blue"]} />, document.getElementById('target'));
