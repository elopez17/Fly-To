import React, { Component } from 'react';
import './App.css';
import FlightShowContainer from './components/flight/flight_show_container.jsx';
import { fetchAllQuotes, fetchAllGeo, setOrigin } from './actions/flights_actions';
import { connect } from 'react-redux';

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
});

class App extends Component {
  constructor(props) {
    super(props);
    this.getOriginPlace = this.getOriginPlace.bind(this);
    this.getOriginGeo = this.getOriginGeo.bind(this);
    this.getOrigin = this.getOrigin.bind(this);
  }

  componentDidMount() {
    this.props.getAllGeo().then(() => 
      this.props.getAllQuotes().then(() => this.getOrigin("SFO")));
  }
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}

  getOrigin(airport){
    let place = this.getOriginPlace(airport);
    let geo = this.getOriginGeo(airport);
    this.props.setOrigin(Object.assign(place, { Location: geo}));
  }
  
  getOriginGeo(airport){
    let geo = null;
    for (let i = 0; i < this.props.geo.Continents.length; i++) {
      for (let j = 0; j < this.props.geo.Continents[i].Countries.length; j++) {
        if (this.props.geo.Continents[i].Countries[j].Name === "United States") {
          for (let k = 0; k < this.props.geo.Continents[i].Countries[j].Cities.length; k++) {
            if (this.props.geo.Continents[i].Countries[j].Cities[k].IataCode === "SFO") {
              return this.props.geo.Continents[i].Countries[j].Cities[k].Location;
            }
          }
        }
      }
    }
  }

  getOriginPlace(airport){
    let place = null;
    for (let i = 0; i < this.props.places.length; i++) {
      if (this.props.places[i].IataCode === airport) {
        place = this.props.places[i];
        return place;
      }
    }
  }
  
  render() {
    return (
      <div>
        <FlightShowContainer />
      </div>
    );
  };
};
    
export default connect(msp, mdp)(App);
// export default connect(null, null)(App);
