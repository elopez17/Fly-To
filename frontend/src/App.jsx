import React, { Component } from 'react';
import './App.css';
import FlightShowContainer from './components/flight/flight_show_container.jsx';
// import { fetchAllData } from './actions/flights_actions';
import { connect } from 'react-redux';

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

    return (
      <div>
        test
        <FlightShowContainer />
      </div>
    );
  };
};
    
// export default connect(null, mdp)(App);
export default connect(null, null)(App);
