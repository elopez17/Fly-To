import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { Polyline } from "google-map-react";
import Pin from '../pin/pin';
import OriginPin from '../pin/origin_pin';
import {buttonStyle} from './map_theme_button_style';
import { openModal } from '../../actions/modal_actions';
import { getChims } from '../../util/chim_util';





let gPI;



class Map extends Component {
  constructor(props) {
    super(props);
    getChims().then(resp => {
      gPI = resp.data.key;
    });

    this.state = { 
      currentTheme: props.futureTheme,
      currentThemeName: "Future"
    };
    this.switchTheme = this.switchTheme.bind(this);
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

  



  createPins() {
    let pins = Object.values(this.parseProps(this.props.locations));
      // debugger
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

  switchTheme() {
    const themes = ["Future", "Dark", "Light", "Ween"];
    const files = [this.props.futureTheme, this.props.darkTheme, this.props.lightTheme, this.props.weenTheme];
    // debugger
    let i = 0;
    while (true) {
      if (themes[i] === this.state.currentThemeName) {
        this.setState({
          currentTheme: files[(i + 1) % 4],
          currentThemeName: themes[(i+1) % 4]
        });
        this.forceUpdate();
        break;
      }
      i++;
    }
  }



  render() {
    const triangleCoords = [
      { lat: 25.774, lng: -80.190 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.190 }
    ];

    if (gPI) {
      // debugger
      return (<div style={{ height: "100vh", width: "100%" }}>
        <button
          style={buttonStyle}
          onClick={this.switchTheme}
        >{this.state.currentThemeName}</button>
          <GoogleMapReact
            bootstrapURLKeys={{ key: gPI }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          options={{
            styles: this.state.currentTheme,
            zoomControlOptions: {
              position: 9,
              style: 1
            },
            mapTypeControlOptions: {
              position: 3
            },
            mapTypeControl: false,
          }}
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
  
        </GoogleMapReact></div>);
    } else {
      setTimeout(() => {
        this.forceUpdate();
      }, 2000);
      return (
        <div>Waiting for Map to load...</div>
        
      )
    }

  }
}

export default Map;