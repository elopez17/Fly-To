import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { Polyline } from "google-map-react";
import Pin from '../pin/pin';
import OriginPin from '../pin/origin_pin';
import { openModal } from '../../actions/modal_actions';
import { getChims } from '../../util/chim_util';

import ReactLoading from "react-loading";


const googleAPI = require("../../keys").googleAPI;
let gPI;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

    getChims().then(resp => {
      gPI = resp.data.key;
    });
    
    // this.createPins = this.createPins.bind(this);
  }

  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.41
    },
    zoom: 3
  };


  getLatLng(location) {
    let parsedLocations = [];
    location.split(', ').map(str => {
      parsedLocations.push(parseFloat(str));
    });
    return parsedLocations;
  }

  getDoa(date) {
    let fDate = date.slice(0,10).split('-');
    return `${fDate[1]}/${fDate[2]}/${fDate[0].slice(2)}`;
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
        weather: "Warm weather",
        price: `$${location.MinPrice}`
      };
      i++;
    });
    return pins;
  }


  componentDidMount(){
    this.setState({loading: false})
  }

  componentWillMount() {
    getChims().then(resp => {
      gPI = resp.data.key;
    });
  }

  createMapOptions(maps) {
    
    return {
      styles: require('./map_future_style.json'),
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_BOTTOM,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: false,
    };
}



  createPins() {
    let pins = Object.values(this.parseProps(this.props.locations));
      return (
        pins.map((pin, i) => {
              return (
                <Pin
                  key={i}
                  lat={pin.lat}
                  lng={pin.lng}
                  airportName={pin.airportName}
                  doa={pin.doa}
                  weather={pin.weather}
                  price={pin.price} />
              )
        })
      )
  }



  render() {


    const triangleCoords = [
      { lat: 25.774, lng: -80.190 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.190 }
    ];


    if (gPI) {
      return (
          <GoogleMapReact
            bootstrapURLKeys={{ key: gPI }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={this.createMapOptions}
          >
            
            {
              (Object.values(this.props.locations).length !== 0) 
              ? this.createPins()
              : null
            }

          {
            (Object.values(this.props.origin).length !== 0)
              ? <OriginPin
                lat={this.getLatLng(this.props.origin.Location)[1]}
                lng={this.getLatLng(this.props.origin.Location)[0]}
                CityName={this.props.origin.CityName}
              />
              : null
          }
  
          </GoogleMapReact>
      );
    } else {



      setTimeout(() => {
        this.forceUpdate();
      }, 2000);
      return (
        <div className="loading map-loading" color="#fff">
          <ReactLoading type="bubbles" color="rgb(95, 188, 205)" />
        </div>
        
      )

    }

  }
}

export default Map;