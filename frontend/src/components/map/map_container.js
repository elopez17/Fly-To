import React from 'react';
import { connect } from 'react-redux';
import Map from './map';

const mapStateToProps = (state) => {
  // debugger
  return {
    origin: state.flights.origin,
    locations: state.flights.results
  };
};

// const mapDispatchToProps = dispatch => ({
  
// });


export default connect(
  mapStateToProps,
  null
)(Map);