import React, { Component } from 'react';
import PropTypes from "prop-types";

import { originPinStyle, originPinStyleContentHover } from './origin_pin_style';

class OriginPin extends Component {
  static propTypes = {
    CityName: PropTypes.string
  };

  static defaultProps = {};

  render() {
    if (this.props.$hover) {
      return (<div>
                <div style={originPinStyleContentHover}>
                  {this.props.CityName}
                </div>
                <div style={originPinStyle}>
                </div>
              </div>
              );
    } else {
      return (
        <div style={originPinStyle}>
        </div>
      );
    }
  }
}

export default OriginPin