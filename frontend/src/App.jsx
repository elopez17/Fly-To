import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
// import GMap from "./components/map/map";
import MapContainer from './components/map/map_container';
import FlightShowContainer from './components/flight/flight_show_container.jsx';
import { fetchAllGeo } from './actions/flights_actions';
import { connect } from 'react-redux';
import Modal from './components/modal/modal';
import {openModal} from './actions/modal_actions';
import SplashContainer from './components/splash/splash_container';


const mdp = (dispatch) => ({
  getAllGeo: () => dispatch(fetchAllGeo()),
  openModal: (modal) => dispatch(openModal(modal)),
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllGeo().then(() => console.log('all geos loaded'));
    this.props.openModal("splash");
  }
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}

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

export default connect(null, mdp)(App);

