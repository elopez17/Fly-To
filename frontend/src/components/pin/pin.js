import React, { Component } from 'react';
import PropTypes from "prop-types";

import { pinStyle, pinStyleContentHover, pinStyleContent } from './box_pin_style';

class Pin extends Component {
  static propTypes = {
    airportName: PropTypes.string,
    doa: PropTypes.string,
    weather: PropTypes.string,
    price: PropTypes.string
  };

  static defaultProps = {};

  render() {
    if (this.props.$hover) {
      return <div style={pinStyle}>
              <div style={pinStyleContentHover}>
                {this.props.weather}
                <br/>
                {this.props.doa}
              </div>
              <div style={pinStyleContent}>
                {this.props.airportName}
                <br/>
                {this.props.price}
              </div>
            </div>;
    } else {
      return (
            <div style={pinStyle}>
              <div style={pinStyleContent}>
                {this.props.airportName}
                <br/>
                {this.props.price}
              </div>
            </div>
             );
    }
  }
}

export default Pin