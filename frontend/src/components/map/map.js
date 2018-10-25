// import React, { Component } from 'react';
// import { Map, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Pin from '../pin/pin'
// import { pinStyle, pinStyleHover } from '../pin/pin_style'



const googleAPI = require("../../keys").googleAPI;


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.41
    },
    zoom: 15
  };



  render() {
    // const style = this.props.$hover ? pinStyleHover : pinStyle;
    return (
      // Important! Always set the container height explicitly - set in app.jsx
      // <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPI }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Pin
            lat={59.955413}
            lng={30.337844}
            airportName={'HELLO FLYTO!!!'}
            doa={"10/31/18"}
            weather={'Cold'}
            price={"$422"}
            />

          <Pin
            lat={37.7749}
            lng={-122.4194}
            airportName={"SFO"}
            doa={"10/31/18"}
            weather={"Warm"}
            price={"$999"}
          />

          <Pin
            lat={40.7128}
            lng={-74.0060}
            airportName={"NYC"}
            doa={"10/31/18"}
            weather={"Cold"}
            price={"$846"}
          />
          
          
        </GoogleMapReact>
      // </div>
    );
  }
}

export default Map;
