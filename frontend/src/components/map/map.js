// import React, { Component } from 'react';
// import { Map, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-map-react";
import Pin from '../pin/pin'
// import { pinStyle, pinStyleHover } from '../pin/pin_style'
const googleAPI = require("../../keys").googleAPI;

const testObj = {
  1: {
    lat: 59.955413,
    lng: 30.337844,
    airportName: "HELLO FLYTO!!!",
    doa: "10/31/18",
    weather: "Cold",
    price: "$422"
  },
  2: {
    lat: 37.7749,
    lng: -122.4194,
    airportName: "SFO",
    doa: "10/31/18",
    weather: "Warm",
    price: "$999"
  },
  3: {
    lat: 40.7128,
    lng: -74.006,
    airportName: "NYC",
    doa: "10/31/18",
    weather: "Cold",
    price: "$846"
  },
  4: {
    lat: 47.6062,
    lng: -122.3321,
    airportName: "SEA",
    doa: "10/31/18",
    weather: "Rain",
    price: "$300"
  }
};




class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.41
    },
    zoom: 15
  };

  createPins() {
    let pins = Object.values(testObj);
    return (
      pins.map((pin, i) => (
        <Pin
          key={i}
          lat={pin.lat}
          lng={pin.lng}
          airportName={pin.airportName}
          doa={pin.doa}
          weather={pin.weather}
          price={pin.price}/>
      ))
    )
  }


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

          {this.createPins()}

        </GoogleMapReact>
      // </div>
    );
  }
}

export default Map;
