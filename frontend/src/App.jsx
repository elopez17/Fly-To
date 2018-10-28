

import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
// import GMap from "./components/map/map";
import MapContainer from './components/map/map_container';
import FlightShowContainer from './components/flight/flight_show_container.jsx';
import { fetchAllQuotes, fetchAllGeo, setOrigin, setResults } from './actions/flights_actions';
import { connect } from 'react-redux';
import Modal from './components/modal/modal';
import {openModal} from './actions/modal_actions';
import SplashContainer from './components/splash/splash_container';


const msp = (state) => ({
  quotes: state.flights.quotes,
  places: state.flights.places,
  geo: state.flights.geo,
  origin: state.flights.origin,
});

const mdp = (dispatch) => ({
  getAllQuotes: (filters) => dispatch(fetchAllQuotes(filters)),
  getAllGeo: () => dispatch(fetchAllGeo()),
  setOrigin: (origin) => dispatch(setOrigin(origin)),
  setResults: (results) => dispatch(setResults(results)),
  openModal: (modal) => dispatch(openModal(modal)),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.getPlace = this.getPlace.bind(this);
    this.getGeo = this.getGeo.bind(this);
    this.getOrigin = this.getOrigin.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  componentDidMount() {
    this.props.openModal("splash")

    // this.props.getAllGeo().then(() => 
    //   this.props.getAllQuotes().then(() => {
    //     this.getOrigin("SFO");
    //     this.getResults(500);
    //   })
    // );
  }
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}

  getOrigin(airport){
    let place = this.getPlace(airport);
    let geo = this.getGeo(place);
    this.props.setOrigin(Object.assign(place, { Location: geo}));
  }
  
  getGeo(place){
    for (let i = 0; i < this.props.geo.Continents.length; i++) {
      for (let j = 0; j < this.props.geo.Continents[i].Countries.length; j++) {
        if (this.props.geo.Continents[i].Countries[j].Name === place.CountryName) {
          for (let k = 0; k < this.props.geo.Continents[i].Countries[j].Cities.length; k++) {
            if (this.props.geo.Continents[i].Countries[j].Cities[k].IataCode === place.IataCode) {
              return this.props.geo.Continents[i].Countries[j].Cities[k].Location;
            }
          }
        }
      }
    }
  }

  getPlace(airport){
    let place = null;
    for (let i = 0; i < this.props.places.length; i++) {
      if (this.props.places[i].IataCode === airport) {
        place = this.props.places[i];
        return place;
      }
    }
  }

  getResults(budget){
    let results = {};
    for (let i = 0; i < this.props.quotes.length; i++) {
      if (this.props.quotes[i].OutboundLeg.OriginId === this.props.origin.PlaceId &&
        this.props.quotes[i].MinPrice <= budget) {
      
       results[this.props.quotes[i].QuoteId] = this.props.quotes[i];
        for (let j = 0; j < this.props.places.length; j++) {
          if (this.props.places[j].PlaceId === this.props.quotes[i].OutboundLeg.DestinationId) {
            let airport = this.props.places[j].IataCode;
            let place = this.getPlace(airport);
            let geo = this.getGeo(place);
            results[this.props.quotes[i].QuoteId]['Location'] = geo;
            results[this.props.quotes[i].QuoteId]['Airport'] = airport;
            break;
          }
        }
        
      }
    }
    this.props.setResults(results);
    return results;
  }
  

  // <SplashContainer />
  render() {
    return <div style={{ height: "100vh", width: "100%" }}>
        <Modal />
        <div className="sidebar-container btn-wrapper">
          <button className="icon icon-menu btn btn-primary" onClick={() => this.props.openModal("sidebar")} >
            <i className="fas fa-bars"></i>
          </button>
         
        </div>
          <MapContainer>
          </MapContainer>
      </div>;


  };
};

{/* <i class="fal fa-bars"></i> */}

export default connect(msp, mdp)(App);

