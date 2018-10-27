import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-map-react";
import Pin from '../pin/pin'
// import { pinStyle, pinStyleHover } from '../pin/pin_style'
import { openModal } from '../../actions/modal_actions';
import { getChims } from '../../util/chim_util';
const googleAPI = require("../../keys").googleAPI;



let gPI;

class Map extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.41
    },
    zoom: 0
  };


  getLatLng(location) {
    let parsedLocations = [];
    location.split(', ').map(str => {
      parsedLocations.push(parseFloat(str));
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

  componentWillMount() {
    getChims().then(resp => {
      gPI = resp.data.key;
    });
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
    if (gPI) {
      return (
          <GoogleMapReact
            bootstrapURLKeys={{ key: gPI }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {(this.props.locations) ? this.createPins() : null}
  
          </GoogleMapReact>
      );
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default Map;
