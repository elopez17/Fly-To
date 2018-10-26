import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-map-react";
import Pin from '../pin/pin';
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
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.41
    },
    zoom: 0
  };
// -122.534722, 48.794444
  getLatLng(location) {
    let parsedLocations = []
    location.split(', ').map(str => {
      parsedLocations.push(parseFloat(str))
    });
    return parsedLocations;
  }

  getDoa(date) {
    return date.slice(0,10);
  }

  parseProps() {

    let locations = Object.values(this.props.locations);
    let pins = {};
    let i = 1;
    locations.map(location => {
      let lL = this.getLatLng(location.Location)
      let date = this.getDoa(location.OutboundLeg.DepartureDate);
      pins[i] = {
        lat: lL[1],
        lng: lL[0],
        airportName: location.Airport,
        doa: date,
        weather: "NAY!",
        price: `$${location.MinPrice}`
      };
      i++;
    });
    return pins;
  }

  componentDidMount() {
    // setTimeout(() => {
    // }, 10000).then(() => {
    //   this.createPins();
    // })
    // ;
  }

  createPins() {
    let pins = Object.values(this.parseProps(this.props.locations));
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
          {(this.props.locations) ? this.createPins() : null}

        </GoogleMapReact>
      // </div>
    );
  }
}

export default Map;
