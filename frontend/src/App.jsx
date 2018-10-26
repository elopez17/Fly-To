

import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Map from "./components/map/map";
// import MapContainer from './components/map/map_container';
import FlightShowContainer from './components/flight/flight_show_container.jsx';
// import { fetchAllData } from './actions/flights_actions';
import { connect } from 'react-redux';
import Modal from './components/modal/modal';
import {openModal} from './actions/modal_actions';


// const mdp = (dispatch) => ({
//   getAllData: (filters) => dispatch(fetchAllData(filters)),
// });

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   this.props.getAllData();
  // }
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}
  render() {
    return <div style={{ height: "100vh", width: "100%" }}>
        <Modal />
        <div className="sidebar-container btn-wrapper">
          <button className="icon icon-menu btn btn-primary" onClick={() => this.props.openModal("sidebar")} >
            <i class="fas fa-bars"></i>
          </button>
         
        </div>
        <Map />
      </div>;
  };
};

{/* <i class="fal fa-bars"></i> */}
const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal))
  }
}


export default connect(null, mapDispatchToProps)(App);
