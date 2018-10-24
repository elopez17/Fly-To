import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import FlightShowContainer from './components/flight/flight_show_container.jsx';

class App extends Component {


  render() {

    //https://www.html5rocks.com/en/tutorials/cors/
      // const url = "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/us/anytime/anytime?apikey=prtl6749387986743898559646983194";

    return (

      <div>
        test
        <FlightShowContainer />
      </div>
    );
  };
};
    
export default App;
