import React from 'react';
import { connect } from 'react-redux';
import FlightShow from './flight_show.jsx';

const mapStateToProps = state => {
    return ({

    })
}

const mapDispatchToProps = dispatch => {
    // getFlight: () => dispatch(getFlight());
}

export default connect(null, mapDispatchToProps)(FlightShow);